import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";

import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import TranslationDropDown from "./translationDropDown";
import { getTranslations } from "next-intl/server";

const NavBar = async ({ lang }: { lang: string }) => {
  const t = await getTranslations("NavBar");
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            {/* replace with logo */}
            <p>
              <span className="text-violet-600">{t("logo.fantazy")}</span>
              {"-"}
              {t("logo.recipe")}
            </p>
          </Link>

          <div className="h-full  flex justify-around items-center space-x-4">
            {/* translation menu */}
            <TranslationDropDown lang={lang} />
            <div className=" hidden md:flex h-full justify-around gap-2 items-center flex-end space-x-4">
              <Link
                href={`/${lang}/inspiration`}
                className={buttonVariants({
                  size: "lg",
                  variant: "secondary",
                })}
              >
                {t("btn_1_inspo")}
              </Link>
              <Link
                href={`/${lang}/recipe`}
                className={buttonVariants({
                  size: "lg",
                })}
              >
                {t("btn_2_recipe")}
              </Link>
            </div>

            {/* needs to make a better hamburg menu */}
            <div className="block md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon">
                    <Menu className="size-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="z-[101]">
                  <div className="my-8 flex flex-col gap-2 items-start justify-start ">
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className={buttonVariants({
                          size: "lg",
                          variant: "link",
                        })}
                      >
                        {t("home")}
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href={`/${lang}/inspiration`}
                        className={buttonVariants({
                          size: "lg",
                          variant: "link",
                        })}
                      >
                        {t("btn_1_inspo")}
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href={`/${lang}/recipe`}
                        className={buttonVariants({
                          size: "lg",
                          variant: "link",
                        })}
                      >
                        {t("btn_2_recipe")}
                      </Link>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
