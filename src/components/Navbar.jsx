import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar() {
    const cartItemsCount = useSelector((state) => state.cart.items.length);

    return (
        <nav className="navbar">
            <div className="navbar-brand">Store</div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/cart">
                    Cart
                    {cartItemsCount > 0 && (
                        <span className="cart-count">{cartItemsCount}</span>
                    )}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
