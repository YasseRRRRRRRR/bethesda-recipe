import React from "react";
import PocketBase from "pocketbase";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Button } from "@/components/ui/button";
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
    <MaxWidthWrapper>
      <div className="mt-40 mb-20 flex gap-8">
        <div>
          <h2 className="mb-8">{title}</h2>
          <Image
            src={pb.files.getUrl(recipe, thumbnail)}
            alt={`${title} Thumbnail`}
            // className="h-full w-full object-cover object-center group-hover:opacity-75"
            width={500}
            height={300}
          />
        </div>
        <div className=" max-w-auto">
          {/* <h2 className="mb-">Description</h2>
          <div
            className="w-[400px]"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div> */}
          <Tabs defaultValue="account" className="w-[400px] ">
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
                  <CardTitle>Ingredients</CardTitle>
                </CardHeader>
                <CardContent
                  className="space-y-2"
                  dangerouslySetInnerHTML={{ __html: ingredients }}
                >
                  {/* <h3
                    className="my-8"
                    
                  /> */}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="Instructions">
              <Card>
                <CardHeader>
                  <CardTitle>Instructions</CardTitle>
                  {/* <CardDescription>
                    Change your password here. After saving, you&apos;ll be
                    logged out.
                  </CardDescription> */}
                </CardHeader>
                <CardContent
                  className="space-y-2"
                  dangerouslySetInnerHTML={{ __html: steps }}
                ></CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <ul className="mt-4">
          <li className="text-xl"></li>
        </ul>
        {/* <a href={link_to_video}> watch</a> */}
      </div>
    </MaxWidthWrapper>
  );
};

export default RecipePage;
