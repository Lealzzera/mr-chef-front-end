"use server";

import { cookies } from "next/headers";
import { LoginResponse } from "./actions.type";

export default async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MR_CHEFE_URL}/auth/sessions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    cookies().set("access_token", data.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 20,
    });

    return { data, status: response.status };
  } catch (err: any) {
    return err;
  }
}
