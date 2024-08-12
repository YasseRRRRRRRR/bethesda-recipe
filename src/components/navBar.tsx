"use client";
import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";

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
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";

const NavBar = ({ lang }: { lang: string }) => {
  const router = useRouter(); // Now using the correct hook
  const pathName = usePathname(); // Now using the correct hook

  function handleLocalChange(value: string): void {
    const newLocale = value;
    const path = pathName.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  }

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            {/* replace with logo */}
            <p>
              <span className="text-violet-600">Fantazy</span> Recipe
            </p>
          </Link>

          <div className="h-full  flex justify-around items-center space-x-4">
            {/* translation menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">
                  {lang.toUpperCase()} <ChevronDown className="size-4 ml-1.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-24">
                <DropdownMenuRadioGroup
                  value={lang}
                  onValueChange={handleLocalChange}
                >
                  <DropdownMenuRadioItem value="fi">
                    finnish
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="sv">
                    swedish
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="en">
                    english
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className=" hidden md:flex h-full justify-around gap-2 items-center flex-end space-x-4">
              <Link
                href={`${lang}/inspiration`}
                className={buttonVariants({
                  size: "lg",
                  variant: "secondary",
                })}
              >
                Inspiration
              </Link>
              <Link
                href={`${lang}/recipe`}
                className={buttonVariants({
                  size: "lg",
                })}
              >
                Recipes
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
                        Home
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href={`${lang}/inspiration`}
                        className={buttonVariants({
                          size: "lg",
                          variant: "link",
                        })}
                      >
                        Inspiration
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href={`${lang}/recipe`}
                        className={buttonVariants({
                          size: "lg",
                          variant: "link",
                        })}
                      >
                        Recipes
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
