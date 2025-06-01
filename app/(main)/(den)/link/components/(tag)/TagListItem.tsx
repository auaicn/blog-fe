import { slugify } from "@/app/lib/util/slug";
import { Tag } from "../../../../../../types/tag";
import { colorMap } from "../../../../../lib/colors";
import Link from "next/link";

interface Props {
  tag: Tag;
  isSelected: boolean;
  linkCount: number;
}

export function TagListItem({ tag, isSelected, linkCount }: Props) {
  const colors = colorMap[tag.colorId] || colorMap.gray;

  if (isSelected) {
    console.table({
      ...tag,
      isSelected,
      linkCount,
    });
  }

  return (
    <Link href={isSelected ? "/link/untagged" : `/link/${slugify(tag.name)}`}>
      <button
        className={`w-full px-4 py-2 text-left rounded-lg transition-colors flex items-center gap-2 ${
          isSelected
            ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
        }`}
      >
        <div className={`w-1 h-6 rounded-full ${colors.bg}`} />
        <span className="flex-1">{tag.name}</span>
        <span className="text-sm opacity-70">{linkCount}</span>
      </button>
    </Link>
  );
}
