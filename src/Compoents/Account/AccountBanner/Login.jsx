import React from 'react';

const Login = () => {
    return (
        <div className="bg-white text-gray-700 rounded-lg p-8 w-full sm:w-3/5 md:w-1/2 lg:w-1/3 mx-auto mt-12 mb-28 shadow-xl">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Login to Your Account</h2>
            <p className="text-center text-sm mb-8 text-gray-500">
                Please enter your credentials to access your account.
            </p>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
                >
                    Login
                </button>
            </form>
            <div className="text-center mt-6 text-gray-500">
                <p>
                    Don't have an account?{" "}
                    <a href="" className="text-purple-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
