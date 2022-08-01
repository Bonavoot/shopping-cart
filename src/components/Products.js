import vanityImg from "../images/vanity.webp";
import doubleSinkVanity from "../images/doubleVanity.webp";
import bathtubImg from "../images/bathtub.jpg";
import kitchenImg from "../images/kitchen-counter.jpg";
import island from "../images/island.jpg";
import fireplace from "../images/fireplace.png";
import conference from "../images/conference.jpg";
import Cart from "../pages/Cart";
import React, { useEffect, useState } from "react";

// Products
const bathroom = [
  { name: "Vanity", price: 149.99, quant: 0, img: vanityImg },
  {
    name: "Double Sink Vanity",
    price: 299.95,
    quant: 0,
    img: doubleSinkVanity,
  },
  { name: "Bathtub", price: 199.99, quant: 0, img: bathtubImg },
];

const kitchen = [
  { name: "Counter Top", price: 349.99, quant: 0, img: kitchenImg },
  { name: "Island", price: 599.99, quant: 0, img: island },
];
const livingroom = [
  { name: "Fireplace", price: 799.99, quant: 0, img: fireplace },
];

const office = [
  { name: "Conference Table", price: 999.99, quant: 0, img: conference },
];

const Products = (category) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  let picked = bathroom;

  function addToCart() {
    setCartQuantity(cartQuantity + 1);
  }

  useEffect(() => {
    console.log("this ran");
    <Cart cartQuantity={cartQuantity} />;
  }, [cartQuantity]);

  // Displays the clicked category
  if (category.props === "OFFICE") {
    picked = office;
  } else if (category.props === "BATHROOM") {
    picked = bathroom;
  } else if (category.props === "LIVING ROOM") {
    picked = livingroom;
  } else if (category.props === "KITCHEN") {
    picked = kitchen;
  }

  return (
    <div className="product-container">
      <h1>{category.props}</h1>
      {picked.map((item) => (
        <div key={item.name}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <h4>{"$" + item.price}</h4>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
