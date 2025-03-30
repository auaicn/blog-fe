import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const NavButton = ({
  href,
  label,
  isActive = false,
}: {
  href?: string;
  label: string;
  isActive?: boolean;
}) => (
  <Link
    href={href ?? ""}
    className={twMerge(
      "px-8 py-3 w-[150px] text-center  bg-transparent hover:bg-indigo-700/50",
      isActive &&
        "underline decoration-wavy decoration-2 underline-offset-8 decoration-white"
    )}
  >
    {label}
  </Link>
);
