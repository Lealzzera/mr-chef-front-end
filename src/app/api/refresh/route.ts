import { env } from "@/env";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const authorization = headers().get("refresh_token");
    const res = await fetch(`${env.MR_CHEFE_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
    }).then((result) => {
      return result.json();
    });

    return NextResponse.json(authorization, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 401 });
  }
}
