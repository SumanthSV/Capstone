import React, { useState, useEffect } from 'react';

const ManageSellers = () => {
    const [sellers, setSellers] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false);  // Track whether we are editing or adding a new seller
    const [currentSeller, setCurrentSeller] = useState({ id: null, name: '', email: '', product: '' });

    // Fetch sellers from localStorage when component mounts
    useEffect(() => {
        const savedSellers = JSON.parse(localStorage.getItem('sellers'));
        if (savedSellers) {
            setSellers(savedSellers);
        }
    }, []);

    // Save sellers to localStorage whenever there's a change
    useEffect(() => {
        localStorage.setItem('sellers', JSON.stringify(sellers));
    }, [sellers]);

    // Toggle modal visibility
    const toggleModal = () => setShowModal(!showModal);

    // Handle form input change
    const handleChange = (e) => {
        setCurrentSeller({
            ...currentSeller,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission for adding or editing sellers
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editMode) {
            // Edit existing seller
            const updatedSellers = sellers.map(seller =>
                seller.id === currentSeller.id ? currentSeller : seller
            );
            setSellers(updatedSellers);
        } else {
            // Add new seller
            const newSeller = { ...currentSeller, id: sellers.length + 1 };
            setSellers([...sellers, newSeller]);
        }

        setCurrentSeller({ id: null, name: '', email: '', product: '' });
        setEditMode(false);
        toggleModal();  // Close the modal
    };

    // Handle delete seller
    const deleteSeller = (id) => {
        const updatedSellers = sellers.filter(seller => seller.id !== id);
        setSellers(updatedSellers);
    };

    // Handle edit seller
    const editSeller = (seller) => {
        setCurrentSeller(seller);
        setEditMode(true);
        toggleModal();
    };

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Manage Sellers</h2>

            {/* Add Seller Button */}
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-4"
                onClick={() => {
                    setCurrentSeller({ id: null, name: '', email: '', product: '' });
                    setEditMode(false);
                    toggleModal();
                }}
            >
                Add Seller
            </button>

            {/* Sellers List */}
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="py-2 px-4 text-left">Name</th>
                        <th className="py-2 px-4 text-left">Email</th>
                        <th className="py-2 px-4 text-left">Product</th>
                        <th className="py-2 px-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.map(seller => (
                        <tr key={seller.id} className="border-t">
                            <td className="py-2 px-4">{seller.name}</td>
                            <td className="py-2 px-4">{seller.email}</td>
                            <td className="py-2 px-4">{seller.product}</td>
                            <td className="py-2 px-4">
                                {/* Edit Button */}
                                <button
                                    className="bg-yellow-500 text-white py-1 px-2 rounded-md hover:bg-yellow-600 mr-2"
                                    onClick={() => editSeller(seller)}
                                >
                                    Edit
                                </button>
                                {/* Delete Button */}
                                <button
                                    className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
                                    onClick={() => deleteSeller(seller.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add/Edit Seller Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg w-1/3 p-8">
                        <h3 className="text-xl font-bold mb-4">
                            {editMode ? 'Edit Seller' : 'Add New Seller'}
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={currentSeller.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={currentSeller.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Product</label>
                                <input
                                    type="text"
                                    name="product"
                                    value={currentSeller.product}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 mr-2"
                                    onClick={toggleModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                                >
                                    {editMode ? 'Update' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageSellers;