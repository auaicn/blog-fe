import { mockTags } from "../mock/tags";
import { Tag } from "../types";
import { TagButton } from "./TagButton";
import { UntaggedButton } from "./UntaggedButton";

interface TagSidebarProps {
  selectedTag: string | "untagged" | null;
  onTagSelect: (tagId: string | "untagged" | null) => void;
}

export function TagSidebar({ selectedTag, onTagSelect }: TagSidebarProps) {
  const handleTagClick = (tagId: string) => {
    if (selectedTag === tagId) {
      onTagSelect(null);
    } else {
      onTagSelect(tagId);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <UntaggedButton
        isSelected={selectedTag === "untagged"}
        onClick={() => onTagSelect("untagged")}
      />
      {mockTags.map((tag) => (
        <TagButton
          key={tag.id}
          tag={tag}
          isSelected={selectedTag === tag.id}
          onClick={() => handleTagClick(tag.id)}
        />
      ))}
    </div>
  );
}
