import CardDemo from "@/components/ui/CardDemo";

export type BlogType = {
  author: string;
  image: string;
  title: string;
  category: string;
  description: string;
  date: string;
};

const BlogPage = () => {
  return (
    <div>
      Blog Page
      <div className="flex flex-col gap-4">
        <CardDemo />
      </div>
    </div>
  );
};

export default BlogPage;
