"use client";

import Image from "next/image";

import { useState, useEffect } from "react";

import { getData, getExternalData } from "./services/apiServices";
import apiService from "./services/apiService";
import MovieList from "@/components/blog/MovieList";
import PopularMovieList from "@/components/blog/PopularMovieList";

export type ReactionType = {
  ip_address: string;
  type?: string;
  created_at?: string;
};

export type CommentType = {
  content: string;
  created_at?: string;
};


export type PostType = {
  id: string;
  movie_name: string;
  synopsis: string;
  my_review: string;
  image: string;
  gif: string;
  created_at: string;
  reactions?: ReactionType[];
  comments?: CommentType[];
};

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchAllPosts = async () => {
    const data = await getData("/blog/post");
    if (data) {
      setPosts(data.results);
      setIsLoaded(true);
      console.log("data", data.results);
    }
  };


  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <main className="">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-center font-thin italic mb-4">
          My Personal reviews on the Latest movies
        </h1>
        <div className="flex flex-col gap-10">
          <PopularMovieList popularMovies={posts.slice(0, 4)} />

          <MovieList allMovies={posts} />
        </div>
      </div>
    </main>
  );
}
