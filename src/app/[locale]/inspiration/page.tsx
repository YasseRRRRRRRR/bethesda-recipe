import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Plus, TvMinimalPlay, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <MaxWidthWrapper>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              width={500}
              height={500}
              alt=""
              src="/author.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl text-violet-600">
              Project Inspiration & Acknowledgements
            </h2>

            <p className="mt-4 mb-6 text-gray-600">
              this website was first inspired by the amazing channel{" "}
              <Link
                href="https://www.youtube.com/@fantasykitchen6841"
                className={buttonVariants({
                  variant: "link",
                })}
              >
                Fantasy Kitchen
              </Link>
              whose videos you&apos;ll see link in most if not all recipes in
              this site as well as the wonderfull channel, including but not
              limited to:
              <ul role="list" className="my-8 space-y-2 text-gray-600">
                <li>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/watch?v=SN1k1LPD5YE"
                    className={buttonVariants({
                      variant: "link",
                      size: "lg",
                    })}
                  >
                    <div className="flex items-center gap-x-3">
                      <TvMinimalPlay
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 flex-none text-violet-600"
                      />
                      <span className="flex items-center">Chef Velmoor</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/@KottabosGames"
                    className={buttonVariants({
                      variant: "link",
                      size: "lg",
                    })}
                  >
                    <div className="flex items-center gap-x-3">
                      <TvMinimalPlay
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 flex-none text-violet-600"
                      />
                      <span className="flex items-center">KottabosGames</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/watch?v=R41cgyBK368"
                    className={buttonVariants({
                      variant: "link",
                      size: "lg",
                    })}
                  >
                    <div className="flex items-center gap-x-3">
                      <TvMinimalPlay
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 flex-none text-violet-600"
                      />
                      <span className="flex items-center">MisoHungrie</span>
                    </div>
                  </Link>
                </li>
              </ul>
              and finally and most importantly the talented and amazing cook
              Chelsea Monroe-Cassel author of the book; The Elder Scrolls: The
              Official Cookbook. <br />
              In essance I wanted this I wanted this site to almost be a love
              letter to these talented creators as well as the Elder Scrolls
              world where I was Engrossed in for quite sometime now, and look
              back on fondly, like a retro game or childhood memory.
            </p>
            <Link
              target="_blank"
              href="https://foodthroughthepages.com"
              className={buttonVariants({
                size: "lg",
                // variant: "secondary",
              })}
            >
              Check Out The Author&apos;s Website
              <ArrowRight className="size-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
