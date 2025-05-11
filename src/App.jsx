import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './components/User/store.jsx'; 
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CategoryList from './components/product/CategoryList';
import ProductList from './components/product/ProductList';
import ProductDetails from './components/product/ProductDetails';
import UserComponent from './components/User/UserComponent';
import Contact from './components/Contact/contact'
import Login from './components/Login/Login'; 
import CreateAccount from './components/Login/CreateAccount'; 
import { auth } from './components/firebase.js'; // Import firebase auth
import { onAuthStateChanged } from 'firebase/auth';
import './App.css'; 

const App = () => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (authLoading) {
   
    return <div className="loading">Loading...</div>;
  }

  return (
    <Provider store={store}>
      <Router>
        {user ? (
          <div className="root">
            <Routes>
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/create-account" element={<Navigate to="/" replace />} />
            </Routes>
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
                <Route path="/category/:category" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/users" element={<UserComponent />} />
                <Route path="/contact" element={<Contact/>} />
               
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        ) : (
        
          <div className="auth-wrapper">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount />} />
             
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
        )}
      </Router>
    </Provider>
  );
};

export default App;

