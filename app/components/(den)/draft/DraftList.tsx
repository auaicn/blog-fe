"use client";

import Link from "next/link";
import { mockDrafts } from "@/mock";
import { slugify } from "@/app/lib/util/slug";

export const DraftList = () => {
  return (
    <aside className="w-64 p-4 border-r overflow-y-auto h-screen">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <ul className="space-y-3">
        {mockDrafts.map((post) => (
          <li key={post.title}>
            <Link
              href={`/blog/${slugify(post.title)}`}
              className="block hover:underline"
            >
              <div className="font-medium">{post.title}</div>
              <div className="text-sm text-gray-500 space-x-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
