import Link from "next/link";
import { twMerge } from "tailwind-merge";

import "@/styles/globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workspace",
  description: "Own blog, works, abouts",
  icons: {
    icon: "/images/icon_white_rounded.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={twMerge(
          "bg-gray-100 text-gray-900 h-full flex gap-4 flex-col"
        )}
      >
        <nav className={twMerge("p-[20px] bg-blue-500 text-white flex gap-4")}>
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
          <Link href="/">Home</Link>
          <Link href="/workspace">Workspace</Link>
        </nav>

        <main className={twMerge("flex-grow min-h-0 p-4 overflow-auto")}>
          {children}
        </main>

        <footer className={twMerge("p-4 bg-gray-800 text-white text-center")}>
          <p>© 2025 Your Blog Name</p>
        </footer>
      </body>
    </html>
  );
}
