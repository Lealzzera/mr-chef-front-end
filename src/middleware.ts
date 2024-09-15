import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { jwtVerify } from "jose";
import { env } from "./env";

type DecodedToken = {
  sub: string;
  iat: number;
  exp: number;
};

export async function middleware(req: NextRequest) {
  const { cookies } = req;
  const accessToken = cookies.get("access_token");
  const refreshToken = cookies.get("refresh_token");

  if ((!accessToken || !refreshToken) && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
