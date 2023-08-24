import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import CarouselFunc from './components/Carousel/Carousel';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className='body'>
        <Categories />
        <CarouselFunc/>
      </div>
    </div>
  );
}

export default App;
