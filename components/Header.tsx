import Link from "next/link"

const Header = () => {
    return (
        <header className="flex w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
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
        </header>
    )
}

export default Header