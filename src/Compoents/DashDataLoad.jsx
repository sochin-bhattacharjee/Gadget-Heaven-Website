import React, { useState } from 'react';
import ProductDetailsLoadData from './ProductDetails/ProductDetailsLoadData/ProductDetailsLoadData';

const DashDataLoad = () => {
    const [cart , setCart] = useState([])

    const addCart =(products) =>{
        setCart([...cart,products])
    }
    console.log(cart)
    return (
        <div>
            <ProductDetailsLoadData addCart={addCart}></ProductDetailsLoadData>
        </div>
    );
};

export default DashDataLoad;