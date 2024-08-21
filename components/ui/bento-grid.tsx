import { cn } from "@/lib/utils";

import MovieListItem from "../blog/MovieListItem";
import { PostType } from "@/app/page";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("grid grid-cols-1 gap-4", className)}>
      {children}
    </div>
  );
};

interface MovieItemProps {
  movie: PostType,
  className?: string,
}

export const BentoGridItem: React.FC<MovieItemProps> = ({movie, className}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <MovieListItem movie={movie} />
    </div>
  );
};
