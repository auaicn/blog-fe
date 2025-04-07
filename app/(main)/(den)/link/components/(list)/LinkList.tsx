import { Link } from "@/types";
import { LinkListItem } from "./LinkListItem";

interface Props {
  selectedLink: Link | null;
  links: Link[];
  onLinkSelect: (link: Link) => void;
}

export function LinkList({ selectedLink, links, onLinkSelect }: Props) {
  return (
    <div className="space-y-4">
      {links.map((link) => (
        <LinkListItem
          key={link.id}
          link={link}
          isSelected={selectedLink?.id === link.id}
          onClick={() => onLinkSelect(link)}
        />
      ))}
    </div>
  );
}
