import React from "react";
import { ArrowRight, ChevronRight, House, LoaderCircle } from "lucide-react";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <MaxWidthWrapper className="mt-40 mb-20">
      <nav aria-label="Breadcrumb" className="pb-2 ">
        <ol className="flex  items-center gap-1 text-sm text-gray-600">
          <li>
            <Link href="/" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>
              <House className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <ChevronRight className="h-4 w-4" />
          </li>

          <li>
            <Link
              href="/recipe"
              className="block transition hover:text-gray-700"
            >
              {" "}
              Recipes{" "}
            </Link>
          </li>

          <li>
            <ChevronRight className="h-4 w-4" />
          </li>

          <li>
            <LoaderCircle className="animate-spin text-violet-500" size={16} />
          </li>
        </ol>
      </nav>
      <div className=" grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:gap-x-8 ">
        <div className="flex flex-col ">
          <Skeleton className="w-full pb-[135%] rounded-xl" />
        </div>
        <div className="h-full">
          <Skeleton className="h-1/4 w-full mb-10" />
          <Skeleton className="h-3/4 w-full mb" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Loading;
