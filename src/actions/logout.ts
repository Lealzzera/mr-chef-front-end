"use server";

import { cookies } from "next/headers";

export default async function logout() {
  cookies().delete("access_token");
  cookies().delete("refresh_token");
  cookies().delete("userId");
}
