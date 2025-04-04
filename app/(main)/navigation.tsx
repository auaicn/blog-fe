import { twMerge } from "tailwind-merge";
import { NavButton } from "../components/navButton";
import { DraftButton } from "../components/DraftButton";
import { BlogButton } from "../components/BlogButton";
import { AboutButton } from "../components/AboutButton";
import { LinksButton } from "../components/LinksButton";
import { TransposerButton } from "../components/TransposerButton";
import { SignOutButton } from "../components/SignOutButton";
import { SignInButton } from "../components/SignInButton";
export const Navigation = () => {
  return (
    <nav className={twMerge("p-0 text-white flex gap-4")}>
      <div className="flex gap-4 h-[60px] content-stretch items-center justify-between w-full">
        <div className="flex gap-4 ">
          <DraftButton />
          <LinksButton />
          <AboutButton />
          <BlogButton />
          <TransposerButton />
        </div>
        <SignInButton />
        <SignOutButton />
      </div>
    </nav>
  );
};
