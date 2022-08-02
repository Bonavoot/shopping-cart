import vanityImg from "../images/vanity.webp";
import doubleSinkVanity from "../images/doubleVanity.webp";
import bathtubImg from "../images/bathtub.jpg";
import kitchenImg from "../images/kitchen-counter.jpg";
import island from "../images/island.jpg";
import fireplace from "../images/fireplace.png";
import conference from "../images/conference.jpg";
import React, { useState } from "react";

let productsAddedToCart = [];

const Products = (category) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  let pickedCategory = bathroom;

  // Stores data for Add to Cart button
  function addToCart({ name, price }) {
    setCartQuantity(cartQuantity + 1);
    productsAddedToCart.push({ name, price });
  }

  console.log(productsAddedToCart);
  // Renders clicked category
  if (category.props === "OFFICE") {
    pickedCategory = office;
  } else if (category.props === "BATHROOM") {
    pickedCategory = bathroom;
  } else if (category.props === "LIVING ROOM") {
    pickedCategory = livingroom;
  } else if (category.props === "KITCHEN") {
    pickedCategory = kitchen;
  }

  return (
    <div className="product-container">
      <h1>{category.props}</h1>
      {pickedCategory.map((item) => (
        <div key={item.name}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <h4>{"$" + item.price}</h4>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}

      <button className="cart-button">{cartQuantity}</button>
    </div>
  );
};

// Product data
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

export default Products;
