

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CategoryList from './components/product/CategoryList';
import ProductList from './components/product/ProductList';
import ProductDetails from './components/product/ProductDetails';
// import UserComponent from './components/User/UserComponent';
import CreateAccount from './components/Login/CreateAccount';
import './App.css'; 
import Login from './components/Login/Login';

const App = () => {
  return (
   
    <Router>
      <div className="root">
        <Header />
        <div className="categ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={
              <div className="products-page">
                <CategoryList />
                <ProductList />
              </div>
            } /> 
            <Route path="/category/:category" element={ <ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
           
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;