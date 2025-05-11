// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer'; // Adjust the path as necessary

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
