import Image from "next/image";

import MovieList from "@/components/blog/MovieList";
import PopularMovieList from "@/components/blog/PopularMovieList";

export type CategoryType = {
  id: string;
  name: string;
  created_at: string;
};

export type PostType = {
  id: string;
  name: string;
  created_at: string;
};

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-center font-thin italic mb-4">
          My Personal reviews on the Latest movies
        </h1>
        <div className="flex flex-col gap-10">
          <PopularMovieList />

          <MovieList />
        </div>
      </div>
    </main>
  );
}
