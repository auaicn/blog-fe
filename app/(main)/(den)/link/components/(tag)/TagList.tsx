import { mockLinks, mockTags } from "@/mock";
import { TagListItem } from "./TagListItem";
import { TagListItem$Untagged } from "./TagListItem.Untagged";

interface Props {
  selectedTagId: number | null;
}

export function TagList({ selectedTagId }: Props) {
  const linkCounts = new Map<number, number>();

  for (const link of mockLinks) {
    if (!link.tags.length) {
      if (!linkCounts.has(-1)) {
        linkCounts.set(-1, 0);
      }

      linkCounts.set(-1, linkCounts.get(-1)! + 1);

      continue;
    }

    for (const tag of link.tags) {
      if (!linkCounts.has(tag)) {
        linkCounts.set(tag, 0);
      }

      linkCounts.set(tag, linkCounts.get(tag)! + 1);

      continue;
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <TagListItem$Untagged isSelected={selectedTagId === null} />
      {mockTags.map((tag) => {
        return (
          <TagListItem
            key={tag.id}
            tag={tag}
            linkCount={linkCounts.get(tag.id) ?? 0}
            isSelected={selectedTagId === tag.id}
          />
        );
      })}
    </div>
  );
}
