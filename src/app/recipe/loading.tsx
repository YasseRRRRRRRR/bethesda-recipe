import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ChevronDown, LoaderCircle, Plus, Search } from "lucide-react";
import React from "react";
import FilterationSystem from "./component/filter";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SkeletonRecipe from "@/components/skeletonRecipe";

const Loading = () => {
  return (
    <section className="bg-slate-100">
      <MaxWidthWrapper>
        <div>
          <div className="py-16 sm:py-24">
            <div className="py-6 flex justify-between flex-col lg:flex-row gap-6">
              <Button variant="ghost" size="lg">
                Add Suggestion <Plus className="size-4 ml-2" />
              </Button>
              <div className="flex items-center gap-2 justify-between">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild disabled>
                    <Button variant="ghost">
                      Add Filter <ChevronDown className="size-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                </DropdownMenu>
                <div className="relative w-80">
                  <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3" />
                  <Input
                    type="text"
                    placeholder="Search"
                    className="pl-12 pr-4"
                    disabled
                  />
                </div>
              </div>
            </div>
            <h2 className="sr-only">Recipes</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
              {"abcdefgasdfc".split("").map((i) => (
                <SkeletonRecipe key={i} />
              ))}
            </div>

            <div className="text-center">
              <Pagination aria-disabled>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Loading;
