import React from 'react';
import './Product.css'

const Product = ({ product, handleClick }) => {
    const { name, img, seller, ratings } = product;

    return (
        <div className='product'>
            <div>
                <img src={img} alt={img} />
                <div className='product-info'>
                    <p className='product-title'>{name}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings}</p>
                </div>
                <button onClick={() => handleClick(product)} className='btn-cart'>
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;