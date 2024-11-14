import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImage from '../../assets/404.png'
const Error = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 text-gray-700">
            <div>
            <img className='w-36 md:w-auto' src={errorImage} alt="" />
            </div>
            <div className=''>
            <p className="text-2xl lg:text-7xl font-semibold mt-4 text-center md:text-start">A w w Don't CRY</p>
            <p className="text-2xl lg:text-3xl mt-4 text-center md:text-start">it's just a <span className='text-red-500 md:text-5xl'>404</span> Error!</p>
            <p className="text-lg lg:text-2xl mt-2 lg:mt-7 text-center">
                Oops! The page you are looking for does not exist.
            </p>
            <div className='flex justify-center md:justify-start mt-6'>
            <button
                onClick={handleBackHome}
                className="mt-6 px-4 py-2 btn bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
                Go Back Home
            </button>
            </div>
            </div>
        </div>
    );
};

export default Error;
