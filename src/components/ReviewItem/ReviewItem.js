import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product }) => {
    const { img, name, price, quantity, shipping } = product;
    return (
        <div className='review-item-container'>
            <img src={img} alt={name} />
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: {price}</p>
                    <p>Shipping: {shipping}</p>
                </div>
                <div>
                    <button className='btn-delete'>
                        <FontAwesomeIcon className='btn-delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;