import { handleSignOut } from "@/actions/auth";
import { twMerge } from "tailwind-merge";
import { auth } from "@/auth";

export const SignOutButton = async () => {
  const session = await auth();

  return (
    session?.user && (
      <form action={handleSignOut}>
        <button
          className={twMerge(
            "px-8 py-3 w-[150px] text-center bg-transparent hover:bg-indigo-700/50 rounded-lg"
          )}
        >
          Log out
        </button>
      </form>
    )
  );
};
