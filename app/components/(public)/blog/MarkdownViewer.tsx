"use client";

import { useState } from "react";
import { MarkdownEditor } from "./MarkdownEditor";
import { MarkdownPreview } from "./MarkdownPreview";

interface Props {
  disableEditing?: boolean;
  value: string;
  onChange?: (value: string) => void;
}

export function MarkdownViewer({
  disableEditing = false,
  value,
  onChange,
}: Props) {
  const [markdown, setMarkdown] = useState(value);

  if (disableEditing) {
    return (
      <div className="flex h-full overflow-y-scroll">
        <div className="w-1/2">
          <MarkdownPreview markdown={markdown} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full overflow-y-scroll">
      <div className="w-1/2 border-r">
        <MarkdownEditor
          value={markdown}
          onChange={(e) => {
            setMarkdown(e);
          }}
        />
      </div>
      <div className="w-1/2">
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
}
