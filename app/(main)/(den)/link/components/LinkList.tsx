import { Link } from "../types";
import { mockLinks } from "../mock/links";
import { LinkListItem } from "./LinkListItem";

interface LinkListProps {
  selectedTag: string | "untagged" | null;
  selectedLink: Link | null;
  onLinkSelect: (link: Link | null) => void;
  onTagClick: (tagId: string) => void;
}

export function LinkList({
  selectedTag,
  selectedLink,
  onLinkSelect,
  onTagClick,
}: LinkListProps) {
  const filteredLinks = mockLinks.filter((link) => {
    if (selectedTag === "untagged") {
      return link.tags.length === 0;
    }
    if (selectedTag === null) {
      return true;
    }
    return link.tags.includes(selectedTag);
  });

  return (
    <div className="space-y-2">
      {filteredLinks.map((link) => (
        <LinkListItem
          key={link.id}
          link={link}
          isSelected={selectedLink?.id === link.id}
          onClick={() => onLinkSelect(link)}
          onTagClick={onTagClick}
        />
      ))}
    </div>
  );
}
