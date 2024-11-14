import React, { useState, useEffect } from 'react';
import sortIcon from '../../assets/Frame (3).png';
import deleteIcon from '../../assets/Frame (4).png';
import success from '../../assets/Group.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartDisplay = ({ cart, handleDeleteItem }) => {
    const [sortedCart, setSortedCart] = useState(cart);
    const [showModal, setShowModal] = useState(false);
    const [modalTotalPrice, setModalTotalPrice] = useState(0);
    
    const totalPrice = sortedCart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    useEffect(() => {
        setSortedCart(cart);
    }, [cart]);

    const sortByPriceDescending = () => {
        const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
        setSortedCart(sorted);
    };

    const navigate = useNavigate();

    const openPurchaseModal = () => {
        if (parseFloat(totalPrice) === 0) {
            toast.error('Your cart is empty. Please add items before purchasing.');
            return;
        }
        setModalTotalPrice(totalPrice);
        setShowModal(true);
        setSortedCart([]);
    };

    const handlePurchase = () => {
        localStorage.removeItem('cart');
        setShowModal(false);
        navigate('/');
    };

    return (
        <div className="mt-4 bg-white text-black rounded-lg p-1 sm:p-4 mb-28">
            <div className='flex flex-col sm:flex-row justify-between items-center pb-9'>
                <h2 className="text-2xl font-bold">Cart Items</h2>
                <div className='flex flex-col md:flex-row gap-5 items-center'>
                    <p className='mt-3 md:mt-0'><span className='md:text-lg font-bold'>Total cost:</span> <span className="font-semibold">{totalPrice} k</span></p>
                    <div className='flex gap-2 items-center'>
                    <button onClick={sortByPriceDescending} className='flex items-center gap-1 btn rounded-full bg-white border-2 hover:border-2 border-purple-600 hover:border-purple-600'>
                        Sort by Price
                        <img src={sortIcon} alt="" />
                    </button>
                    <button className='btn bg-purple-600 hover:bg-white border-2 hover:border-purple-600 text-white hover:text-purple-600 rounded-full' onClick={openPurchaseModal}>Purchase</button>
                    </div>
                </div>
            </div>

            {sortedCart.length > 0 ? (
                <ul className='md:w-11/12 mx-auto space-y-2'>
                    {sortedCart.map((item, index) => (
                        <li key={index} className="border-2 rounded-2xl px-3 shadow-md p-2 flex justify-between items-center">
                            <div className='flex gap-1 sm:gap-5 items-center'>
                                <div>
                                    <img className='w-36 sm:w-48 h-20 sm:h-28 rounded-2xl' src={item.product_image} alt={item.product_title} />
                                </div>
                                <div className='space-y-1'>
                                    <p><strong className='text-sm sm:text-xl'>{item.product_title}</strong></p>
                                    <p className='text-xs sm:text-base'>{item.specification}</p>
                                    <p className='text-xs sm:text-lg font-bold'>Price: {item.price} k</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => handleDeleteItem(index)} 
                                className="text-red-500 hover:text-red-700 text-xs border-2 border-red-300 p-1 rounded-full"
                            >
                                <img className='w-4' src={deleteIcon} alt="" />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='w-10/12 mx-auto text-center text-lg md:text-2xl font-semibold text-red-500'>There are currently no items on your Cart</p>
            )}

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg flex flex-col justify-center items-center sm:space-y-5 sm:w-5/12">
                        <img src={success} alt="" />
                        <h2 className="text-xl font-bold mb-4">Payment Successfully</h2>
                        <h2 className="mb-4">Thanks for purchasing.</h2>
                        <h2 className="mb-4 font-bold">Total Price : {modalTotalPrice}</h2>
                        <div className="flex gap-4 w-8/12">
                            <button onClick={handlePurchase} className="rounded-full btn px-10 py-2 w-full">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartDisplay;
