import Links from "./Links";

export default async function LinkPage({
  params,
}: Readonly<{
  params: Promise<{ tag: string | null }>;
}>) {
  const { tag } = await params;

  return <Links tag={tag} />;
}
