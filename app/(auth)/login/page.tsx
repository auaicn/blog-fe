"use client";

import { Suspense, useActionState } from "react";
import { authenticate } from "../../lib/actions";
import { SignInButton } from "@/app/components/login/SignInButton";

export default function Page() {
  const [errorMessage, formAction, pending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className="text-center bg-gray-900 text-white p-4 rounded-md">
      <h1 className="text-2xl font-bold mb-2 whitespace-pre-line">
        Welcome to{"\n"}
        PIL_d1v (auaicn)&apos;s den
      </h1>
      <div className="h-8" />
      <h2 className="text-xl font-bold mb-6">Sign in to your account</h2>
      <form action={formAction} className="space-y-8">
        <div>
          <label
            htmlFor="loginId"
            className="block text-sm font-medium text-gray-300 text-left"
          >
            ID
          </label>
          <input
            id="loginId"
            name="loginId"
            autoFocus
            required
            className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 text-left"
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
        <Suspense>
          <SignInButton />
        </Suspense>
        <button
          type="submit"
          disabled={pending}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in
        </button>
        {errorMessage && (
          <p className="text-sm text-red-400 mt-2">{errorMessage}</p>
        )}
      </form>
      <a
        href="/blog"
        className="mt-4 w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Go to Blog
      </a>
    </div>
  );
}
