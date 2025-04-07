import Link from "next/link";

interface Props {
  isSelected: boolean;
}

export function TagListItem$Untagged({ isSelected }: Props) {
  return (
    <Link href={"/link/untagged"}>
      <button
        className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
          isSelected
            ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
        }`}
      >
        Untagged
      </button>
    </Link>
  );
}
