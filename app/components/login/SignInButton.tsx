"use client";

import { useSearchParams } from "next/navigation";

export const SignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/draft";

  return <input type="hidden" name="redirectTo" value={callbackUrl} />;
};
