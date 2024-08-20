import CardDemo from "@/components/ui/CardDemo";
import MostPopularGridList from "@/components/ui/MostPopular";

import { CategoryType } from "@/app/page";

interface CategoryProps {
  allCategories: CategoryType[];
}

const CategoryList: React.FC<CategoryProps> = ({ allCategories }) => {
  return (
    <div>
      Blog Page
      <div className="flex flex-col gap-4">
        <CardDemo />
        <div className="flex w-full">
          <MostPopularGridList />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
