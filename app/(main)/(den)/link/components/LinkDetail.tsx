import { Link } from "../types";
import { mockTags } from "../mock/tags";
import { colorMap } from "../constants/colors";
import { fetchOGMetaData } from "../utils/og";
import { useEffect, useState } from "react";

interface LinkDetailProps {
  link: Link | null;
}

interface OGPreview {
  title: string;
  description: string;
  image: string;
  siteName: string;
}

export function LinkDetail({ link }: LinkDetailProps) {
  const [ogPreview, setOgPreview] = useState<OGPreview | null>(null);
  const [favicon, setFavicon] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!link) {
      setOgPreview(null);
      setFavicon(null);
      setIsLoading(false);
      return;
    }

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
  }, [link]);

  if (!link) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
        Select a link to view details
      </div>
    );
  }

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

  const handleClick = () => {
    window.open(link.url, "_blank");
  };

  return (
    <div className="p-6">
      <div className="space-y-6">
        <div
          className="w-full aspect-video cursor-pointer hover:opacity-90 transition-opacity"
          onClick={handleClick}
        >
          {isLoading ? (
            <div className="w-full h-full rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse" />
          ) : ogPreview?.image ? (
            <img
              src={ogPreview.image}
              alt={link.title || getDomainInitial(link.url)}
              className="w-full h-full rounded-xl object-cover shadow-md"
            />
          ) : favicon ? (
            <img
              src={favicon}
              alt="favicon"
              className="w-full h-full rounded-xl shadow-md"
            />
          ) : (
            <div className="w-full h-full rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center shadow-md">
              <span className="text-4xl font-medium text-gray-600 dark:text-gray-300">
                {getDomainInitial(link.url)}
              </span>
            </div>
          )}
        </div>
        <div>
          <div>
            <h2
              className="text-2xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
              onClick={handleClick}
            >
              {isLoading ? (
                <span className="inline-block h-7 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              ) : (
                link.title || getDomainInitial(link.url)
              )}
            </h2>
            <p
              className="mt-2 text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
              onClick={handleClick}
            >
              {isLoading ? (
                <span className="inline-block h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              ) : (
                ogPreview?.siteName || new URL(link.url).hostname
              )}
            </p>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            {isLoading ? (
              <>
                <span className="block h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
                <span className="block h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </>
            ) : (
              link.memo || "No description available"
            )}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {link.tags.map((tagId) => {
              const tag = mockTags.find((t) => t.id === tagId);
              if (!tag) return null;
              return (
                <span
                  key={tagId}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTagColorClass(
                    tagId
                  )}`}
                >
                  {tag.name}
                </span>
              );
            })}
          </div>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Added on {new Date(link.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}
