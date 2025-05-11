# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React E-Commerce Application

## Overview

This is a React-based e-commerce application that allows users to browse products, view product details, and manage user information. The application utilizes Redux for state management and fetches data from various APIs.

## Features

- **Home Component**: The landing page of the application.
- **Products Navigation**: Users can click on "Products" in the navbar to navigate to the Products component.
- **Left Panel**: Displays product categories fetched from a specified API.
- **Right Panel**: Displays product titles based on the selected category, also fetched from an API.
- **Default View**: By default, the right panel shows titles of electronic products.
- **Category Navigation**: Users can click on links in the left panel (e.g., Jewellery, Men's Clothing, Women's Clothing) to fetch and display product titles for the respective category.
- **Product Details Component**: Clicking on a product title navigates to the Product Details component, which displays the entire details of the selected product.
- **Redux Store**: Product details in the Product Details component are fetched from the Redux store.
- **Users Component**: Fetches user details from the API
- **User  Filtering**: Users can filter the displayed user data based on gender (Male, Female, All) using radio buttons.
- **Contact Page**: A contact page is available.

## UI Structure

### Navbar

- **Home**: Navigates to the home component.
- - **Products**: Navigates to the Products component.
- **user**: Navigates to the user page 
- - **Contact**: Navigates to the Contact page.


### Products Component

- **Left Panel**: Displays links for product categories (e.g., Electronics, Jewellery, Men's Clothing, Women's Clothing).
- **Right Panel**: Displays product titles as links. By default, it shows electronic products.

### Product Details Component

- Displays the entire details of the selected product, including:
  - Title
  - Description
  - Price
  - Image
  - Any other relevant details

### Users Component

- Displays user details in a table format.
- Users can filter the data based on gender:
  - **Male**: Shows only male users.
  - **Female**: Shows only female users.
  - **All**: Shows all users.



## Redux Implementation

- The application uses Redux for state management, particularly for managing product details and user filtering.
- Implement filtering features using Redux concepts to manage the state of user gender selection.


