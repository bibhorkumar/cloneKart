import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard/ProductCard";
import './CategoryCard.css';

export default function CategoryCard({productsList,categoryTitle}){

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };

    return(
        <div className="category-card" style={{
            paddingBottom: '30px',
            position: 'relative'
        }}>
          <h3>Best of {categoryTitle} </h3>

          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={700}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="react-multi-carousel-dot-list"
            renderDotsOutside
            itemClass="carousel-item"
          >
            {productsList.map(item => (
              <ProductCard product={item}/>
            ))}
          </Carousel>
        </div>
    );
}