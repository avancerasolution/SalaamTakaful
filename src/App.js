import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import './style.css';
import BuyNow from './pages/BuyNow';
import Product from './pages/product';
import Esg from './pages/esg';
import "../src/responsive.css"
import Governance from './pages/Governance';
import Usp from './pages/Usp';


function App() {


  return (
    <React.Fragment>

      <BrowserRouter>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/buynow' element={<BuyNow />} />
          <Route path='/product' element={<Product />} />
          <Route path='/esg' element={<Esg />} />
          <Route path='/governance' element={<Governance />} />
          <Route path='/usp' element={<Usp />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
