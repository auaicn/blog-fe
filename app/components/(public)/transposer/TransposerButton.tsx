"use client";

import { NavButton } from "../../navButton";
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
