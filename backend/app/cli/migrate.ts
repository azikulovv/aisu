import "dotenv/config";

import { closeDatabase } from "@app/infrastructure/db/client";
import { migrate } from "@app/infrastructure/db/migrator";

async function main() {
  try {
    await migrate();
  } catch (error) {
    console.error("\n  ✗ Migration failed\n");
    console.error(error);

    process.exitCode = 1;
  } finally {
    await closeDatabase();
  }
}

main();
