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
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const filterParams = [
  { name: "All", value: "all" },
  { name: "Basics", value: "basics" },
  { name: "Main Course", value: "main_course" },
  { name: "Baked Goods", value: "baked_goods" },
  { name: "Sides, Starters & snacks", value: "sides_starters_snacks" },
  { name: "Soup & Stews", value: "soup_stews" },
  { name: "Desserts", value: "desserts" },
  { name: "Drinks", value: "drinks" },
];
const FilterationSystem = () => {
  const [filter, setFilter] = useState("all");
  const categoryParams = useSearchParams();
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

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(categoryParams);
    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  useEffect(() => {
    const category = categoryParams.get("category");
    if (category) {
      setFilter(category);
    }
  }, [categoryParams]);

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
            defaultValue={categoryParams.get("category")?.toString()}
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
