import "@/styles/globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <div className="h-full flex items-center justify-center ">
          <div className="max-w-md w-full space-y-8 p-8  rounded-lg shadow">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
