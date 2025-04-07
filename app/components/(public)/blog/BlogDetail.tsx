import { marked } from "marked";

type Props = {
  markdown: string;
};

export const BlogDetail = ({ markdown }: Props) => {
  const html = marked.parse(markdown);

  return (
    <article
      className="prose max-w-none p-8"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
