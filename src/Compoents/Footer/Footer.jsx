import React from "react";

const Footer = () => {
    return (
    <div className="bg-base-200 pt-7">
        <div className="text-center pb-6">
        <h1 className="text-2xl font-bold">Gadget Heaven</h1>
        <p className="w-11/12 md:w-full">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <hr className="border-t-2 w-11/12 mx-auto" />
        <footer className="px-10 py-6 pb-8 space-y-4 md:space-y-0 md:flex gap-44 md:justify-center md:text-center">
        <nav className=" flex flex-col">
            <h6 className="footer-title font-extrabold">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
        </nav>
        <nav className=" flex flex-col">
            <h6 className="footer-title font-extrabold">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
        </nav>
        <nav className=" flex flex-col">
            <h6 className="footer-title font-extrabold">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
        </footer>
    </div>
    );
};

export default Footer;
