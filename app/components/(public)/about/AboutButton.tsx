"use client";

import { NavButton } from "../../navButton";
import { usePathname } from "next/navigation";

export const AboutButton = () => {
  const pathname = usePathname();

  return (
    <NavButton label="About" href="/about" isActive={pathname === "/about"} />
  );
};
