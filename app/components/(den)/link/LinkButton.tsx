import { auth } from "@/auth";
import { NavButton } from "../../navButton";

export const LinkButton = async () => {
  const session = await auth();

  return session?.user && <NavButton label="Links" href="/link" />;
};
