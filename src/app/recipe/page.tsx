import Image from "next/image";
import Link from "next/link";
import React from "react";
import PocketBase from "pocketbase";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";

const pb = new PocketBase("http://127.0.0.1:8090");

const getRecipes = async () => {
  const records = await pb.collection("recipes").getFullList({
    sort: "-created",
  });

  return records;
};

const dummyData = [
  {
    id: 1,
    title: "test",
    thumbnail: "/Orsimer Venison.jpg",
    difficulty: 5,
    type: "Fallout",
  },
  {
    id: 2,
    title: "test",
    thumbnail: "/Orsimer Venison.jpg",
    difficulty: 5,
    type: "Fallout",
  },
  {
    id: 3,
    title: "test",
    thumbnail: "/Orsimer Venison.jpg",
    difficulty: 5,
    type: "Fallout",
  },
  {
    id: 4,
    title: "test",
    thumbnail: "/Orsimer Venison.jpg",
    difficulty: 5,
    type: "Fallout",
  },
  {
    id: 5,
    title: "test",
    thumbnail: "/Orsimer Venison.jpg",
    difficulty: 5,
    type: "Fallout",
  },
  {
    id: 6,
    title: "test",
    thumbnail: "/Orsimer Venison.jpg",
    difficulty: 5,
    type: "Fallout",
  },
  {
    id: 7,
    title: "test",
    thumbnail: "/Orsimer Venison.jpg",
    difficulty: 5,
    type: "Fallout",
  },
];

export default async function RecipesPage() {
  const recipes = await getRecipes();
  return (
    <section className="bg-slate-100">
      <MaxWidthWrapper>
        <div>
          <div className="py-16 sm:py-24">
            <div className="py-6">
              <Link
                href="/recipe"
                className={buttonVariants({
                  size: "lg",
                })}
              >
                Add Suggestion
                <Plus className="size-4 ml-2" />
              </Link>
            </div>
            <h2 className="sr-only">Recipes</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
              {recipes.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} />
              ))}
              {dummyData.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

const Recipe = ({ recipe }: any) => {
  const {
    id,
    title,

    thumbnail,
    difficulty,
    type,
  } = recipe || {};

  return (
    <Link href={`/recipe/${id}`} className="group">
      <div className="  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          // CHANGE THIS !!!!!!!!!!!!!!!!!!!
          src={
            pb.files.getUrl(recipe, thumbnail)
              ? pb.files.getUrl(recipe, thumbnail)
              : thumbnail
          }
          alt={`${title} Thumbnail`}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          width={500}
          height={300}
        />
      </div>
      <h3 className="mt-4 text-lg font-bold text-violet-500 group-hover:underline">
        {title}
      </h3>
      <p className="mt-1 text-base font-medium text-gray-900">
        difficulty : {difficulty}/10
      </p>
    </Link>
  );
};