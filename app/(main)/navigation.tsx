import { twMerge } from "tailwind-merge";
import { DraftButton } from "../components/(navigation)/DraftButton";
import { BlogButton } from "../components/(navigation)/BlogButton";
import { AboutButton } from "../components/(navigation)/AboutButton";
import { LinkButton } from "../components/(navigation)/LinkButton";
import { TransposerButton } from "../components/(navigation)/TransposerButton";
import { SignOutButton } from "../components/(navigation)/SignOutButton";
import { SignInButton } from "../components/(navigation)/SignInButton";
import { ScrollObserver } from "./components/ScrollObserver";

export const Navigation = () => {
  return (
    <ScrollObserver>
      <nav className={twMerge("p-0 text-white flex gap-4 bg-[#121212]")}>
        <div className="flex gap-4 h-[60px] content-stretch items-center justify-between w-full px-4">
          <div className="flex gap-4">
            <DraftButton />
            <LinkButton />
            <AboutButton />
            <BlogButton />
            <TransposerButton />
          </div>
          <SignInButton />
          <SignOutButton />
        </div>
      </nav>
    </ScrollObserver>
  );
};
