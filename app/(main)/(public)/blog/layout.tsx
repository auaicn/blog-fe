import { BlogList } from "@/app/components/(public)/blog/BlogList";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <BlogList />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
