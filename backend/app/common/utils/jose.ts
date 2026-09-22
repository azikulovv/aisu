import { jwtVerify, SignJWT } from "jose";
import { env } from "../../config";

const secret = new TextEncoder().encode(env.JWT_SECRET);

export type JwtPayload = {
  userId: string;
};

export async function createAccessToken(userId: string) {
  return new SignJWT({
    userId,
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(secret);
}

export async function verifyAccessToken(token: string): Promise<JwtPayload> {
  const { payload } = await jwtVerify<JwtPayload>(token, secret);

  return payload;
}
