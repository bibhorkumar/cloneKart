import * as React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import CarouselFunc from "./components/Carousel/Carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import { Routes, Route } from "react-router-dom";
import { ProductDetailsPage } from "./components/ProductDetailsPage/ProductDetailsPage";

function App() {
  const [electronics, setElectronics] = React.useState([]);
  const [jewelery, setJewelery] = React.useState([]);
  const [mensClothing, setMensClothing] = React.useState([]);
  const [womensClothing, setWomensClothing] = React.useState([]);
  // const [allProducts, setAllProducts] = React.useState([]);

  // const fetchAllProducts = async () => {
  //   const res = await fetch("http://localhost:5000/products");
  //   const data = await res.json();
  //   setAllProducts(data);
  // }

  const fetchJewelery = async () => {
    const res = await fetch("http://localhost:5000/products/category/jewelery");
    const data = await res.json();
    setJewelery(data);
  };

  const fetchMensClothing = async () => {
    const res = await fetch(
      "http://localhost:5000/products/category/mens-clothing"
    );
    const data = await res.json();
    setMensClothing(data);
  };

  const fetchWomensClothing = async () => {
    const res = await fetch(
      "http://localhost:5000/products/category/womens-clothing"
    );
    const data = await res.json();
    setWomensClothing(data);
  };

  React.useEffect(() => {
    fetch("http://localhost:5000/products/category/electronics")
      .then((res) => res.json())
      .then((data) => setElectronics(data));
    fetchJewelery();
    fetchMensClothing();
    fetchWomensClothing();
    // fetchAllProducts();
  }, []);

  


  return (
   
      <Routes>
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/" element={
           <div className="App">
           <Navbar />
           <div className="body">
             <Categories />
             <CarouselFunc />
             <CategoryCard productsList={mensClothing} categoryTitle={"Men's Fashion"}/>
             <CategoryCard productsList={womensClothing} categoryTitle={"Women's Fashion"}/>
             <CategoryCard productsList={electronics} categoryTitle={'Electronics'}/>
             <CategoryCard productsList={jewelery} categoryTitle={'Jewelery'}/>
           </div>
           </div>
        }/>
      </Routes>
  );
}

export default App;
