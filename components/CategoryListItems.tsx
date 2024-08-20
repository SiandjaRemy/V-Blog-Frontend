import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CategoryType } from "@/app/page";


interface CategoryProps {
  category: CategoryType;
}

const FantasyCardListItem: React.FC<CategoryProps> = ({ category }) => {
  const router = useRouter()

  if (!category) {
      return <h1>404 - Page Not Found</h1>
  }

  return (
    <div className="cursor-pointer border p-2 rounded-2xl hover:shadow-lg transition duration-500 hover:scale-105">
      
    </div>
  );
};

export default FantasyCardListItem;
