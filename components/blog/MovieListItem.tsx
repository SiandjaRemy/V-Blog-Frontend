"use client";
import { cn } from "@/lib/utils";

const MovieListItem = () => {
  return (
    <div className="flex flex-col bg-white shadow rounded-lg p-3 w-full gap-4">
      <div className="max-w-full w-full">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
            // Preload hover image by setting it in a pseudo-element
            "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}
        >
        </div>
      </div>
      <div className="">
            <h1 className="font-bold text-3xl relative">
              Background Overlays
            </h1>
            <div className="font-normal flex items-center text-lg mt-4">
              <p className="">By Kyle Reiner </p>
              <span className="flex w-1 h-1 mx-2 rounded-full bg-black"></span>
              <p className="">Aug 24 2023</p>
            </div>
          </div>

    </div>
  );
}

export default MovieListItem