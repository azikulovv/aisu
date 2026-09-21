import fs from "node:fs/promises";
import path from "node:path";
import { pool } from "./client";

const MIGRATIONS_TABLE = "schema_migrations";
const MIGRATIONS_DIR = path.resolve(process.cwd(), "migrations");

type Migration = {
  id: number;
  name: string;
  filename: string;
  sql: string;
};

function parseMigration(filename: string, sql: string): Migration {
  const match = filename.match(/^(\d+)[-_](.+)\.sql$/);

  if (!match) {
    throw new Error(
      `Invalid migration filename: ${filename}\n` +
        `Expected: 0001_create_users.sql`,
    );
  }

  return {
    id: Number(match[1]),
    name: match[2],
    filename,
    sql,
  };
}

async function getMigrations(): Promise<Migration[]> {
  const files = await fs.readdir(MIGRATIONS_DIR);

  const migrations = await Promise.all(
    files
      .filter((file) => file.endsWith(".sql"))
      .map(async (filename) => {
        const sql = await fs.readFile(
          path.join(MIGRATIONS_DIR, filename),
          "utf8",
        );

        return parseMigration(filename, sql);
      }),
  );

  migrations.sort((a, b) => a.id - b.id);

  for (let i = 1; i < migrations.length; i++) {
    if (migrations[i - 1].id === migrations[i].id) {
      throw new Error(`Duplicate migration id: ${migrations[i].id}`);
    }
  }

  return migrations;
}

async function ensureMigrationsTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS ${MIGRATIONS_TABLE} (
      id BIGINT PRIMARY KEY,
      name TEXT NOT NULL,
      filename TEXT NOT NULL UNIQUE,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
}

async function getAppliedMigrations(): Promise<Set<number>> {
  const { rows } = await pool.query<{ id: string }>(`
    SELECT id
    FROM ${MIGRATIONS_TABLE}
    ORDER BY id;
  `);

  return new Set(rows.map((row) => Number(row.id)));
}

export async function migrate() {
  console.log("\n  Database migrations\n");

  await ensureMigrationsTable();

  const migrations = await getMigrations();
  const applied = await getAppliedMigrations();

  const pending = migrations.filter((migration) => !applied.has(migration.id));

  if (pending.length === 0) {
    console.log("  ✓ Database is up to date\n");
    return;
  }

  console.log(`  ${pending.length} migration(s) pending\n`);

  const lock = await pool.connect();

  try {
    // PostgreSQL advisory lock.
    // Не позволит двум runner'ам выполнять миграции одновременно.
    await lock.query(`
      SELECT pg_advisory_lock(74321);
    `);

    for (const migration of pending) {
      const startedAt = performance.now();

      process.stdout.write(`  → ${migration.filename} `);

      try {
        await lock.query("BEGIN");

        await lock.query(migration.sql);

        await lock.query(
          `
            INSERT INTO ${MIGRATIONS_TABLE}
              (id, name, filename)
            VALUES ($1, $2, $3)
          `,
          [migration.id, migration.name, migration.filename],
        );

        await lock.query("COMMIT");

        const duration = Math.round(performance.now() - startedAt);

        console.log(`✓  ${duration}ms`);
      } catch (error) {
        await lock.query("ROLLBACK");

        console.log("✗");

        throw error;
      }
    }

    console.log(`\n  ✓ Applied ${pending.length} migration(s)\n`);
  } finally {
    await lock.query(`
      SELECT pg_advisory_unlock(74321);
    `);

    lock.release();
  }
}
