import { twMerge } from "tailwind-merge";
import { DraftButton } from "../components/(den)/draft/DraftButton";
import { BlogButton } from "../components/(public)/blog/BlogButton";
import { AboutButton } from "../components/(public)/about/AboutButton";
import { LinkButton } from "../components/(den)/link/LinkButton";
import { TransposerButton } from "../components/(public)/transposer/TransposerButton";
import { SignOutButton } from "../components/SignOutButton";
import { SignInButton } from "../components/SignInButton";

export const Navigation = () => {
  return (
    <nav className={twMerge("p-0 text-white flex gap-4")}>
      <div className="flex gap-4 h-[60px] content-stretch items-center justify-between w-full">
        <div className="flex gap-4 ">
          {/* ----------------------------------- den ---------------------------------- */}
          <DraftButton />
          <LinkButton />
          {/* --------------------------------- public --------------------------------- */}
          <AboutButton />
          <BlogButton />
          <TransposerButton />
        </div>
        {/* ----------------------------- internal either ---------------------------- */}
        <SignInButton />
        <SignOutButton />
      </div>
    </nav>
  );
};
