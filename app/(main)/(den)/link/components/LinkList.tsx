import { Link } from "../types";
import { LinkListItem } from "./LinkListItem";

interface Props {
  selectedLink: Link | null;
  onLinkSelect: (link: Link) => void;
  onTagClick: (tag: string) => void;
  links: Link[];
}

export function LinkList({
  selectedLink,
  onLinkSelect,
  onTagClick,
  links,
}: Props) {
  return (
    <div className="space-y-4">
      {links.map((link) => (
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
