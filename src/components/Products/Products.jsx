import React from 'react';
import useSingleData from '../../Hooks/useSingleData';
import Product from './Product';

const Products = () => {
    const products = useSingleData();
    return (
        <div className=' my-10'>
            <h1 className=' text-center text-2xl'> All Products</h1>

            <div className=' grid grid-cols-3 gap-8 mt-12'>
                {
                    products?.map((product, index) => <Product product={product} key={index}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;