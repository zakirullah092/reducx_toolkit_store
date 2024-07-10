//index.js

import React from "react";
import { ReactDOM } from 'react-dom/client'
import store from "./store";
import App from "./App";
import './index.css'
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <App />
    </Provider>
)
// ------------------------------------------------

// store.jsx


    import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";



const store = configureStore({
    reducer: {
        products: porductsReducer,
        cart: cartReducer,
    },
});
export default store;