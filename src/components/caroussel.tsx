import React from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const divs = ["Fallout", "Elder Scrolls", "WOrld of Warcraft"];

const Caroussel = () => {
  {
    /*
 Heads up! 👋

 This component comes with some ` if they are not needed in your project.
*/
  }

  return (
    <section className=" relative bg-[url(/fallout.jpg)] bg-cover bg-center bg-no-repeat">
      <div className=" absolute inset-0 bg-orange-900/75 sm:bg-transparent sm:from-orange-900/95 sm:to-orange-900/25 sm:bg-gradient-to-r "></div>

      <div className="relative mx-4 max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left ">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            from the post apocalyptic universe of
            <strong className="block font-extrabold text-rose-500">
              {" "}
              Fallout.{" "}
            </strong>
          </h1>
        </div>
        <div className="flex-end items-center">
          <Button variant="outline" size="icon">
            <ChevronRightIcon className="h-4 w-4 fill-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Caroussel;
