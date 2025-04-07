"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TagList } from "@/app/(main)/(den)/link/components/(tag)/TagList";
import { LinkDetail } from "@/app/(main)/(den)/link/components/(detail)/LinkDetail";
import { Link } from "@/types/tag";
import { LinkList } from "../components/(list)/LinkList";
import { mockLinks } from "@/mock/(den)/link";

export default function Links({ tag }: { tag: string | null }) {
  const router = useRouter();
  const [selectedLink, setSelectedLink] = useState<Link | null>(null);
  const [links, setLinks] = useState<Link[]>(mockLinks);

  // Get selected tag from URL path
  const selectedTag = tag || null;

  // Update URL when tag changes
  const handleTagSelect = (tag: string | null) => {
    if (tag) {
      router.push(`/link/${tag}`);
    } else {
      router.push("/link");
    }
  };

  // Filter links based on selected tag
  const filteredLinks = links.filter((link) => {
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

  const handleUpdateLink = (updatedLink: Link) => {
    setLinks(
      links.map((link) => (link.id === updatedLink.id ? updatedLink : link))
    );
    setSelectedLink(updatedLink);
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 pr-4 overflow-y-auto">
        <TagList selectedTag={selectedTag} onTagSelect={handleTagSelect} />
      </div>
      <div className="w-[1px] bg-gray-200" />
      <div className="flex-1 p-4 overflow-y-auto">
        <LinkList
          selectedLink={selectedLink}
          onLinkSelect={setSelectedLink}
          onTagClick={handleTagSelect}
          links={filteredLinks}
        />
      </div>
      <div className="w-[1px] bg-gray-200" />
      <div className="w-96 p-4 overflow-y-auto">
        <LinkDetail link={selectedLink} onUpdate={handleUpdateLink} />
      </div>
    </div>
  );
}
