"use client";

import { SessionProvider } from "next-auth/react";
import { children } from "react";

const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
