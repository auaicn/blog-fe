export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <div className="max-w-md w-full gap-8 p-[16px] rounded-lg">
        {children}
      </div>
    </div>
  );
}
