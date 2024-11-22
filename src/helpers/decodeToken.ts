import { jwtVerify } from "jose";

export async function decodeToken(token: string) {
  const decodedToken = await jwtVerify(
    token,
    new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_ACCESS_TOKEN_SECRET)
  );

  return decodedToken;
}
