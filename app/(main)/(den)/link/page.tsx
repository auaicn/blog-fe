"use client";

import { useState, useEffect } from "react";
import { TagSidebar } from "./components/TagSidebar";
import { LinkDetail } from "./components/LinkDetail";
import { Link, Tag } from "./types";
import { LinkList } from "./components/LinkList";
import { mockLinks } from "./mock/links";

export default function LinkPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedLink, setSelectedLink] = useState<Link | null>(null);

  // Filter links based on selected tag
  const filteredLinks = mockLinks.filter((link) => {
    if (selectedTag === "untagged") {
      return link.tags.length === 0;
    }
    if (selectedTag === null) {
      return true;
    }
    return link.tags.includes(selectedTag);
  });

  // Clear selected link if it's not in the filtered results
  useEffect(() => {
    if (
      selectedLink &&
      !filteredLinks.some((link) => link.id === selectedLink.id)
    ) {
      setSelectedLink(null);
    }
  }, [selectedTag, selectedLink, filteredLinks]);

  return (
    <div className="flex h-screen">
      <div className="w-64 pr-4 overflow-y-auto">
        <TagSidebar selectedTag={selectedTag} onTagSelect={setSelectedTag} />
      </div>
      <div className="w-[1px] bg-gray-200/50" />
      <div className="flex-1 p-4 overflow-y-auto">
        <LinkList
          selectedTag={selectedTag}
          selectedLink={selectedLink}
          onLinkSelect={setSelectedLink}
          onTagClick={setSelectedTag}
        />
      </div>
      <div className="w-[1px] bg-gray-200/50" />
      <div className="w-96 p-4 overflow-y-auto">
        <LinkDetail link={selectedLink} />
      </div>
    </div>
  );
}
