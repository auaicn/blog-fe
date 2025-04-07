import { auth } from "@/auth";
import { NavButton } from "./NavButton";

export const LinkButton = async () => {
  const session = await auth();

  return session?.user && <NavButton label="Links" href="/link" />;
};
