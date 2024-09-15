import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const response = await fetch(`${process.env.MR_CHEFE_URL}/auth/sessions`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const { message, error, statusCode } = await response.json();
    return NextResponse.json({ message, error }, { status: statusCode });
  }

  const refreshTokenCookie = response.headers.get("set-cookie");

  if (refreshTokenCookie) {
    const sevenDaysAge = 60 * 1000 * 60 * 24 * 7;
    const refreshTokenCookieValue = refreshTokenCookie
      ?.split("=")[1]
      .split(";")[0];
    cookies().set("refresh_token", refreshTokenCookieValue, {
      maxAge: sevenDaysAge,
      httpOnly: true,
      sameSite: "strict",
      path: "/",
    });
  }

  const accessToken = await response.json();
  return NextResponse.json(accessToken);
}
