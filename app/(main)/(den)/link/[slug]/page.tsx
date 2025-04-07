import { mockTags } from "@/mock";
import Links from "./Links";
import { slugify } from "@/app/lib/util/slug";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function LinkTagPage({ params }: Readonly<Props>) {
  const { slug } = await params;

  const tagId =
    slug === "untagged"
      ? null
      : mockTags.find((tag) => slugify(tag.name) === slug)?.id ?? null;

  return <Links tagId={tagId} />;
}
