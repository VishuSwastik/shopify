
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

import './App.css'; 

const App = () => {
  

  return (
    <Provider store={store}>
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
                <Route path="/category/:category" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/users" element={<UserComponent />} />
                <Route path="/contact" element={<Contact/>} />
               
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        
      </Router>
    </Provider>
  );
};

export default App;

