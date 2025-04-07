import { MarkdownViewer } from "@/app/components/MarkdownViewer";
import { slugify } from "@/app/lib/util/slug";
import { mockDrafts } from "@/mock";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function DraftDetailPage({ params }: Readonly<Props>) {
  const { slug } = await params;

  const post = mockDrafts.find((p) => slugify(p.title) === slug);

  if (!post) return <div className="p-8">Post not found.</div>;

  return <MarkdownViewer value={post.content} />;
}
