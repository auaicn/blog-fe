import "@/styles/globals.css";
import "github-markdown-css/github-markdown.css";

import Providers from "./components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-gray-100 text-gray-900 h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
