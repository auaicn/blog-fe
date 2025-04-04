"use client";

import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { NavButton } from "./navButton";
import { handleSignOut } from "actions/auth";

export const Navigation = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  console.log("Session:", session);
  console.log("Status:", status);

  return (
    <nav className={twMerge("p-0 text-white flex gap-4")}>
      <div className="flex gap-4 h-[60px] content-stretch items-center justify-between w-full">
        <div className="flex gap-4 ">
          {[
            { href: "/md", label: "Drafts", visible: !!session?.user },
            { href: "/link", label: "Links", visible: !!session?.user },
            { href: "/about", label: "About", visible: true },
            { href: "/blog", label: "Blog", visible: true },
            { href: "/transposer", label: "Transposer", visible: true },
          ].map(
            ({ href, label, visible }) =>
              visible && (
                <NavButton
                  key={href}
                  href={href}
                  label={label}
                  isActive={pathname === href}
                />
              )
          )}
        </div>
        {session?.user!! ? (
          <form action={handleSignOut}>
            <NavButton label={"Log out"} />
          </form>
        ) : (
          <NavButton label={"Login"} href="/login" />
        )}
      </div>
    </nav>
  );
};
