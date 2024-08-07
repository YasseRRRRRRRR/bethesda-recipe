import React from "react";
import PocketBase from "pocketbase";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowRight, ChevronRight, House } from "lucide-react";

const pb = new PocketBase("http://127.0.0.1:8090");

const getSingleRecipe = async (recipeId: string) => {
  const record = await pb.collection("recipes").getOne(recipeId);
  return record;
};
const RecipePage = async ({ params }: any) => {
  const recipe = await getSingleRecipe(params.id);
  const {
    title,
    link_to_video,
    description,
    thumbnail,
    ingredients,
    steps,
    difficulty,
    type,
  } = recipe || {};

  return (
    <MaxWidthWrapper className="mt-40 mb-20">
      <p>{type}</p>
      <nav aria-label="Breadcrumb" className="pb-2">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <Link href="/" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>
              <House className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <ChevronRight className="h-4 w-4" />
          </li>

          <li>
            <Link
              href="/recipe"
              className="block transition hover:text-gray-700"
            >
              {" "}
              Recipes{" "}
            </Link>
          </li>

          <li>
            <ChevronRight className="h-4 w-4" />
          </li>

          <li>
            <Link href="" className="block transition hover:text-gray-700">
              {" "}
              {title}{" "}
            </Link>
          </li>
        </ol>
      </nav>
      <div className=" grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:gap-x-8 ">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="mb-8 text-violet-500 text-4xl md:text-2xl font-semibold">
            {title}
          </h2>
          <Image
            src={pb.files.getUrl(recipe, thumbnail)}
            alt={`${title} Thumbnail`}
            width={500}
            height={300}
          />
        </div>
        <div className=" max-w-auto sm:w-[500px] flex flex-col justify-self-center ">
          <Tabs defaultValue="Ingredients">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="Instructions">Instructions</TabsTrigger>
            </TabsList>
            <h3
              className="my-8"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <TabsContent value="Ingredients">
              <Card>
                <CardHeader>
                  <CardTitle className="text-violet-600">Ingredients</CardTitle>
                </CardHeader>
                <CardContent
                  className="space-y-2"
                  dangerouslySetInnerHTML={{ __html: ingredients }}
                ></CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="Instructions">
              <Card>
                <CardHeader>
                  <CardTitle className="text-violet-600">
                    Instructions
                  </CardTitle>
                </CardHeader>
                <CardContent
                  className="space-y-2"
                  dangerouslySetInnerHTML={{ __html: steps }}
                ></CardContent>
                <CardFooter>
                  <Link
                    href={link_to_video}
                    className={buttonVariants({
                      size: "lg",
                    })}
                  >
                    Watch instructional video
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default RecipePage;
