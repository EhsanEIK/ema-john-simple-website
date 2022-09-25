import React from 'react';
import './Product.css'

const Product = (props) => {
    const { id, name, img, seller, ratings } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt={img} />
                <div className='product-info'>
                    <p className='product-title'>{name}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings}</p>
                </div>
                <button className='btn-cart'>
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;