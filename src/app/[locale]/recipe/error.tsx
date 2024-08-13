"use client";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Error() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-violet-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-2 sm:gap-1 items-center justify-center gap-x-6">
          <Link
            href="/"
            className={buttonVariants({
              size: "lg",
            })}
          >
            Go back home
          </Link>
          <Link
            href="/"
            className={buttonVariants({
              size: "lg",
              variant: "secondary",
            })}
          >
            Contact support <ArrowRight className="size-4 ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}
