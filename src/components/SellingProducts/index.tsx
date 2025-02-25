"use client";

import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import ProductsList from "./ProductsList";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

function SellingProducts(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState("chair");

  const handleButtonClick = (buttonName: string) => {
    setSelectedCategory(buttonName);
  };

  return (
    <section id="sellingProducts" className="flex w-full flex-col items-center justify-center bg-frost px-32 py-12 lg:px-4">
      <div className="flex justify-center">
        <h2 className="mb-8 text-4xl font-semibold text-obsidian">
          Best Selling Products
        </h2>
      </div>
      <ButtonGroup
        selectedCategory={selectedCategory}
        handleButtonClick={handleButtonClick}
      />
      <div className="mt-20 flex max-w-[1198.35px] items-center justify-center gap-10 lg:flex-wrap">
        {/* @ts-expect-error Server Component */}
        <ProductsList category={selectedCategory} />
      </div>
      <div className="mt-12 flex w-full items-center justify-center">
        <a className="text-sm font-medium text-amber" href="#">
          View All
        </a>
        <HiArrowLongRight className="h-6 w-12 text-amber" />
      </div>
    </section>
  );
}

export default SellingProducts;
