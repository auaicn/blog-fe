import { MarkdownViewer } from "@/app/components/MarkdownViewer";
import { slugify } from "@/app/lib/util/slug";
import { mockBlogs } from "@/mock";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Readonly<Props>) {
  const { slug } = await params;

  const post = mockBlogs.find((p) => slugify(p.title) === slug);

  if (!post) return <div className="p-8">Post not found.</div>;

  return <MarkdownViewer value={post.content} disableEditing />;
}
