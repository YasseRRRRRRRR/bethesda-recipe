import Link from "next/link";
import React from "react";

const divs = ["Star Wars", "Elder Scrolls", "WOrld of Warcraft"];

const Caroussel = () => {
  return (
    <div className="relative overflow-hidden min-h-screen py-8">
      <div className="flex items-center cursor-grab active:cursor-grabbing">
        <CarousselItem
          image="testting.jpg"
          title="test"
          desctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
          redirectionUrl="/testing"
        />
      </div>
    </div>
  );
};

type CarousselItemProps = {
  image: string;
  title: string;
  desctiption: string;
  redirectionUrl: string;
};
const CarousselItem: React.FC<CarousselItemProps> = ({
  title,
  image,
  desctiption,
  redirectionUrl,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="aspect-video w-screen shrink-0  rounded=xl bg-neutral-800 object-cover"
    >
      <h1>{title}</h1>
      <p>{desctiption}</p>
      <p>image name: {image}</p>
      <img src="" alt="" />
      <Link href={redirectionUrl}></Link>
    </div>
  );
};
export default Caroussel;
