import { auth } from "@/auth";
import { NavButton } from "./NavButton";

export const DraftButton = async () => {
  const session = await auth();

  return session?.user && <NavButton label="Draft" href="/draft" />;
};
