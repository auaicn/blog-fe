"use client";

import { usePathname } from "next/navigation";
import { NavButton } from "../../navButton";

export const BlogButton = () => {
  const pathname = usePathname();

  return (
    <NavButton label="Blog" href="/blog" isActive={pathname === "/blog"} />
  );
};
