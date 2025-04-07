"use client";

import { useState, useEffect } from "react";
import { TagList } from "@/app/(main)/(den)/link/components/(tag)/TagList";
import { LinkDetail } from "@/app/(main)/(den)/link/components/(detail)/LinkDetail";
import { LinkList } from "../components/(list)/LinkList";
import { mockLinks } from "@/mock/(den)/link";
import { Link } from "@/types";

export default function Links({ tagId }: { tagId: number | null }) {
  const [selectedLink, setSelectedLink] = useState<Link | null>(null);
  const [links, setLinks] = useState<Link[]>(mockLinks);

  // Get selected tag from URL path
  const selectedTagId = tagId || null;

  // Filter links based on selected tag
  const filteredLinks = links.filter((link) => {
    if (selectedTagId === null) {
      return link.tags.length === 0;
    }

    return link.tags.includes(selectedTagId);
  });

  // Clear selected link if it's not in the filtered results
  useEffect(() => {
    if (
      selectedLink &&
      !filteredLinks.some((link) => link.id === selectedLink.id)
    ) {
      setSelectedLink(null);
    }
  }, [selectedTagId, selectedLink, filteredLinks]);

  const handleUpdateLink = (updatedLink: Link) => {
    setLinks(
      links.map((link) => (link.id === updatedLink.id ? updatedLink : link))
    );
    setSelectedLink(updatedLink);
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 pr-4 overflow-y-auto">
        <TagList selectedTagId={selectedTagId} />
      </div>
      <div className="w-[1px] bg-gray-200" />
      <div className="flex-1 p-4 overflow-y-auto">
        <LinkList
          selectedLink={selectedLink}
          links={filteredLinks}
          onLinkSelect={setSelectedLink}
        />
      </div>
      <div className="w-[1px] bg-gray-200" />
      <div className="w-96 p-4 overflow-y-auto">
        <LinkDetail link={selectedLink} onUpdate={handleUpdateLink} />
      </div>
    </div>
  );
}
