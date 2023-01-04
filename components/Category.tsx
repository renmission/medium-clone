import React from "react";
import { CategoryProps } from "../typing";
import Link from "next/link";
import Footer from "./Footer";
import HorizontalLine from "./HorizontalLine";

function Category({ categories }: CategoryProps) {
  return (
    <div className="lg:float-right lg:w-2/6 items-center space-x-5">
      <div>
        <h1 className="font-bold text-sm px-7">
          DISCOVER MORE OF WHAT MATTERS TO YOU
        </h1>
      </div>

      <div className="flex flex-wrap w-96 lg:w-5/6 py-6 text-gray-400 text-xs px-3">
        {categories.map((category) => (
          <Link key={category._id} href={`/tag/${category.slug}`}>
            <div className="border border-gray-300 rounded-sm p-2 text-center m-1">
              {category.title}
            </div>
          </Link>
        ))}
      </div>

      <HorizontalLine />

     
      <Footer />
    </div>
  );
}

export default Category;
