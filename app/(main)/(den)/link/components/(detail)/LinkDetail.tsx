import { useRef } from "react";
import { Link } from "../../types";
import { mockTags } from "../../mock/tags";
import { colorMap } from "../../../../../lib/colors";
import { fetchOGMetaData, OgMetaData } from "../../../../../lib/og";
import { useEffect, useState } from "react";

interface Props {
  link: Link | null;
  onUpdate?: (updatedLink: Link) => void;
}

export function LinkDetail({ link, onUpdate }: Props) {
  const [ogPreview, setOgPreview] = useState<OgMetaData | null>(null);
  const [favicon, setFavicon] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingMemo, setIsEditingMemo] = useState(false);

  const [editedTitle, setEditedTitle] = useState("");
  const [editedMemo, setEditedMemo] = useState("");
  const [editedUrl, setEditedUrl] = useState("");

  // 컴포넌트 상단
  const urlRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const memoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        titleRef.current &&
        !titleRef.current.contains(e.target as Node) &&
        isEditingTitle
      ) {
        handleSave();
        setIsEditingTitle(false);
      }

      if (
        memoRef.current &&
        !memoRef.current.contains(e.target as Node) &&
        isEditingMemo
      ) {
        handleSave();
        setIsEditingMemo(false);
      }

      if (
        memoRef.current &&
        !memoRef.current.contains(e.target as Node) &&
        isEditingMemo
      ) {
        handleSave();
        setIsEditingMemo(false);
      }

      if (
        urlRef.current &&
        !urlRef.current.contains(e.target as Node) &&
        isEditingUrl
      ) {
        handleSave();
        setIsEditingUrl(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditingTitle, isEditingMemo, editedTitle, editedMemo]);

  useEffect(() => {
    if (link) {
      setIsEditingTitle(false);
      setIsEditingMemo(false);
      setIsEditingUrl(false);
      setEditedTitle(link.title);
      setEditedMemo(link.memo || "");
      setEditedUrl(link.url);
    }
  }, [link]);

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
        console.warn("Error fetching metadata:", link.url);
      } finally {
        setIsLoading(false);
      }
    };
    loadOGData();
  }, [link]);

  const handleSave = () => {
    if (!link || !onUpdate) return;
    const updatedLink = {
      ...link,
      title: editedTitle,
      memo: editedMemo,
      url: editedUrl,
    };
    onUpdate(updatedLink);
    setIsEditingTitle(false);
    setIsEditingMemo(false);
    setIsEditingUrl(false);
  };

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
          className="w-full aspect-auto cursor-pointer hover:opacity-90 transition-opacity h-64"
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
          <div ref={titleRef}>
            {isEditingTitle ? (
              <input
                type="text"
                value={editedTitle}
                autoFocus
                onChange={(e) => setEditedTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setIsEditingTitle(false);
                    setEditedTitle(link.title);
                  }

                  if (e.key === "Enter") {
                    handleSave();
                    setIsEditingTitle(false);
                  }
                }}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <h2
                className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-400"
                onClick={() => setIsEditingTitle(true)}
              >
                {link.title || "No title yet"}
              </h2>
            )}
          </div>
          {/* url */}
          <div ref={urlRef}>
            <p className="mt-2 text-sm w-full text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
              {isLoading ? (
                <span className="inline-block h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              ) : isEditingUrl ? (
                <input
                  type="text"
                  value={editedUrl}
                  onChange={(e) => setEditedUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setIsEditingUrl(false);
                      setEditedUrl(link.url);
                    }

                    if (e.key === "Enter") {
                      handleSave();
                      setIsEditingUrl(false);
                    }
                  }}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span
                  onClick={() => setIsEditingUrl(true)}
                  className="w-full block"
                >
                  {new URL(link.url).hostname}
                </span>
              )}
            </p>
          </div>
          {ogPreview?.siteName && (
            <p
              className="mt-2 text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
              onClick={handleClick}
            >
              {isLoading ? (
                <span className="inline-block h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              ) : (
                ogPreview?.siteName
              )}
            </p>
          )}
          <div className="mt-4" ref={memoRef}>
            {isEditingMemo ? (
              <textarea
                value={editedMemo}
                onChange={(e) => setEditedMemo(e.target.value)}
                autoFocus
                rows={4}
                placeholder="Enter memo"
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setIsEditingMemo(false);
                    setEditedMemo(link.memo || "");
                  }

                  if (e.key === "Enter") {
                    if (e.shiftKey) {
                      e.preventDefault();
                      const textarea = e.currentTarget;
                      const start = textarea.selectionStart;
                      const end = textarea.selectionEnd;

                      const newValue =
                        editedMemo.substring(0, start) +
                        "\n" +
                        editedMemo.substring(end);

                      setEditedMemo(newValue);

                      // Move cursor after the inserted newline
                      requestAnimationFrame(() => {
                        textarea.selectionStart = textarea.selectionEnd =
                          start + 1;
                      });
                    } else {
                      e.preventDefault(); // optional, if you don't want default newline
                      handleSave();
                      setIsEditingMemo(false);
                    }
                  }
                }}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p
                className="text-gray-600 dark:text-gray-300 leading-relaxed hover:gray-700 dark:hover:text-gray-400 whitespace-pre-wrap"
                onClick={() => setIsEditingMemo(true)}
              >
                {link.memo || "No description yet"}
              </p>
            )}
          </div>
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
