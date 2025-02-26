import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProductList.module.css'

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const categoryToFetch = category || 'electronics'; // Default to electronics
      const response = await fetch(`https://fakestoreapi.com/products/category/${categoryToFetch}`);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, [category]);

  return (
    <div className={styles.product_list}>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;