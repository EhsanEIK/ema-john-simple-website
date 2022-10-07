import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleClearCart, children }) => {
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: {shipping}</p>
            <p>Tax: {tax}</p>
            <h3>Grand Total: {grandTotal.toFixed(2)}</h3>
            <button className='btn-clear-cart' onClick={handleClearCart}>
                <p>Clear Cart</p>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
            {children}
        </div>
    );
};

export default Cart;