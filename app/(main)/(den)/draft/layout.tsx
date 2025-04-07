import { DraftList } from "@/app/components/(den)/draft/DraftList";

export default function DraftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <DraftList />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
