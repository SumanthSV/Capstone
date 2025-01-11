import React, { useState } from 'react';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Basic Tee', color: 'Black', size: 'Large', price: 32.0, quantity: 1, img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Basic Tee', color: 'Sienna', size: 'Large', price: 32.0, quantity: 1, img: 'https://via.placeholder.com/150' },
  ]);

  const handleQuantityChange = (id, value) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + value) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const shipping = 5.0; // Fixed shipping rate for simplicity
    const taxes = (subtotal * 0.086).toFixed(2); // Assuming 8.6% tax
    const total = (subtotal + shipping + parseFloat(taxes)).toFixed(2);
    return { subtotal, shipping, taxes, total };
  };

  const { subtotal, shipping, taxes, total } = calculateTotal();

  return (
    <div className="dark">
      <div className="bg-black min-h-screen p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Shipping Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 dark:text-gray-100">Contact Information</h2>
            <form>
              <label className="block mb-2">
                <span className="dark:text-gray-300">Email address</span>
                <input
                  type="email"
                  className="mt-1 w-full p-2 border dark:border-gray-700 rounded bg-gray-700 dark:text-white"
                  placeholder="Email address"
                />
              </label>
              <h2 className="text-xl font-bold mt-6 mb-4 dark:text-gray-100">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="dark:text-gray-300">First name</span>
                  <input
                    type="text"
                    className="mt-1 w-full p-2 border dark:border-gray-700 rounded bg-gray-700 dark:text-white"
                    placeholder="First name"
                  />
                </label>
                <label className="block">
                  <span className="dark:text-gray-300">Last name</span>
                  <input
                    type="text"
                    className="mt-1 w-full p-2 border dark:border-gray-700 rounded bg-gray-700 dark:text-white"
                    placeholder="Last name"
                  />
                </label>
              </div>
              <label className="block mt-4">
                <span className="dark:text-gray-300">Company (optional)</span>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border dark:border-gray-700 rounded bg-gray-700 dark:text-white"
                  placeholder="Company"
                />
              </label>
              <label className="block mt-4">
                <span className="dark:text-gray-300">Address</span>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border dark:border-gray-700 rounded bg-gray-700 dark:text-white"
                  placeholder="Address"
                />
              </label>
              <label className="block mt-4">
                <span className="dark:text-gray-300">Apartment, suite, etc. (optional)</span>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border dark:border-gray-700 rounded bg-gray-700 dark:text-white"
                  placeholder="Apartment, suite, etc."
                />
              </label>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <label className="block">
                  <span className="dark:text-gray-300">City</span>
                  <input
                    type="text"
                    className="mt-1 w-full p-2 border dark:border-gray-700 rounded bg-gray-700 dark:text-white"
                    placeholder="City"
                  />
                </label>
                <label className="block">
                  <span className="dark:text-gray-300">Country</span>
                  <select className="mt-1 w-full p-2 border dark:border-gray-700 rounded bg-gray-700 dark:text-white">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </label>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <label className="block">
                  <span className="dark:text-gray-300">State / Province</span>
                  <input
                    type="text"
                    className="mt-1 w-full p-2 border dark:border-gray-700 rounded bg-gray-700 dark:text-white"
                    placeholder="State / Province"
                  />
                </label>
                <label className="block">
                  <span className="dark:text-gray-300">Postal Code</span>
                  <input
                    type="text"
                    className="mt-1 w-full p-2 border dark:border-gray-700 rounded bg-gray-700 dark:text-white"
                    placeholder="Postal code"
                  />
                </label>
              </div>
              <label className="block mt-4">
                <span className="dark:text-gray-300">Phone</span>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border dark:border-gray-700 rounded bg-gray-700 dark:text-white"
                  placeholder="Phone"
                />
              </label>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div>
              <h2 className="text-xl font-bold mb-4 dark:text-gray-100">Order Summary</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 rounded"
                    />
                    <div className="flex-1 ml-4 dark:text-gray-200">
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-gray-400">{item.color} - {item.size}</p>
                      <p className="text-gray-400">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        className="text-gray-400"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <input
                        className="w-10 text-center mx-2 border dark:border-gray-700 rounded bg-gray-700 dark:text-white"
                        type="number"
                        value={item.quantity}
                        readOnly
                      />
                      <button
                        className="text-gray-400"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="my-4 dark:border-gray-700" />
              <div className="flex justify-between dark:text-gray-200">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between dark:text-gray-200">
                <p>Shipping</p>
                <p>${shipping.toFixed(2)}</p>
              </div>
              <div className="flex justify-between dark:text-gray-200">
                <p>Taxes</p>
                <p>${taxes}</p>
              </div>
              <hr className="my-4 dark:border-gray-700" />
              <div className="flex justify-between font-bold text-lg dark:text-gray-100">
                <p>Total</p>
                <p>${total}</p>
              </div>
            </div>

            <button className="w-full mt-6 bg-blue-700 text-white p-3 rounded-md">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
