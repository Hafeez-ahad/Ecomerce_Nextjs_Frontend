"use client";

import { products_mormal } from "@/utils/constant/text";
import React, { useState } from "react";
import Card_AllProducs from "./Card_AllProducs";

const AllProduct = () => {
  // Get all unique categories
  const categoryList = [
    ...new Set(products_mormal.map((item) => item.category)),
  ];

  // State
  const [products, setProducts] = useState(products_mormal);
  const [selectedCategory, setSelectedCategory] = useState("all category");
  const [searchInput, setSearchInput] = useState("");

  // Handle category change
  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    applyFilters(selected, searchInput);
  };

  // Handle search
  const handleSearch = () => {
    applyFilters(selectedCategory, searchInput);
    setSearchInput(""); // clear input after search
  };

  // Combined filter logic
  const applyFilters = (category, keyword) => {
    let filtered = products_mormal;

    if (category !== "all category") {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (keyword.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(keyword.trim().toLowerCase())
      );
    }

    setProducts(filtered);
  };

  return (
    <>
      <p className="text-[20px] my-[20px] font-bold text-center text-yellow-500 underline underline-offset-6 decoration-black decoration-[1.5px]">
        Shop it Easy
      </p>

      {/* Search and Filter */}
      <div className="flex justify-center items-center my-[20px] gap-[10px]">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search product here"
          value={searchInput}
          className="w-[180px] text-[11px] border border-gray-400 border-[2px] outline-none rounded-[20px] pl-[8px] py-[4px]"
        />
        <button
          onClick={handleSearch}
          className="text-white bg-black px-[8px] py-[4px] w-fit rounded-[3px] text-[13px] cursor-pointer"
        >
          Search
        </button>
        <select
          onChange={handleCategoryChange}
          value={selectedCategory}
          className="text-[11px] text-white bg-yellow-400 px-[4px] py-[3px] rounded-[3px] font-bold border-[1.5px] outline-none"
        >
          <option value="all category">All Category</option>
          {categoryList.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="flex justify-evenly flex-wrap items-center gap-[15px]">
        {products.length > 0 ? (
          products.map((item) => <Card_AllProducs key={item.id} item={item} />)
        ) : (
          <p className="text-center text-red-500 font-semibold mt-[30px]">
            No products found.
          </p>
        )}
      </div>
    </>
  );
};

export default AllProduct;
