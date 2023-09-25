import React from "react";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
