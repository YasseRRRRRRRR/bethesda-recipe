import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";
import TranslationDropDown from "./translationDropDwon";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <p>
              <span className="text-violet-600">Fantazy</span> Recipe
            </p>
          </Link>
          <div className="h-full  flex justify-around items-center space-x-4">
            <TranslationDropDown />
            <div className=" hidden md:flex h-full justify-around gap-2 items-center flex-end space-x-4">
              <Link
                href="/inspiration"
                className={buttonVariants({
                  size: "lg",
                  variant: "secondary",
                })}
              >
                Inspiration
              </Link>
              <Link
                href="/recipe"
                className={buttonVariants({
                  size: "lg",
                })}
              >
                Recipes
              </Link>
            </div>
            <div className="block md:hidden">
              {/* needs to make a better hamburg menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon">
                    <Menu className="size-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="z-[101]">
                  <div className="my-8 flex flex-col gap-2 items-start justify-start ">
                    <Link
                      href="/recipe"
                      className={buttonVariants({
                        size: "lg",
                        variant: "link",
                      })}
                    >
                      Inspiration
                    </Link>
                    <Link
                      href="/recipe"
                      className={buttonVariants({
                        size: "lg",
                        variant: "link",
                      })}
                    >
                      Recipes
                    </Link>
                    {/* <div className="mx-[30px]">
                      <TranslationDropDown />
                    </div> */}
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
