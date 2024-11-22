"use server";

import { cookies } from "next/headers";
import { GetStoreResponse } from "./actions.type";

export default async function getStores(
  userId?: string
): Promise<GetStoreResponse> {
  const accessToken = cookies().get("access_token")?.value;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MR_CHEFE_URL}/user-store/${userId}`,
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
