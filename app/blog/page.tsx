import CardDemo from "@/components/ui/CardDemo"
import MyBentoGrid from "@/components/ui/my-bento-grid"

export type BlogType = {
    author: string,
    image: string,
    title: string,
    category: string,
    description: string,
    date: string,
}


const BlogPage = () => {
    return (
        <div>
            Blog Page
            <div className="flex flex-col gap-4">
                <CardDemo />
                <div className="flex w-full">
                <MyBentoGrid />
                </div>
            </div>
        </div>
    )
}

export default BlogPage