"user server";

import { jwtVerify } from "jose";

export default async function verifyToken(accessToken?: string) {
  if (!accessToken) {
    return false;
  }

  try {
    await jwtVerify(
      accessToken,
      new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_ACCESS_TOKEN_SECRET)
    );

    return true;
  } catch (error) {
    return false;
  }
}
