import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryList.module.css';
import Header from '../Header/Header';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      
       <div className={styles.category_list}>
        
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  
  );
};

export default CategoryList;