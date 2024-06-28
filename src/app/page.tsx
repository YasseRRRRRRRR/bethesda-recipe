import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import ShuffleGrid from "@/components/shuffleGrid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:ob-52">
          <div className="col-span-1 p-6 lg:px-0 lg:pt-4">
            <div className=" mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="block mb-4 text-xs md:text-sm text-violet-500 font-medium">
                Better every day
              </span>
              <h1 className=" w-fit tracking-tight text-balance mt-8 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-6xl">
                Let&apos;s change it up a bit
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                nobis in error repellat voluptatibus ad.
              </p>
              <div className="mt-8 ">
                <Link
                  href="/configure/collections"
                  className={buttonVariants({
                    size: "lg",
                  })}
                >
                  Start Cooking
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <ShuffleGrid />
        </MaxWidthWrapper>
      </section>
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="h-[700px] flex items-center">[section n02]</div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
