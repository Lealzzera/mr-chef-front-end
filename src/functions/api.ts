import axios from "axios";
import { AuthenticateUserType } from "./api.types";

const urlInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MR_CHEFE_URL,
  timeout: 1000,
});

export async function authenticateUser({
  email,
  password,
}: AuthenticateUserType) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_MR_CHEFE_URL}/auth/sessions`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );

  return response.data;
}
