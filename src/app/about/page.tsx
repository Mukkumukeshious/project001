import React from 'react'

const About = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">About Our E-Commerce Store</h1>
            <p className="mb-4 text-gray-700">
                Welcome to our leading e-commerce platform specializing in the latest laptops and mobile phones. We are committed to providing top-quality electronics from trusted brands at competitive prices.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
                <li>Wide selection of laptops and mobiles</li>
                <li>Fast and secure shipping</li>
                <li>Expert customer support</li>
                <li>Easy returns and warranty services</li>
            </ul>
            <p className="text-gray-700">
                Whether you are a student, professional, or tech enthusiast, find the perfect device to suit your needs. Thank you for choosing us for your next purchase!
            </p>
        </div>
    )
}

export default About
