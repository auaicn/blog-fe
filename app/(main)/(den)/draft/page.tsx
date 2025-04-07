export default async function DraftPage({
  params,
}: Readonly<{
  params: Promise<{ tag: string | null }>;
}>) {
  const { tag } = await params;

  return <div>{tag}</div>;
}
