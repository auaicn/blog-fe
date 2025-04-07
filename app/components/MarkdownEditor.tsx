"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function MarkdownEditor({ value, onChange }: Props) {
  return (
    <textarea
      className="w-full h-full p-6 font-mono text-sm bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 border-none outline-none resize-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
