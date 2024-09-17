import { NextResponse, type NextRequest } from "next/server";
import verifyToken from "./functions/verifyToken";
export async function middleware(req: NextRequest) {
  const { cookies } = req;
  const accessToken = cookies.get("access_token")?.value;
  const isTokenValid = accessToken ? await verifyToken(accessToken) : false;

  if (!isTokenValid && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (isTokenValid && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/pedidos", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
