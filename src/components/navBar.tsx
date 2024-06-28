import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";
import TranslationDropDown from "./translationDropDwon";

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
          <div className="h-full flex justify-around items-center flex-end space-x-4">
            <a href="#">Inspiration</a>
            <a href="#">Recipes</a>
            <TranslationDropDown />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
