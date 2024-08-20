import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-20 shadow items-center flex fixed w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48 bg-white z-40">
      <div className="flex w-full justify-between items-center h-full">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold">V-Blog</h1>
        </Link>

        <button className="flex flex-col w-10 justify-evenly h-10">
          <div className="flex w-full p-[2px] rounded-full bg-black"></div>
          <div className="flex w-full p-[2px] rounded-full bg-black"></div>
          <div className="flex w-full p-[2px] rounded-full bg-black"></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
