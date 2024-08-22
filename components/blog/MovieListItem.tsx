"use client";
import { cn } from "@/lib/utils";
import { PostType, ReactionType } from "@/app/page";

import MovieList from "@/components/blog/MovieList";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getExternalData, postData } from "@/app/services/apiServices";

interface MovieListItemProps {
  movie: PostType;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [userIp, setUserIp] = useState("");
  const [userHasReacted, setUserHasReacted] = useState(false);

  const router = useRouter();

  if (!movie) {
    return <h1>404 - Page Not Found</h1>;
  }

  const getUserIp = async () => {
    const data = await getExternalData("https://ipapi.co/json");
    if (data) {
      setUserIp(data.ip);
      // console.log("data", data.ip);
      const hasReacted = movie.reactions?.some(
        (reaction) => reaction.ip_address === data.ip
      );
      setUserHasReacted(hasReacted !== undefined ? hasReacted : false);
    }
  };

  useEffect(() => {
    getUserIp();
  }, []);

  const pluralize = (count: number, word: string) => {
    if (count > 1) {
      return `${count} ${word}s`;
    } else if (count === 1) {
      return `1 ${word}`;
    } else {
      return `No ${word}s`;
    }
  };

  const ReactToPost = async () => {
    const reaction: ReactionType = {
      ip_address: userIp,
      type: "🔥",
    };
    const response = await postData(
      `/blog/post/${movie.id}/reactions`,
      reaction
    );
    console.log("reaction", reaction);
    console.log("response", response);
  };

  return (
    <div
      className="cursor-pointer flex flex-col bg-white shadow rounded-lg p-3 w-full gap-4 grow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/blog/${movie.movie_name}`}
        className="max-w-full w-full h-60 bg-black overflow-hidden flex items-center justify-evenly"
      >
        <Image
          width={400}
          height={300}
          priority={true}
          placeholder="empty"
          src={
            isHovered
              ? `${process.env.NEXT_PUBLIC_API_HOST}${movie.gif}`
              : `${process.env.NEXT_PUBLIC_API_HOST}${movie.image}`
          }
          alt={movie.movie_name}
          className="rounded-md object-cover w-auto h-auto"
        />
      </Link>
      <div className="flex flex-col grow justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Link href={`/blog/${movie.movie_name}`}>
              <h1 className="font-bold text-2xl md:text-xl relative">
                {movie.movie_name}
              </h1>
            </Link>
            <button
              onClick={ReactToPost}
              className={`min-w-8 min-h-8 border flex items-center justify-evenly rounded-full cursor-pointer ${userHasReacted ? 'bg-blue-200' : 'hover:bg-blue-100'}`}
            >

            </button>
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
            {movie.reactions?.length !== undefined
              ? pluralize(movie.reactions?.length, 'Reaction')
              : ""}
            &nbsp;and&nbsp;
            {movie.comments?.length !== undefined
              ? pluralize(movie.comments?.length, 'Comments')
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieListItem;
