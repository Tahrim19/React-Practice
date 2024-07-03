import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";

function Card(props) {
  const {title, image, brand, price } = props;
  return (
    <div className="card">
      <img src={image} alt="image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

console.log("hello");
const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // this is react component
    const container = data.products.map((product) => {
      return (
        <Card
          title={product.title}
          brand={product.brand}
          price={product.price}
          image={product.thumbnail}
          key = {product.id}
        />
      );
    });
    root.render(<div className="container">{container}</div>);
  });

// what is react component?
// React element jiska type ik function ho or woh function ik jsx return krra ho.
// resuable piece of UI
// name would start from captial letter like Card
