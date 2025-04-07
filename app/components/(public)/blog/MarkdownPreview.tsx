"use client";

import { marked } from "marked";

interface Props {
  markdown: string;
}

export function MarkdownPreview({ markdown }: Props) {
  const html = marked.parse(markdown);

  return (
    <div className="markdown-body h-full px-6">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
