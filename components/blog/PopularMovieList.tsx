import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

import { PostType } from "@/app/page";

interface PopularMovieListProps {
  popularMovies: PostType[];
}

const PopularMovieList: React.FC<PopularMovieListProps> = ({
  popularMovies,
}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-3xl font-semibold md:text-center">Most Popular</h1>
      <BentoGrid className="w-full md:grid-cols-3">
        {popularMovies.map((item, i) => (
          <BentoGridItem
            key={i}
            movie={item}
            className={`
              ${i === 1 || i === 2 ? "md:col-span-1" : "md:col-span-2"} 
            `}
          />
        ))}
      </BentoGrid>
    </div>
  );
};


export default PopularMovieList;
