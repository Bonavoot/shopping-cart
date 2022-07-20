import React, { useState } from "react";
import Products from "../components/Products.js";

const Shop = () => {
  const [category, setCategory] = useState("bathroom");

  const handleCategoryClick = (e) => {
    setCategory(e.target.textContent);
  };

  return (
    <div className="shop-container">
      <h2>CATEGORIES</h2>
      <ul>
        <li onClick={handleCategoryClick}>BATHROOM</li>
        <li onClick={handleCategoryClick}>KITCHEN</li>
        <li onClick={handleCategoryClick}>LIVING ROOM</li>
        <li onClick={handleCategoryClick}>OFFICE</li>
      </ul>
      <Products props={category} />
    </div>
  );
};

export default Shop;
