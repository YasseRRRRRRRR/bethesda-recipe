import React from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const divs = [
  {
    img: "wow.jpg",
    text: "From the universe of",
    name: "World Of Warcraft",
  },
  {
    img: "fallout.jpg",
    text: "To the post-apocalyptic universe of",
    name: "Fallout",
  },
  {
    img: "skyrim.jpg",
    text: "All the way to ",
    name: "Tamriel",
  },
];

const Caroussel = () => {
  return (
    <Carousel className="w-full max-w-screen-xl ">
      <CarouselContent>
        {divs.map((div, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <section
                className={`relative bg-[url(/${
                  div.img
                })]  sm:height-auto w-full max-h-svh bg-cover  
                ${
                  index % 2 === 0 ? "bg-left-top" : "bg-right-top"
                } bg-no-repeat`}
              >
                <div className="px-4 py-16 sm:px-6 lg:px-8 ">
                  <div
                    className={` absolute inset-0 bg-violet-900/75 sm:bg-transparent sm:from-violet-900/95 sm:to-violet-900/25 
                    ${
                      index % 2 === 0
                        ? "sm:bg-gradient-to-l"
                        : "sm:bg-gradient-to-r"
                    } `}
                  ></div>

                  <div
                    className={`relative mx-4 max-w-screen-xl px-4 py-32 sm:px-6 flex lg:h-screen ${
                      index % 2 === 0
                        ? "items-end justify-end"
                        : "items-start justify-start"
                    } lg:px-8`}
                  >
                    <div className="max-w-xl py-20 ">
                      <h1 className="text-2xl font-extrabold text-white sm:text-4xl">
                        {div.text}
                        <span className="sm:text-5xl text-3xl mt-2 block font-extrabold from-accent-foreground text-violet-500">
                          {" "}
                          {div.name}{" "}
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex " />
      <CarouselNext className="hidden md:flex " />
    </Carousel>
  );
};

export default Caroussel;
