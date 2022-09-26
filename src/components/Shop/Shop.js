import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const addToCart = (product) => {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProducts = products.find(product => product.id === id);
            if (addedProducts) {
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts);
            }
        }
        setCart(savedCart);
    }, [products]);

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClick={addToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;