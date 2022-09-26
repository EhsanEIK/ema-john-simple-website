import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleClick }) => {
    const { name, img, seller, ratings, price } = product;

    return (
        <div className='product'>
            <div>
                <img src={img} alt={img} />
                <div className='product-info'>
                    <p className='product-title'>{name}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings}</p>
                    <p>Price: {price}</p>
                </div>
                <button onClick={() => handleClick(product)} className='btn-cart'>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Product;