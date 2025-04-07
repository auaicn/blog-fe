import { MarkdownPreview } from "@/app/components/(public)/blog/MarkdownPreview";
import { mockAbout } from "@/mock";

export default function About() {
  return (
    <div className="flex justify-center w-full">
      <MarkdownPreview markdown={mockAbout} />;
    </div>
  );
}
