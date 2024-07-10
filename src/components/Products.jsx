import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';
import './Products.css';

function Products() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    return (
        <div className='main'>
            <div className="content">
                {status === 'loading' && <div>Loading...</div>}
                {error && <div className="error">{error}</div>}
                {status === 'succeeded' && products.map((product) => (
                    <div key={product.id} className="card">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <h4>Price: ${product.price}</h4>
                        {/* <p>{product.description}</p> */}
                        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
