import React from 'react';
import deleteIcon from '../../assets/Frame (4).png';
const WishListDisplay = ({ wishlist, handleDeleteWishItem, addToCartFromWishlist }) => {
    return (
        <div className="mt-4 bg-white text-black rounded-lg p-1 sm:p-4 mb-36">
            <h2 className="text-2xl font-bold pb-9">Wishlist Items</h2>
            {wishlist.length > 0 ? (
                <ul className='md:w-11/12 mx-auto space-y-2'>
                    {wishlist.map((item, index) => (
                        <li key={index} className="border-2 rounded-2xl px-3 shadow-md p-2 flex justify-between items-center">
                            <div className='flex gap-1 sm:gap-5 items-center'>
                            <div>
                            <img className='w-36 sm:w-48 h-20 sm:h-28 rounded-2xl' src={item.product_image} alt={item.product_title} />
                            </div>
                            <div>
                                <p><strong className='text-sm sm:text-xl'>{item.product_title}</strong></p>
                                <p className='text-xs sm:text-base'>{item.description} k</p>
                                <p className='text-xs sm:text-lg font-bold'>Price: {item.price} k</p>
                                <button className='bg-purple-600 text-white py-2 px-3 rounded-full' onClick={() => addToCartFromWishlist(item)}>Add to Cart</button>
                            </div>
                            </div>
                            <button 
                                onClick={() => handleDeleteWishItem(index)} 
                                className="text-red-500 hover:text-red-700 text-xs border-2 border-red-300 p-1 rounded-full"
                            >
                                <img className='w-4' src={deleteIcon} alt="" />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='w-10/12 mx-auto text-center text-lg md:text-2xl font-semibold text-red-500'>There are currently no items on your wish list</p>
            )}
        </div>
    );
};

export default WishListDisplay;
