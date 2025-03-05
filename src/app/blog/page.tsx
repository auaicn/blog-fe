// src/app/blog/page.tsx
export default function BlogList() {
  const posts = [
    { slug: "first-post", title: "First Post" },
    { slug: "second-post", title: "Second Post" },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
