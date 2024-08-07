"use client";

import React, { useState } from "react";
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
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const FilterationSystem = () => {
  const [filter, setFilter] = useState("all");

  // handling Search
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2 justify-between">
      {/* dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Add Filter <ChevronDown className="size-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Recipe&apos;s type</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            defaultValue="all"
            value={filter}
            onValueChange={setFilter}
          >
            <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="basics">Basics</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="main_course">
              Main Courses
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="baked_goods">
              Baked Goods
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="sides_starters_snacks">
              Sides, Starters & snacks
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="soup_stews">
              Soup & Stews
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* search bar */}
      {/* <div className="flex gap-2">
        <Input
          type="text"
          className="px-3 py-2 w-80"
          placeholder="Search Recipe..."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <Button className="px-3 py-2">
          <Search className="w-6 h-6" />
        </Button>
      </div> */}
      <div className="relative w-80">
        <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3" />
        <Input
          type="text"
          placeholder="Search"
          className="pl-12 pr-4"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </div>
  );
};

export default FilterationSystem;
