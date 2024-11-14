import React, { useEffect, useState } from 'react';
import CartDisplay from '../../CartDisplay/CartDisplay';
import WishListDisplay from '../../WishListDisplay/WishListDisplay';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashBoardBanner = () => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [showCart, setShowCart] = useState(true);
    const [showWishlist, setShowWishlist] = useState(false);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setCart(savedCart);
        setWishlist(savedWishlist);
    }, []);

    const handleCartClick = () => {
        setShowCart(true);
        setShowWishlist(false);
    };

    const handleWishlistClick = () => {
        setShowWishlist(true);
        setShowCart(false);
    };

    const handleDeleteItem = (indexToRemove) => {
        const updatedCart = cart.filter((_, index) => index !== indexToRemove);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleDeleteWishItem = (indexToRemove) => {
        const updatedWishlist = wishlist.filter((_, index) => index !== indexToRemove);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    const addToCartFromWishlist = (item) => {
        const itemExistsInCart = cart.some(cartItem => cartItem.product_title === item.product_title);
        if (itemExistsInCart) {
            toast.error('This item is already in the cart!');
            return;
        }
        const updatedCart = [...cart, item];
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            const updatedWishlist = wishlist.filter(wishlistItem => wishlistItem.product_title !== item.product_title);
            setWishlist(updatedWishlist);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        
            toast.success('Item added to cart successfully!');
    };

    return (
        <div>
            <div className="text-center bg-purple-600 text-white space-y-4 p-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="md:w-7/12 mx-auto">The Dashboard provides quick access to your WishList and Cart. Easily view saved items or proceed to checkout in one click.</p>
                <div className='flex justify-center gap-2'>
                    <button
                        onClick={handleCartClick}
                        className={`px-10 py-3 rounded-full ${
                            showCart ? 'bg-white text-purple-600' : 'outline text-white'
                        }`}
                    >
                        Cart
                    </button>
                    <button
                        onClick={handleWishlistClick}
                        className={`px-10 py-3 rounded-full ${
                            showWishlist ? 'bg-white text-purple-600' : 'outline text-white'
                        }`}
                    >
                        WishList
                    </button>
                </div>
            </div>

            {showCart && <CartDisplay cart={cart} handleDeleteItem={handleDeleteItem} />}
            {showWishlist && (
                <WishListDisplay
                    wishlist={wishlist}
                    handleDeleteWishItem={handleDeleteWishItem}
                    addToCartFromWishlist={addToCartFromWishlist}
                />
            )}
            <ToastContainer position='top-center'></ToastContainer>
        </div>
    );
};

export default DashBoardBanner;
