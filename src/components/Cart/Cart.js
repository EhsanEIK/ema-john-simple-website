import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart)
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: </p>
            <p>Total Shipping Charge: </p>
            <p>Tax: </p>
            <p>Grand Total: </p>
        </div>
    );
};

export default Cart;