import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';
import './Cart.css';

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                        </div>
                    ))}
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                </>
            )}
        </div>
    );
}

export default Cart;
