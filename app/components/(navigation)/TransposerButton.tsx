"use client";

import { NavButton } from "./NavButton";
import { usePathname } from "next/navigation";

export const TransposerButton = () => {
  const pathname = usePathname();

  return (
    <NavButton
      label="Transposer"
      href="/transposer"
      isActive={pathname === "/transposer"}
    />
  );
};
