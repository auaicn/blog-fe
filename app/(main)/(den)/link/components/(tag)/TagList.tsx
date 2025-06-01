import { mockLinks, mockTags } from "@/mock";
import { TagListItem } from "./TagListItem";
import { TagListItem$Untagged } from "./TagListItem.Untagged";

interface Props {
  selectedTagId: number | null;
}

export function TagList({ selectedTagId }: Props) {
  console.log("selectedTagId", selectedTagId);
  console.log(mockTags);
  return (
    <div className="flex flex-col gap-2">
      <TagListItem$Untagged isSelected={selectedTagId === null} />
      {mockTags.map((tag) => {
        let count = 0;

        for (const { tags } of mockLinks) {
          if (tags.find((tagId) => tagId === tag.id)) {
            count++;
          }
        }

        console.table({ ...tag, count });

        return (
          <TagListItem
            tag={tag}
            linkCount={count}
            isSelected={selectedTagId === tag.id}
          />
        );
      })}
    </div>
  );
}
