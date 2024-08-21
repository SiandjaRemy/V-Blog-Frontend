"use client";
import { cn } from "@/lib/utils";
import { PostType } from "@/app/page";
import MovieList from "@/components/blog/MovieList";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface MovieListItemProps {
  movie: PostType;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  const router = useRouter();

  if (!movie) {
    return <h1>404 - Page Not Found</h1>;
  }

  return (
    <div className="flex flex-col bg-white shadow rounded-lg p-3 w-full gap-4 grow">
      <div className="max-w-full w-full">
        {/* <div
          className={cn(
            `group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800`,
            // `bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover`,
            // Preload hover image by setting it in a pseudo-element
            // `before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
            // `hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]`,
            `hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50`,
            `transition-all duration-500`
          )}
        ></div> */}
        {/* <Image src={movie.image_url} fill alt={movie.movie_name} /> */}
      </div>
      <div className="flex flex-col grow justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl md:text-xl relative">
              {movie.movie_name}
            </h1>
            <span className="min-w-8 min-h-8 border rounded-full cursor-pointer hover:bg-blue-100"></span>
          </div>
          <div className="flex text-md items-center divide-x divide-gray-400 w-fit max-h-fit border rounded-md border-gray-400">
            <span className="px-2 items-center justify-evenly text-center">
              2020
            </span>
            <span className="px-2 items-center justify-evenly text-center">
              1H47
            </span>
          </div>
          <div className="font-normal flex flex-col text-lg">
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae voluptas nesciunt temporibus sunt dolores, rerum
              dolore, eos voluptates nam minima animi consequuntur ipsam, enim
              ducimus sapiente. At aperiam perspiciatis rem voluptates corrupti.
              Officia adipisci similique nisi suscipit saepe iste temporibus.
            </p>
          </div>
        </div>

        <div className="text-sm text-gray-500 flex justify-end mt-auto">
          <span className="hover:underline cursor-pointer">
            5 Reactions and 8 comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieListItem;
