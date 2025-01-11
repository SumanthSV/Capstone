  import React from 'react';
  import { useCart } from './CartContext';

  const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    // Function to calculate total price
    const calculateTotal = () => {
      return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const totalPrice = calculateTotal();

    const handleRemove = (id) => {
      removeFromCart(id);
    };

    const handleQuantityChange = (id, quantity) => {
      updateQuantity(id, quantity);
    };

    return (
      <div className="bg-black py-8 antialiased  md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl text-center">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-lg text-gray-500 dark:text-gray-300 text-center mt-6">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col sm:flex-row gap-8 mt-6 sm:mt-8 ">
              <div className="flex-1 transform hover:scale-105 transition-transform  duration-300">
                {cartItems.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 p-4 md:p-6 mb-4 space-y-4"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="shrink-0 md:order-1">
                        <img
                          className="h-20 w-20 dark:hidden object-cover rounded-lg"
                          src={item.image}
                          alt={item.model}
                        />
                        <img
                          className="hidden h-20 w-20 dark:block object-cover rounded-lg"
                          src={item.image}
                          alt={item.model}
                        />
                      </a>

                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a
                          href="#"
                          className="text-base font-medium text-gray-900 dark:text-white hover:underline"
                        >
                          {`${item.brand} ${item.model}`}
                        </a>

                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                              />
                            </svg>
                            Add to Favorites
                          </button>

                          <button
                            type="button"
                            onClick={() => handleRemove(item.id)} // Remove item on click
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:order-3 md:justify-end  ">
                        <div className="flex items-center transform hover:scale-105 transition-transform  duration-300">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)} // Decrease quantity
                            disabled={item.quantity <= 1}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)} // Increase quantity
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Order Summary Section */}
              <div className=" flex-shrink-0 w-full md:w-1/3  transform hover:scale-105 transition-transform  duration-300">
                <div className=" space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">Order Summary</p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">${totalPrice.toFixed(2)}</dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">${(totalPrice * 0.3).toFixed(2)}</dd>
                      </dl>
                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-white">${(totalPrice * 1.3 + 99).toFixed(2)}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default Cart;
