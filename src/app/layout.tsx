import Link from "next/link";
import { twMerge } from "tailwind-merge";

import "@/styles/globals.css";

import { auth, signOut } from "../../auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en" className="h-full">
      <body
        className={twMerge(
          "bg-gray-100 text-gray-900 h-full flex gap-4 flex-col"
        )}
      >
        <nav className={twMerge("p-[20px] bg-blue-500 text-white flex gap-4")}>
          <div className="flex gap-1 justify-between w-full">
            <div className="flex gap-1">
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              {session?.user!! && (
                <>
                  <Link href="/md">Drafts</Link>
                  <Link href="/link">Links</Link>
                </>
              )}
            </div>
            {session?.user!! ? (
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button className="hover:text-blue-600">log out</button>
              </form>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </div>
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
