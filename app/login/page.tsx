import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

const Page = () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-2xl p-6 md:p-8 shadow-lg bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-center text-neutral-900 dark:text-white">
        Welcome Back
      </h2>
      <p className="text-sm text-center text-neutral-600 dark:text-neutral-400 mt-1">
        Sign in to your account
      </p>

      {/* Credentials Form */}
      <form className="my-8 space-y-5">
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            name="email"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="*************"
            type="password"
            name="password"
            className="mt-1"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-black to-neutral-700 dark:from-zinc-800 dark:to-zinc-700 w-full text-white rounded-md h-11 font-medium shadow-md hover:opacity-90 transition"
        >
          Login &rarr;
        </button>

        <p className="text-center text-neutral-600 text-sm mt-4 dark:text-neutral-400">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Register
          </Link>
        </p>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-2 my-6">
        <div className="h-[1px] flex-1 bg-neutral-300 dark:bg-neutral-700" />
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          OR CONTINUE WITH
        </span>
        <div className="h-[1px] flex-1 bg-neutral-300 dark:bg-neutral-700" />
      </div>

      {/* GitHub Form */}
      <form className="mb-3">
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-4 w-full text-neutral-800 dark:text-neutral-200 rounded-md h-11 font-medium border border-neutral-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
        >
          <IconBrandGithub className="h-5 w-5" />
          Continue with GitHub
        </button>
      </form>

      {/* Google Form */}
      <form>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-4 w-full text-neutral-800 dark:text-neutral-200 rounded-md h-11 font-medium border border-neutral-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
        >
          <IconBrandGoogle className="h-5 w-5" />
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Page;
