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
import { getTranslations } from "next-intl/server";

const pb = new PocketBase("https://afternoon-touch.pockethost.io/");

const getSingleRecipe = async (recipeId: string) => {
  const record = await pb.collection("recipes").getOne(recipeId);
  // to test loading.tsx
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return record;
};

const RecipePage = async ({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) => {
  // getting recipe by id
  const recipe = await getSingleRecipe(id);

  const {
    title,
    link_to_video,
    description,
    thumbnail,
    ingredients,
    steps,
    // prep / marinade: prep
    // coooking time/ brewing/ steeping depending on type: cooking
    difficulty,
    type,
  } = recipe || {};

  // translations
  const t = await getTranslations("RecipeInstructionPage");

  return (
    <MaxWidthWrapper className="mt-40 mb-20">
      <nav aria-label="Breadcrumb" className="pb-2 ">
        <ol className="flex  items-center gap-1 text-sm text-gray-600">
          <li>
            <Link
              href={`/${locale}`}
              className="block transition hover:text-gray-700"
            >
              <span className="sr-only"> {t("breadCrumbs.home_page")} </span>
              <House className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <ChevronRight className="h-4 w-4" />
          </li>

          <li>
            <Link
              href={`/${locale}/recipe`}
              className="block transition hover:text-gray-700"
            >
              {" "}
              {t("breadCrumbs.recipe_page")}{" "}
            </Link>
          </li>

          <li>
            <ChevronRight className="h-4 w-4" />
          </li>

          <li>
            <Link href="#" className="block transition hover:text-gray-700">
              {" "}
              {title}{" "}
            </Link>
          </li>
        </ol>
      </nav>
      <div className=" grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:gap-x-8 ">
        <div className="flex flex-col ">
          <h2 className="mb-8 text-violet-500 text-2xl xl:text-3xl md:text-4xl font-semibold">
            {title}
          </h2>
          <Image
            src={pb.files.getUrl(recipe, thumbnail)}
            alt={`an image of the ${title}`}
            width={500}
            height={300}
            className="self-center xl:self-start"
          />
        </div>
        <div className=" max-w-auto w-auto max-w-[32rem] flex flex-col justify-self-center ">
          <Tabs defaultValue="Ingredients">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Ingredients">{t("ingredients")}</TabsTrigger>
              <TabsTrigger value="Instructions">
                {t("instructions")}
              </TabsTrigger>
            </TabsList>
            <h3
              className="my-8"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <TabsContent value="Ingredients">
              <Card>
                <CardHeader>
                  <CardTitle className="text-violet-600">
                    {t("ingredients")}
                  </CardTitle>
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
                    {t("instructions")}
                  </CardTitle>
                </CardHeader>
                <CardContent
                  className="space-y-2"
                  dangerouslySetInnerHTML={{ __html: steps }}
                ></CardContent>
                {link_to_video && (
                  <CardFooter>
                    <Link
                      href={link_to_video}
                      className={buttonVariants({
                        size: "lg",
                      })}
                    >
                      {t("call_to_action_5")}
                      <ArrowRight className="size-4 ml-2" />
                    </Link>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default RecipePage;
