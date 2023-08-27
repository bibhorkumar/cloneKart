import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import CarouselFunc from './components/Carousel/Carousel';
import ProductCard from './components/ProductCard/ProductCard';
import {Paper} from '@mui/material'


function App() {

  const [electronics, setElectronics] = React.useState([])
  const [jewelery, setJewelery] = React.useState([])
  const [mensClothing, setMensClothing] = React.useState([])
  const [womensClothing, setWomensClothing] = React.useState([])

  const fetchJewelery = async()=>{
    const res = await fetch('http://localhost:5000/products/category/jewelery')
    const data = await res.json()
    setJewelery(data);
  }

  const fetchMensClothing = async()=>{
    const res = await fetch('http://localhost:5000/products/category/mens-clothing')
    const data = await res.json()
    setMensClothing(data);
  }

  const fetchWomensClothing = async()=>{
    const res = await fetch('http://localhost:5000/products/category/womens-clothing')
    const data = await res.json()
    setWomensClothing(data);
  }

  React.useEffect(()=>{
    fetch('http://localhost:5000/products/category/electronics')
    .then(res=>res.json())
    .then(data=>setElectronics(data));
    fetchJewelery();
    fetchMensClothing();
    fetchWomensClothing();
  },[])

  return (
    <div className="App">
      <Navbar/>
      <div className='body'>
        <Categories />
        <CarouselFunc/>
        <div className='category-card'>
          <h3>Best of Electronics</h3>
          <div className='category-products-card'>
            <ProductCard productsList={electronics??[]}/>
          </div>
        </div>
        <div className='category-card'>
          <h3>Best of Jewelery</h3>
          <div className='category-products-card'>
            <ProductCard productsList={jewelery??[]}/>
          </div>
        </div>
        <div className='category-card'>
          <h3>Best of Men's Fashion </h3>
          <div className='category-products-card'>
            <ProductCard productsList={mensClothing??[]}/>
          </div>
        </div>
        <div className='category-card'>
          <h3>Best of Women's Fashion </h3>
          <div className='category-products-card'>
            <ProductCard productsList={womensClothing??[]}/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
