import { useEffect, useState } from "react";
import AllProduct from "./AllProduct/AllProduct";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState("All Product");

    useEffect(() => {
        fetch(`/product.json`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const category = selectedProduct === "All Product" ? products : products.filter(product => product.category === selectedProduct);

    const buttonClass = (categoryName) => 
        `w-full rounded-full p-1 text-xs sm:text-sm sm:py-2 ${
            selectedProduct === categoryName ? "bg-purple-600 text-white" : "bg-white text-black"
        }`;

    return (
        <div className="mb-10">
            <div className="text-center text-xl md:text-2xl lg:text-5xl 2xl:text-6xl font-bold">
                <h1>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="grid 2xl:grid-cols-5 lg:grid-cols-7 md:grid-cols-5 grid-cols-3 gap-2 2xl:gap-4 w-11/12 xl:w-9/12 2xl:w-10/12 mx-auto mt-5 sm:mt-16">
                <div className="col-span-1 h-[350px] sm:h-[490px] 2xl:h-[530px] bg-slate-100 flex flex-col gap-2 2xl:gap-4 py-1 2xl:py-5 sm:p-2 2xl:p-5 rounded-xl sticky top-3 mt-3">
                    <button onClick={() => setSelectedProduct("All Product")} className={buttonClass("All Product")}>
                        All Product
                    </button>
                    <button onClick={() => setSelectedProduct("Smartphones")} className={buttonClass("Smartphones")}>
                        Smartphones
                    </button>
                    <button onClick={() => setSelectedProduct("Electronics")} className={buttonClass("Electronics")}>
                        Electronics
                    </button>
                    <button onClick={() => setSelectedProduct("Laptops")} className={buttonClass("Laptops")}>
                        Laptops
                    </button>
                    <button onClick={() => setSelectedProduct("Cameras")} className={buttonClass("Cameras")}>
                        Cameras
                    </button>
                    <button onClick={() => setSelectedProduct("Accessories")} className={buttonClass("Accessories")}>
                        Accessories
                    </button>
                    <button onClick={() => setSelectedProduct("Wearables")} className={buttonClass("Wearables")}>
                        Wearables
                    </button>
                    <button onClick={() => setSelectedProduct("Smart Home")} className={buttonClass("Smart Home")}>
                        Smart Home
                    </button>
                    <button onClick={() => setSelectedProduct("Gaming Consoles")} className={buttonClass("Gaming Consoles")}>
                        Gaming Consoles
                    </button>
                    <button onClick={() => setSelectedProduct("Televisions")} className={buttonClass("Televisions")}>
                        Televisions
                    </button>
                </div>
                <div className="2xl:col-span-4 lg:col-span-6 md:col-span-4 col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {
                        category.map(product => <AllProduct key={product.product_id} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
