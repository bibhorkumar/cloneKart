import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className='body'>
        <Categories />
      </div>
    </div>
  );
}

export default App;
