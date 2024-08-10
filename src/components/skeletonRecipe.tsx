import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonRecipe = () => {
  return (
    <div className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        {/* padding bottom to Approximate aspect ratio of 1.35 since all images are 1086 x 1465 */}
        <Skeleton className="w-full pb-[135%] rounded-xl" />
      </div>
      <h3 className="mt-4 ">
        {" "}
        <Skeleton className="h-4 w-[250px] " />
      </h3>
      <p className="mt-1 ">
        {" "}
        <Skeleton className="h-4 w-[200px]" />
      </p>
    </div>
  );
};

export default SkeletonRecipe;
