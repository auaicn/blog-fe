import { NavButton } from "../../navButton";
import { auth } from "@/auth";

export const DraftButton = async () => {
  const session = await auth();

  return session?.user && <NavButton label="Draft" href="/draft" />;
};
