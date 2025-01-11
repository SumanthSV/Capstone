import React from 'react';

const Dashboard = () => {
    return (
        <div className="bg-gray-100 min-h-screen">

            <header className="bg-blue-600 text-white p-5 h-auto w-60% text-center">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            </header>

                <div className="container mx-auto mt-8 rounded-lg flex items-center justify-around mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-10">

                    <a href="./managesellers">
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h2 className="text-xl font-semibold text-gray-700">Manage Sellers</h2>
                            <p className="text-gray-500 mt-2">View, add, or edit seller information.</p>
                        </div>
                    </a>

                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-700">Manage Categories</h2>
                        <p className="text-gray-500 mt-2">Create and organize product categories.</p>
                    </div>

                    {/* Manage Products */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-700">Manage Products</h2>
                        <p className="text-gray-500 mt-2">Add new products or modify existing ones.</p>
                    </div>

                    {/* Manage Customers */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-700">Manage Customers</h2>
                        <p className="text-gray-500 mt-2">Handle customer data and communications.</p>
                    </div>

                    {/* View Orders */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-700">View Orders</h2>
                        <p className="text-gray-500 mt-2">Track and manage customer orders.</p>
                    </div>

                    {/* Sales Summary */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-700">Sales Summary</h2>
                        <p className="text-gray-500 mt-2">Get insights into overall sales performance.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;