import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

const AccountBanner = () => {
    const [activePage, setActivePage] = useState('signup');

    return (
        <div>
            <div className="text-center bg-purple-600 text-white space-y-3 p-6">
                <h1 className="text-3xl font-bold">Account</h1>
                <p className="w-7/12 mx-auto">
                Account Login and SignUp enable secure access to personalized services, allowing users to register, log in, and manage their information easily.
                </p>
                <div className='flex justify-center gap-2'>
                    <button
                        className={`outline rounded-full px-10 py-3 ${activePage === 'signup' ? 'bg-white text-purple-600' : ''}`}
                        onClick={() => setActivePage('signup')}
                    >
                        Sign Up
                    </button>
                    <button
                        className={`rounded-full px-10 py-3 outline ${activePage === 'login' ? 'bg-white text-purple-600' : ''}`}
                        onClick={() => setActivePage('login')}
                    >
                        Login
                    </button>
                </div>
            </div>

            {activePage === 'login' && (
                <div className="bg-white">
                    <Login />
                </div>
            )}
            {activePage === 'signup' && (
                <div className="bg-white">
                    <SignUp />
                </div>
            )}
        </div>
    );
};

export default AccountBanner;
