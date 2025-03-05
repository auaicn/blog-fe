// src/app/blog/[slug]/page.tsx
type Props = {
  params: { slug: string };
};

export default function BlogPost({ params }: Props) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>이곳에서 {params.slug} 블로그 글을 표시합니다.</p>
    </div>
  );
}
