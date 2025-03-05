// src/app/layout.tsx
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <nav className="p-4 bg-blue-500 text-white flex gap-4">
          <a href="/">Home</a>
          <a href="/workspace">Workspace</a>
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
