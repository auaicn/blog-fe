"use client";

import { useSession } from "next-auth/react";
import { NavButton } from "./navButton";

export const AboutButton = () => {
  const session = useSession();

  return (
    <NavButton
      label="About"
      href="/about"
      isActive={session.status === "authenticated"}
    />
  );
};
