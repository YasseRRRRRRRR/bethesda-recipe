import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Plus, TvMinimalPlay, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getTranslations } from "next-intl/server";

const Page = async () => {
  const t = await getTranslations("InspirationPage");
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
              {t("header_4")}
            </h2>

            <p className="mt-4 mb-6 text-gray-600">
              {t("paragraph_1")}{" "}
              <Link
                href="https://www.youtube.com/@fantasykitchen6841"
                className={buttonVariants({
                  variant: "link",
                })}
              >
                Fantasy Kitchen
              </Link>
              {t("paragraph_2")}
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
              {t("paragraph_3")}
              <br />
              {t("paragraph_4")}
            </p>
            <Link
              target="_blank"
              href="https://foodthroughthepages.com"
              className={buttonVariants({
                size: "lg",
              })}
            >
              {t("call_to_action_4")}

              <ArrowRight className="size-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
