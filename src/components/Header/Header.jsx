// Filename: Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styles from './Header.module.css';
import Insert from '../../assets/insert.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.header_list}>
        <li><Link to="/">Home</Link></li> {/* Link to Home */}
        <li><Link to="/products">Products</Link></li> {/* Link to Products */}
        <li> <Link to="/users">Users</Link> </li>
        <li><Link to="/contact">Contact</Link></li>
        <li><img src={Insert} alt="Insert" /></li>
      </ul>
    </div>
  );
};

export default Header;