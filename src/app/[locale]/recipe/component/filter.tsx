"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const filterParams = [
  // { name: "All", value: "all" },
  { name: "Basics", value: "basics" },
  { name: "Main Course", value: "main_course" },
  { name: "Baked Goods", value: "baked_goods" },
  { name: "Sides, Starters & snacks", value: "sides_starters_snacks" },
  { name: "Soup & Stews", value: "soup_stews" },
  { name: "Desserts", value: "desserts" },
  { name: "Drinks", value: "drinks" },
];
const FilterationSystem = ({ addFilter, search }: any) => {
  const [isFiltered, setIsFilter] = useState(false);

  const [filter, setFilter] = useState("all");

  // handling Search
  // const categoryParams = useSearchParams();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
      params.set("page", "1");
    } else {
      params.delete("query");
      params.set("page", "1");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      setIsFilter(true);
      params.set("category", value);
      params.set("page", "1");
    } else {
      params.delete("category");
      params.set("page", "1");
      setIsFilter(false);
    }
    replace(`${pathName}?${params.toString()}`);
  };

  const resetFilter = () => {
    setIsFilter((prev: boolean) => !prev);
    const params = new URLSearchParams();
    params.delete("query");
    setFilter("all");
    params.delete("category");
    replace(`${pathName}?${params.toString()}`);
  };

  // HACK Find a more elegent way to do this
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setFilter(category);
      setIsFilter(true);
    }
  }, [searchParams]);

  return (
    <div className="flex items-center gap-2 justify-between">
      {" "}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {addFilter} <ChevronDown className="size-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Recipe&apos;s type</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            // defaultValue={categoryParams.get("category")?.toString()}
            value={filter}
            onValueChange={(e) => handleFilter(e)}
          >
            {filterParams.map((filter, index) => (
              <DropdownMenuRadioItem key={index} value={filter.value}>
                {filter.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* search bar */}
      <div className="relative w-80">
        <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3" />
        <Input
          type="text"
          placeholder={search}
          className="pl-12 pr-4"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
      {isFiltered && (
        <Button
          variant="ghost"
          onClick={resetFilter}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <X className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
};
export default FilterationSystem;
