import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

import { PostType } from "@/app/page";

interface MovieListProps {
  allMovies: PostType[]
}

const MovieList:React.FC<MovieListProps> = ({allMovies}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-3xl font-semibold md:text-center">All Movies</h1>
      <BentoGrid className="w-full md:grid-cols-4">
        {allMovies.map((item, i) => (
          <BentoGridItem
            key={i}
            movie={item}
            className={`col-span-2`} 
          />
        ))}
      </BentoGrid>
    </div>
  );
}

export default MovieList