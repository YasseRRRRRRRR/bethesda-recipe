import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import ShuffleGrid from "@/components/shuffleGrid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Caroussel from "@/components/caroussel";

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
                  href="/recipe"
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

      <div className="px-4 py-16 sm:px-6 lg:px-8 ">
        <Caroussel />
      </div>
      <section>
        {/* <MaxWidthWrapper> */}
        <div className=" mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="/ES_book_cover.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-300">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-300"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-4xl font-bold sm:text-3xl">
                  Still Hungry?
                </h2>

                <p className="mt-4 text-gray-600">
                  You can find all these recipes and more in the fantastic book
                  The Elder Scrolls: The Official Cookbook by Chelsea
                  Monroe-Cassel. So be sure to grab yourself a copy
                </p>
                {/*  */}
                <Link
                  href="https://www.amazon.com/Elder-Scrolls-Official-Cookbook/dp/B097FCHJG9"
                  className={buttonVariants({
                    size: "lg",
                    className: "mt-8",
                  })}
                >
                  Get A Copy
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* </MaxWidthWrapper> */}
      </section>
    </div>
  );
}
