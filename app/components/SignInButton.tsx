import { auth } from "@/auth";
import { NavButton } from "./navButton";

export const SignInButton = async () => {
  const session = await auth();

  return !session?.user && <NavButton label={"Login"} href="/login" />;
};
