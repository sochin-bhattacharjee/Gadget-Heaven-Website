import React, { useState } from 'react';
import ProductDetailsLoadData from '../ProductDetails/ProductDetailsLoadData/ProductDetailsLoadData';
import DashBoardBanner from '../DashBoard/DashBoardBanner/DashBoardBanner';

const AddCartDashBoard = () => {
    const [cart, setCart] = useState([]);
    const addCart =(products) =>{
        setCart([...cart,products])
    }
    return (
        <div>
            <DashBoardBanner cart={cart}></DashBoardBanner>
            <ProductDetailsLoadData addCart={addCart}></ProductDetailsLoadData>
        </div>
    );
};

export default AddCartDashBoard;