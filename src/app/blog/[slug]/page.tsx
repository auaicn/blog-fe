import { posts } from "../posts";

type Props = {
  params: { slug: string };
};

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        <p className="text-lg">해당 블로그 글을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-600 text-lg mb-6">{post.description}</p>
      <div className="text-gray-800 leading-relaxed">
        <p>
          이곳에서{" "}
          <span className="font-semibold text-blue-500">{params.slug}</span>{" "}
          블로그 글을 표시합니다.
        </p>
      </div>
    </div>
  );
}
