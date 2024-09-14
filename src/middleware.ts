import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const accessToken = cookies().get("access_token")?.value;
  if (accessToken && process.env.JWT_ACCES_TOKEN_SECRET) {
    console.log(accessToken);
  }
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
