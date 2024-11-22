"use client";

import { UserProvider } from "@/context/userContext/userContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};
