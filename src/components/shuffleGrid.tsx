"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Square {
  id: number;
  src: string;
}

const shuffle = (array: Square[]): Square[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/shuffleGridImg/vegetablesoup.jpg",
  },
  {
    id: 2,
    src: "/shuffleGridImg/sweet_roll.jpg",
  },
  {
    id: 3,
    src: "/neo_libral_seasoning.jpg",
  },
  {
    id: 4,
    src: "/garlic_bread.jpg",
  },
  {
    id: 5,
    src: "/shuffleGridImg/Orsimer_Venison.jpg",
  },
  {
    id: 6,
    src: "/Lavender_and_honey_bread.jpg",
  },
  {
    id: 7,
    src: "/milkandhoney.jpg",
  },
  {
    id: 8,
    src: "/shuffleGridImg/actual_nord_spice.jpg",
  },
  {
    id: 9,
    src: "/shuffleGridImg/rootcake.jpg",
  },
];

const generateSquares = (): JSX.Element[] => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full bg-bottom"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    />
  ));
};

const ShuffleGrid: React.FC = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState<JSX.Element[]>(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className=" hidden sm:grid p-6 lg:p-3 grid-cols-1 h-[1200px] sm:h-[700px] grid-rows-4 sm:grid-cols-2 sm:grid-rows-2  lg:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3 lg:h-[450px] gap-1.5">
      {squares.map((sq) => sq)}
    </div>
  );
};
export default ShuffleGrid;
