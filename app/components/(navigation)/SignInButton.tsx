import { auth } from "@/auth";
import { NavButton } from "./NavButton";

export const SignInButton = async () => {
  const session = await auth();

  return !session?.user && <NavButton label={"Login"} href="/login" />;
};
