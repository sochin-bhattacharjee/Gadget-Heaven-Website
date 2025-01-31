import React from 'react';
import { ComposedChart, Area, Bar, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatisticsBanner from './StatisticsBanner';

const productData =[
    {
        "product_id": 1,
        "product_title": "Apple iPhone 15 Pro",
        "product_image": "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",
        "category": "Smartphones",
        "price": 1299.99,
        "description": "Latest Apple iPhone with A17 Bionic chip and advanced camera features.",
        "specification": [
            "6.7-inch Super Retina XDR display",
            "A17 Bionic chip",
            "Triple-lens camera system",
            "5G connectivity"
        ],
        "availability": true,
        "rating": 4.9,
        "color": "Graphite"
    },
    {
        "product_id": 2,
        "product_title": "Samsung Galaxy S23 Ultra",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPh3zIQ1lKU5alNYLwYEMn80rvjqX97Cm-w&s",
        "category": "Smartphones",
        "price": 1199.99,
        "description": "High-performance smartphone with 200MP camera and S Pen integration.",
        "specification": [
            "6.8-inch Dynamic AMOLED 2X display",
            "Snapdragon 8 Gen 2",
            "200MP primary camera",
            "S Pen included"
        ],
        "availability": true,
        "rating": 4.8,
        "battery_life": "24 hours"
    },
    {
        "product_id": 3,
        "product_title": "Sony WH-1000XM5 Wireless Headphones",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJYtP671plGA8NF8j_o5J5ZNk65nWGfJsrg&s",
        "category": "Electronics",
        "price": 349.99,
        "description": "Industry-leading noise-canceling headphones with superior sound quality.",
        "specification": [
            "Noise-canceling",
            "30-hour battery life",
            "Bluetooth 5.2",
            "Touch control"
        ],
        "availability": true,
        "rating": 4.7,
        "weight": "250 grams"
    },
    {
        "product_id": 4,
        "product_title": "Dell XPS 13 Laptop",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0zNufBvC7jrwj0pDs0ZdG421adXS-BcRHg&s",
        "category": "Laptops",
        "price": 1099.99,
        "description": "Ultra-slim, high-performance laptop with 13.4-inch InfinityEdge display.",
        "specification": [
            "Intel i7 12th Gen",
            "16GB RAM",
            "512GB SSD",
            "Touchscreen"
        ],
        "availability": true,
        "rating": 4.6,
        "operating_system": "Windows 11"
    },
    {
        "product_id": 5,
        "product_title": "Canon EOS R6 Mirrorless Camera",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXOTvLebv-J5taNr0A1fVvFkcYuUzPmbvYw&s",
        "category": "Cameras",
        "price": 2499.99,
        "description": "Full-frame mirrorless camera with 4K video and advanced autofocus.",
        "specification": [
            "20.1 MP full-frame sensor",
            "4K video recording",
            "Dual Pixel CMOS AF",
            "Wi-Fi and Bluetooth"
        ],
        "availability": true,
        "rating": 4.8,
        "sensor_type": "CMOS"
    },
    {
        "product_id": 6,
        "product_title": "Logitech MX Master 3S Mouse",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX35ZYx4wI3I2HSTKgmA-FChxl71WyJ7IoQQ&s",
        "category": "Accessories",
        "price": 99.99,
        "description": "Ergonomic wireless mouse with advanced scroll wheel and customizable buttons.",
        "specification": [
            "4000 DPI sensor",
            "USB-C charging",
            "Multi-device support",
            "Flow cross-computer control"
        ],
        "availability": true,
        "rating": 4.9,
        "color": "Graphite"
    },
    {
        "product_id": 7,
        "product_title": "Samsung Galaxy Watch 6",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmChL_ZHryS6OQ7iq5zbs-lai0d2BAJql7mQ&s",
        "category": "Wearables",
        "price": 299.99,
        "description": "Smartwatch with health monitoring and extended battery life.",
        "specification": [
            "1.5-inch Super AMOLED display",
            "Heart rate monitor",
            "GPS",
            "Water-resistant"
        ],
        "availability": true,
        "rating": 4.6,
        "battery_life": "48 hours"
    },
    {
        "product_id": 8,
        "product_title": "Amazon Echo Dot (5th Gen)",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT211jltrULSqQOl5VOFTOfzP_Vk1RiNYlcWA&s",
        "category": "Smart Home",
        "price": 49.99,
        "description": "Compact smart speaker with Alexa and improved sound quality.",
        "specification": [
            "Voice control",
            "Bluetooth and Wi-Fi",
            "Built-in Alexa",
            "Temperature sensor"
        ],
        "availability": true,
        "rating": 4.5,
        "connectivity": "Wi-Fi"
    },
    {
        "product_id": 9,
        "product_title": "Asus ROG Strix G15 Gaming Laptop",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oXP17mMqWBMhOjh1rH8aAR9d-dLcM-ICcQ&s",
        "category": "Laptops",
        "price": 1599.99,
        "description": "Powerful gaming laptop with RTX 3070 GPU and RGB keyboard.",
        "specification": [
            "AMD Ryzen 9",
            "32GB RAM",
            "1TB SSD",
            "15.6-inch 240Hz display"
        ],
        "availability": false,
        "rating": 4.7,
        "graphics_card": "NVIDIA GeForce RTX 3070"
    },
    {
        "product_id": 10,
        "product_title": "GoPro HERO11 Black",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzHI21lEk0Z2M5eQTcdwzEOW5gFvHQljYeQ&s",
        "category": "Cameras",
        "price": 499.99,
        "description": "Versatile action camera with 5.3K video and enhanced stabilization.",
        "specification": [
            "5.3K video at 60fps",
            "HyperSmooth 5.0",
            "Waterproof up to 33ft",
            "Dual screens"
        ],
        "availability": true,
        "rating": 4.8,
        "waterproof": "Yes"
    },
    {
        "product_id": 11,
        "product_title": "Apple MacBook Air M2",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpulglPU_Io_PlyrYbhPpHge8Zi_GHAFVKg&s",
        "category": "Laptops",
        "price": 1299.99,
        "description": "Lightweight laptop with M2 chip and exceptional battery life.",
        "specification": [
            "13.6-inch Liquid Retina display",
            "Apple M2 chip",
            "8GB RAM",
            "256GB SSD"
        ],
        "availability": true,
        "rating": 4.9,
        "weight": "2.7 lbs"
    },
    {
        "product_id": 12,
        "product_title": "Fitbit Charge 6",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUMN0oXqCh37Q7HcBzfbRcSQn8EZKi-h6Jw&s",
        "category": "Wearables",
        "price": 129.99,
        "description": "Advanced fitness tracker with heart rate monitoring and GPS.",
        "specification": [
            "Heart rate monitor",
            "Built-in GPS",
            "7-day battery life",
            "Water-resistant"
        ],
        "availability": true,
        "rating": 4.6,
        "color": "Black"
    },
    {
        "product_id": 13,
        "product_title": "Sony PlayStation 5",
        "product_image": "https://sm.ign.com/t/ign_in/news/s/sony-offic/sony-officially-reveals-ps5-pro-during-playstation-5-technic_qw2k.1200.jpg",
        "category": "Gaming Consoles",
        "price": 499.99,
        "description": "Next-gen console with ultra-fast SSD and immersive gaming experience.",
        "specification": [
            "Custom AMD GPU",
            "Ultra HD Blu-ray",
            "Ray tracing",
            "Tempest 3D AudioTech"
        ],
        "availability": true,
        "rating": 4.9,
        "storage_capacity": "825GB"
    },
    {
        "product_id": 14,
        "product_title": "Anker PowerCore 10000 Portable Charger",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRus25UOoPuo7AoPzxPtYZ_v3LFhxAKsAh5A&s",
        "category": "Accessories",
        "price": 29.99,
        "description": "Compact portable charger with fast charging capabilities.",
        "specification": [
            "10000mAh capacity",
            "High-speed charging",
            "USB-C input/output",
            "Lightweight"
        ],
        "availability": true,
        "rating": 4.8,
        "weight": "180 grams"
    },
    {
        "product_id": 15,
        "product_title": "LG OLED C2 Series Smart TV",
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbMWrlBibU-tSLU53QdwTGu0ybRYZl4keAQ&s",
        "category": "Televisions",
        "price": 1499.99,
        "description": "4K OLED TV with AI-powered picture and sound technology.",
        "specification": [
            "55-inch 4K OLED display",
            "120Hz refresh rate",
            "Dolby Vision IQ",
            "WebOS smart platform"
        ],
        "availability": false,
        "rating": 4.7,
        "screen_size": "55 inches"
    }
]

const StatisticsPage = () => {
    return (
        <div>
            <StatisticsBanner />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Price vs. Product Title</h2>
                <div className="overflow-x-auto">
                    <ResponsiveContainer width="100%" height={400}>
                        <ComposedChart
                            data={productData}
                            margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="product_title" interval={0} angle={-45} textAnchor="end" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="price" fill="#D6BCFA" stroke="#8884d8" />
                            <Bar dataKey="price" barSize={20} fill="#6B46C1" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;