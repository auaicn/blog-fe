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
      "px-8 py-3 w-[150px] text-center transition-colors duration-200",
      "bg-transparent hover:bg-indigo-700/30 dark:hover:bg-indigo-700/40",
      "text-white dark:text-gray-200",
      isActive && "bg-indigo-700/30 dark:bg-indigo-700/40"
    )}
  >
    {label}
  </Link>
);
