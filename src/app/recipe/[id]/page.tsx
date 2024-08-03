import React from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const getSingleRecipe = async (recipeId: string) => {
  const record = await pb.collection("recipes").getOne(recipeId);
  return record;
};
const RecipePage = async ({ params }: any) => {
  const recipe = await getSingleRecipe(params.id);
  return (
    <div>
      {recipe.title}
      <a href={recipe.link_to_video}> watch</a>
    </div>
  );
};

export default RecipePage;
