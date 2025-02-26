import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProductDetails();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.product_details}>
      <h2>{product.title}</h2>
      <div className={styles.product_view}>
      <img src={product.image} alt={product.title} />
      <div className={styles.prod_cont}>
       <p>{product.description}</p>
       <p>Price: ${product.price}</p>
       <p>Category: {product.category}</p>
      </div>
 
      </div>
  
    </div>
  );
};

export default ProductDetails;