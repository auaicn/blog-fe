import { colorMap } from "@/app/lib/colors";
import { fetchOGMetaData, OgMetaData } from "@/app/lib/og";
import { mockTags } from "@/mock";
import { Link } from "@/types";
import { useEffect, useState } from "react";

interface Props {
  link: Link;
  isSelected: boolean;
  onClick: () => void;
  onTagClick: (tagId: string) => void;
}

export function LinkListItem({ link, isSelected, onClick, onTagClick }: Props) {
  const [ogPreview, setOgPreview] = useState<OgMetaData | null>(null);
  const [favicon, setFavicon] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadOGData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchOGMetaData(link.url);
        setOgPreview(data);

        // Try to get favicon
        const url = new URL(link.url);
        const faviconUrl = `${url.origin}/favicon.ico`;
        const response = await fetch(faviconUrl);
        if (response.ok) {
          setFavicon(faviconUrl);
        }
      } catch (error) {
        console.error("Error fetching metadata:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadOGData();
  }, [link.url]);

  const getDomainInitial = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return domain[0].toUpperCase();
    } catch {
      return "?";
    }
  };

  const getTagColorClass = (tagId: string) => {
    const tag = mockTags.find((t) => t.id === tagId);
    if (!tag)
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    const colors = colorMap[tag.colorId] || colorMap.gray;
    return `${colors.bg} ${colors.text}`;
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(link.url, "_blank");
  };

  const handleTagClick = (e: React.MouseEvent, tagId: string) => {
    e.stopPropagation();
    onTagClick(tagId);
  };

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg cursor-pointer transition-colors ${
        isSelected
          ? "bg-blue-50 dark:bg-blue-900/30"
          : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-12 h-12 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={handleImageClick}
        >
          {isLoading ? (
            <div className="w-full h-full rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
          ) : ogPreview?.image ? (
            <img
              src={ogPreview.image}
              alt={link.title || getDomainInitial(link.url)}
              className="w-full h-full rounded object-cover border-2 border-blue-500"
            />
          ) : favicon ? (
            <img
              src={favicon}
              alt="favicon"
              className="w-full h-full rounded"
            />
          ) : (
            <div className="w-full h-full rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-lg font-medium text-gray-600 dark:text-gray-300">
                {getDomainInitial(link.url)}
              </span>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
            {isLoading ? (
              <span className="inline-block h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            ) : (
              <>
                {link.title}
                {ogPreview?.title && (
                  <span className="text-gray-500 dark:text-gray-400">
                    {" "}
                    {link.title && `(`}
                    {ogPreview.title}
                    {link.title && `)`}
                  </span>
                )}
              </>
            )}
          </h3>
          <div className="mt-1 h-10">
            {isLoading ? (
              <>
                <span className="block h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1" />
                <span className="block h-3 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </>
            ) : (
              <>
                {ogPreview?.description && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {ogPreview.description}
                  </p>
                )}
                {link.memo && (
                  <p className="text-sm text-gray-900 dark:text-gray-100 line-clamp-2">
                    {link.memo}
                  </p>
                )}
              </>
            )}
          </div>
          {!isLoading && ogPreview?.siteName && (
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
              {ogPreview.siteName}
            </p>
          )}
          <div className="mt-2 flex items-center gap-2">
            {link.tags
              .sort((a, b) => a.localeCompare(b))
              .map((tagId) => {
                const tag = mockTags.find((t) => t.id === tagId);
                if (!tag) return null;
                return (
                  <span
                    key={tagId}
                    onClick={(e) => handleTagClick(e, tagId)}
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity ${getTagColorClass(
                      tagId
                    )}`}
                  >
                    {tag.name}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
