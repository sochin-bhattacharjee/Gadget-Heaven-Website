import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cartIcon from '../../../assets/Frame (2).png';
import wishIcon from '../../../assets/Frame (6).png';  

const ProductDetailsLoadData = ({ product }) => {
    const addToCart = () => {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        const productExists = currentCart.some(item => item.product_title === product.product_title);

        if (productExists) {
            toast.error('This product is already in your cart!');
        } else if (product.availability === false) {
            toast.error("Sorry it's currently out of stock");
        } else {
            currentCart.push(product);
            localStorage.setItem('cart', JSON.stringify(currentCart));
            toast.success('Product added to cart successfully!');
        }
    };

    const addToWishlist = () => {
        const currentWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const productExists = currentWishlist.some(item => item.product_title === product.product_title);

        if (productExists) {
            toast.error('This product is already in your wishlist!');
        } else {
            currentWishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(currentWishlist));
            toast.success('Product added to wishlist:');
        }
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    const { product_image, product_title, price, availability, description, specification, rating } = product;

    return (
        <div className="card md:card-side bg-base-100 shadow-xl w-10/12 mx-auto p-5 gap-3 md:gap-10 2xl:gap-20 mb-20 md:mb-48 md:absolute md:left-14 lg:left-[80px] 2xl:left-[200px] xl:left-[120px] md:-bottom-[570px] 2xl:-bottom-[600px]">
            <figure>
                <img className="md:w-[500px] 2xl:w-[900px] md:h-[500px] 2xl:h-[600px] rounded-2xl object-contain" src={product_image} alt={product_title} />
            </figure>
            <div className="flex flex-col gap-1 md:gap-0 md:justify-between">
                <h2 className="text-xl md:text-3xl font-bold">{product_title}</h2>
                <p className="md:text-xl font-semibold">Price: {price} k</p>
                <div>
                    {availability ? (
                        <button className="text-green-500 outline md:text-lg rounded-full px-3 py-1 font-bold bg-green-100">
                            In Stock
                        </button>
                    ) : (
                        <button className="text-red-500 outline md:text-lg rounded-full px-3 py-1 font-bold bg-red-100">
                            Not Available
                        </button>
                    )}
                </div>
                <p>{description}</p>
                <div className="flex flex-col gap-2">
                    <h2 className="md:text-xl font-bold">Specification :</h2>
                    <ul>
                        {specification.map((spec, index) => (
                            <li key={index}>{index + 1}. {spec}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="md:text-xl font-bold">Rating</h1>
                    <div className="flex items-center gap-5">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="md:text-lg bg-base-200 rounded-full px-4 py-1">{rating}</div>
                    </div>
                </div>
                <div className="card-actions">
                    <button onClick={addToCart} className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full hover:rounded-2xl">
                        Add to Cart
                        <img src={cartIcon} alt="Cart" />
                    </button>
                    <button onClick={addToWishlist} className="btn border-2 p-3 rounded-full">
                        <img className="w-6" src={wishIcon} alt="Wish" />
                    </button>
                </div>
            </div>
            <ToastContainer position="top-center"></ToastContainer>
        </div>
    );
};

export default ProductDetailsLoadData;
