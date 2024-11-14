import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllProduct = ({product}) => {
    const {product_title,price,product_image,product_id} = product;
    const navigate = useNavigate();
    const handleViewDetails = () => {
        navigate(`/product/${product_id}`);
    }
    return (
    <div className="card card-compact bg-base-100 shadow-xl p-3 h-[370px]">
        <figure>
            <img className='h-36 w-full xl:w-auto 2xl:h-80 rounded-xl 2xl:rounded-3xl'
                src={product_image}
                alt={product_title} />
        </figure>
        <div className="card-body">
            <h2 className="card-title 2xl:text-2xl">{product_title}</h2>
            <p className='2xl:text-xl 2xl:font-bold 2xl:pb-1'>Price : {price} k</p>
            <div className="card-actions">
            <button onClick={handleViewDetails} className=" border-[3px] border-purple-600 rounded-full p-2 text-purple-600 hover:text-white hover:bg-purple-600 2xl:text-xl">View Details</button>
        </div>
        </div>
    </div>
    );
};

export default AllProduct;