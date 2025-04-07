import { mockTags } from "@/mock";
import { TagListItem } from "./TagListItem";
import { TagListItem$Untagged } from "./TagListItem.Untagged";

interface Props {
  selectedTag: string | "untagged" | null;
  onTagSelect: (tagId: string | "untagged" | null) => void;
}

export function TagList({ selectedTag, onTagSelect }: Props) {
  const handleTagClick = (tagId: string) => {
    if (selectedTag === tagId) {
      onTagSelect(null);
    } else {
      onTagSelect(tagId);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <TagListItem$Untagged
        isSelected={selectedTag === "untagged"}
        onClick={() => onTagSelect("untagged")}
      />
      {mockTags.map((tag) => (
        <TagListItem
          key={tag.id}
          tag={tag}
          isSelected={selectedTag === tag.id}
          onClick={() => handleTagClick(tag.id)}
        />
      ))}
    </div>
  );
}
