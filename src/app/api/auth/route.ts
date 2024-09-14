import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const { accessToken } = await fetch(
      `${process.env.MR_CHEFE_URL}/auth/sessions`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      }
    ).then((res) => {
      const refreshToken = res.headers.get("set-cookie");
      console.log(refreshToken);

      if (refreshToken) {
        cookies().set({
          name: "refresh_token",
          value: refreshToken.split("=")[1].split(";")[0],
          maxAge: 60 * 1000 * 60 * 24 * 7,
          httpOnly: true,
          sameSite: "strict",
          path: "/",
        });
      }
      return res.json();
    });

    cookies().set("access_token", accessToken);

    return NextResponse.json(accessToken, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 401 });
  }
}
