"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { authenticate } from "../lib/actions";

export default function Page() {
  const [errorMessage, formAction] = useActionState(authenticate, undefined);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/blog";

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4">
        <label>id</label>
        <input id="loginId" name="loginId" required></input>
        <label>password</label>
        <input id="password" name="password" required></input>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button type="submit">sign in</button>
        <div className="flex h-8 items-end space-x-1">
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
