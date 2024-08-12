import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Plus, TvMinimalPlay, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <MaxWidthWrapper>
      {/* <section> */}

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
              {/** 
              <ul role="list" className="my-4 space-y-8">
                <li className="flex gap-x-3">
                  <a href="">Chef Velmoor</a>
                  <a href="">Chef Velmoor</a>
                  <a href="">Chef Velmoor</a>
                  {/* <Link
                    href="https://www.youtube.com/watch?v=SN1k1LPD5YE"
                    className={buttonVariants({
                      variant: "link",
                    })}
                  >
                    Chef Velmoor
                  </Link>
                </li>
                <li className="flex gap-x-3">
                  <Link
                    href="https://www.youtube.com/watch?v=SN1k1LPD5YE"
                    className={buttonVariants({
                      variant: "link",
                    })}
                  >
                    Chef Velmoor
                  </Link>
                </li>
                <li className="flex gap-x-3">
                  <Link
                    href="https://www.youtube.com/watch?v=SN1k1LPD5YE"
                    className={buttonVariants({
                      variant: "link",
                    })}
                  >
                    Chef Velmoor
                  </Link> 
                </li>
              </ul> 
                  */}
              <ul role="list" className="my-8 space-y-2 text-gray-600">
                <li>
                  <Link
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
              href="https://foodthroughthepages.com"
              className={buttonVariants({
                size: "lg",
                // variant: "secondary",
              })}
            >
              Check Out The Author&apos;s Website
              <ArrowRight className="size-4 ml-2" />
            </Link>
            {/* <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a> */}
          </div>
        </div>
      </div>
      {/* </section> */}

      {/* <p>
        this website was first inspired by the amazing channel fabtazy recipe
        whose recipes you&apos;ll see link in most if not all recipes as well as
        the wonderfull channel ,and finally the amazing book the official asda
        in so I wanted this site to almost be a love letter to these talented
        creators as well as the elder scrolls world where i was engroced in for
        quite sometime now, and look fondly on like a retro game or childhood
        memory
      </p> */}
    </MaxWidthWrapper>
  );
};

export default Page;
