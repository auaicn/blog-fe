import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <SessionProvider>
        <body className="bg-gray-100 text-gray-900 h-full">{children}</body>
      </SessionProvider>
    </html>
  );
}
