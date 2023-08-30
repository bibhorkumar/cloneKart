import React from "react";
import { Card } from "@mui/material";
import "./ProductCard.css";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  // console.log(product);

  const productDetails = () => {
    window.open("https://www.flipkart.com", "_blank");
  };

  return (
    <>
      <CardActionArea>
        <Link to={`/products/${product.id}`} target="_blank">
          <Card className="product-card" variant="outlined">
            <img src={product.image} alt="product"></img>
            <h5>{product?.title}</h5>
            <p>₹{product.price}</p>
          </Card>
        </Link>
      </CardActionArea>
    </>
  );
}
