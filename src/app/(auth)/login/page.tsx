"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { authenticate } from "../../lib/actions";

export default function Page() {
  const [errorMessage, formAction] = useActionState(authenticate, undefined);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/blog";

  return (
    <div className="text-center bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Sign in to your account</h2>
      <form action={formAction} className="space-y-4">
        <div>
          <label
            htmlFor="loginId"
            className="block text-sm font-medium text-gray-300"
          >
            ID
          </label>
          <input
            id="loginId"
            name="loginId"
            required
            className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in
        </button>
        {errorMessage && (
          <p className="text-sm text-red-400 mt-2">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
