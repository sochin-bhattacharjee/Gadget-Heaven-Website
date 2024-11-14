import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsLoadData from './ProductDetailsLoadData/ProductDetailsLoadData';

const ProductDetails = () => {
    const {id} = useParams();
    const [product , setProduct] = useState(null);
    useEffect(() =>{
        fetch(`/product.json`)
        .then(res => res.json())
        .then(data => {
            const selectedProduct = data.find(item => item.product_id === Number(id));
                setProduct(selectedProduct);
        })
    } ,[id])
    return (
        <div className='relative md:mb-[450px]'>
            <div className="text-center bg-purple-600 text-white space-y-3 p-6 md:pb-48 2xl:pb-72">
            <h1 className="text-3xl font-bold ">Product Details</h1>
            <p className="md:w-7/12 mx-auto">Product Details provide in-depth information on a product, including features, specifications, price, and benefits, helping customers make informed purchase decisions.</p>
        </div>
            {product ? (<ProductDetailsLoadData product={product}></ProductDetailsLoadData>):(<p>Loading product details...</p>)}
        </div>
    );
};

export default ProductDetails;