import { cookies } from "next/headers";

export function GET() {
  cookies().delete("access_token");

  return Response.json({ message: "logout" });
}
