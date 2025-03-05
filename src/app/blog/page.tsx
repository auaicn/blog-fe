import { posts } from "./posts";

export default function BlogList() {
  return (
    <div>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <a
              href={`/blog/${post.slug}`}
              className="block p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600">{post.description}</p>{" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
