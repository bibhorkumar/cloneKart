import React from "react";
import {Card} from '@mui/material'
import './ProductCard.css';

export default function ProductCard({productsList}){
    return(
        <>
        {productsList.map(product=>(
            <Card className="product-card">
                <img src={product.image}></img>
                <h5>{product?.title}</h5>
                <p>₹{product.price}</p>
            </Card>
        ))}
        </>
    );
}