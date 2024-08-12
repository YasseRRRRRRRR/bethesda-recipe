"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const TranslationDropDown = ({ lang }: { lang: string }) => {
  const router = useRouter();
  const pathName = usePathname();

  function handleLocalChange(value: string): void {
    const newLocale = value;
    const path = pathName.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          {lang.toUpperCase()} <ChevronDown className="size-4 ml-1.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24">
        <DropdownMenuRadioGroup value={lang} onValueChange={handleLocalChange}>
          <DropdownMenuRadioItem value="fi">finnish</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sv">swedish</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">english</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TranslationDropDown;
