import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { auth, signOut } from "../../../auth";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="h-full flex gap-4 flex-col">
      <nav className={twMerge("p-[20px] text-white flex gap-4")}>
        <div className="flex gap-1 justify-between w-full">
          <div className="flex gap-4">
            <div className="flex gap-4">
              <Link
                href="/about"
                className="px-4 py-2 rounded-full hover:bg-blue-600"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Blog
              </Link>
              <Link
                href="/transposer"
                className="px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Transposer
              </Link>
              {session?.user!! && (
                <>
                  <Link
                    href="/md"
                    className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700"
                  >
                    Drafts
                  </Link>
                  <Link
                    href="/link"
                    className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700"
                  >
                    Links
                  </Link>
                </>
              )}
            </div>
          </div>
          {session?.user!! ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button className="px-4 py-2 rounded-full hover:bg-blue-600 text-white">
                Log out
              </button>
            </form>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </nav>
      <main className={twMerge("flex-grow min-h-0 p-4 overflow-auto")}>
        {children}
      </main>

      <footer
        className={twMerge(
          "p-4 bg-gray-800 text-white text-center fixed bottom-0 left-0 right-0 w-full"
        )}
      >
        <p>© 2025 auaicn's bloge</p>
      </footer>
    </div>
  );
}
