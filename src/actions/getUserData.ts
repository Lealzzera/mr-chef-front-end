"use server";
import { cookies } from "next/headers";

export async function getUserData(userId?: string) {
  const accessToken = cookies().get("access_token")?.value;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MR_CHEFE_URL}/users/${userId}`,
      {
        headers: { Authorization: `Bearer: ${accessToken}` },
      }
    );

    const data = await response.json();
    return { data, status: data.status };
  } catch (err: any) {
    return err;
  }
}
