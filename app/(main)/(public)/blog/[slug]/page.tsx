import { BlogDetail } from "@/app/components/(public)/blog/BlogDetail";
import { slugify } from "@/app/lib/util/slug";
import { mockBlogs } from "@/mock";

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Readonly<Props>) {
  const { slug } = await params;

  console.log(slug);

  const post = mockBlogs.find((p) => slugify(p.title) === slug);

  if (!post) return <div className="p-8">Post not found.</div>;

  return <BlogDetail markdown={post.content} />;
}
