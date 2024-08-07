import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import ShuffleGrid from "@/components/shuffleGrid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:ob-52">
          <div className="col-span-1 p-6 lg:px-0 lg:pt-4">
            <div className=" mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="block mb-4 text-xs md:text-sm text-violet-500 font-medium">
                Experience food like never before
              </span>
              <h1 className=" w-fit tracking-tight text-balance mt-8 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-6xl">
                Bringing the Flavors of Tamriel
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Experience the rich culinary traditions of Tamriel, with recipes
                inspired by the diverse landscapes and cultures of Skyrim,
                Morrowind, and beyond. From hearty stews to decadent desserts,
                our collection offers a taste of adventure for your taste buds.
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
      <section className="bg-violet-100 py-12">
        <div className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              <h2 className="px-4 py-10 tracking-tight xl:text-center text-balance leading-tight font-semibold text-3xl md:text-5xl text-violet-900">
                {/* Dive Deeper Into The Lore Of Your Favorite Wordthing */}
                Discover Delicious And Lore-Friendly Recipes and Adapted with
                Local Ingredients
              </h2>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    width={700}
                    height={400}
                    src="/fallout.jpg"
                    alt="blog"
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    width={700}
                    height={400}
                    src="/fallout.jpg"
                    alt="blog"
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      The 400 Blows
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    width={700}
                    height={400}
                    src="/fallout.jpg"
                    alt="blog"
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Shooting Stars
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <MaxWidthWrapper>
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
                    You can find all these recipes and more in the fantastic
                    book The Elder Scrolls: The Official Cookbook by Chelsea
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
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
