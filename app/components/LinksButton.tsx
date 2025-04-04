"use client";

import { useSession } from "next-auth/react";
import { NavButton } from "./navButton";
import { usePathname } from "next/navigation";

export const LinksButton = () => {
  const session = useSession();
  const pathname = usePathname();

  return (
    session.data?.user && (
      <NavButton label="Links" href="/link" isActive={pathname === "/link"} />
    )
  );
};
