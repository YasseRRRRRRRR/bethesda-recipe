import Image from "next/image";
import Link from "next/link";
import React from "react";
import PocketBase from "pocketbase";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";
import FilterationSystem from "./component/filter";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const pb = new PocketBase("http://127.0.0.1:8090");

const getRecipes = async (
  query: string,
  category: string,
  page: number,
  itemsPerPage: number
) => {
  pb.autoCancellation(false);
  const offset = (page - 1) * itemsPerPage;
  const resultList = await pb
    .collection("recipes")
    .getList(page, itemsPerPage, {
      filter: `title ~ "${query}" ${
        category !== "" && category !== "all" ? `&& type = "${category}"` : ""
      }`,
      offset,
    });

  // to test loading.tsx
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return { items: resultList.items, totalItems: resultList.totalItems };
};

const RecipesPage = async ({
  searchParams,
}: {
  searchParams?: { query?: string; category?: string; page?: string };
}) => {
  const query = searchParams?.query || "";
  const category = searchParams?.category || "";
  const page = parseInt(searchParams?.page || "1", 10);
  const itemsPerPage = 12;

  const { items: recipes, totalItems } = await getRecipes(
    query,
    category,
    page,
    itemsPerPage
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <section className="bg-slate-100">
      <MaxWidthWrapper>
        <div>
          <div className="py-16 sm:py-24">
            <div className="py-6 flex justify-between flex-col lg:flex-row gap-6">
              {/* make the form for suggestions*/}
              <Link
                href=""
                className={buttonVariants({
                  size: "lg",
                })}
              >
                Add Suggestion
                <Plus className="size-4 ml-2" />
              </Link>

              <FilterationSystem />
            </div>
            <h2 className="sr-only">Recipes</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
              {recipes.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} />
              ))}
            </div>
            <div className="text-center mt-14">
              <Pagination>
                <PaginationContent>
                  {page > 1 && (
                    <PaginationItem>
                      <PaginationPrevious href={`?page=${page - 1}`} />
                    </PaginationItem>
                  )}
                  {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href={`?page=${index + 1}`}
                        isActive={index + 1 === page}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  {page < totalPages && (
                    <PaginationItem>
                      <PaginationNext href={`?page=${page + 1}`} />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const Recipe = ({ recipe }: any) => {
  const { id, title, thumbnail, difficulty, type } = recipe || {};

  return (
    <Link href={`./recipe/${id}`} className="group">
      <div className="  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={pb.files.getUrl(recipe, thumbnail)}
          alt={`${title} Thumbnail`}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          width={500}
          height={300}
        />
      </div>
      <h3 className="mt-4 text-lg font-bold  text-violet-500 group-hover:underline">
        {title}
      </h3>
      <p className="mt-1 text-base font-medium text-gray-900">
        difficulty : {difficulty}/10
      </p>
    </Link>
  );
};

export default RecipesPage;
