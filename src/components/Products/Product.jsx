import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, brand, category, description, images, rating, price } = product || {};

    return (
        <div className=' bg-slate-200 shadow-md p-6 rounded-3xl'>
            <img className=' h-64 w-full rounded-xl' src={images[0] || ''} alt="" />
            <div className=' mt-4'>
                <h1 className=' font-bold'>Brand: {brand}</h1>
                <h1>Category: {category}</h1>
                <h1>Description: {description}</h1>

                <p>Rating: <Rating
                    emptySymbol={<svg className=' h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" /></svg>}
                    fullSymbol={<svg className=' h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>}
                    initialRating={rating}
                    readonly
                /></p>
                <p>Price: {price}</p>
                <div className=' flex justify-center mt-8'>
                    <Link className=' px-8 py-3 bg-green-400 text-white rounded' to={`/product/${id}`} state={brand}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;