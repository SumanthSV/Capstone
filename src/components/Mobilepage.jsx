import React, { useState } from 'react';
import { useCart } from './CartContext'; // Import the cart context

const Mobilepage = () => {
  const { addToCart } = useCart(); // Get addToCart function from context

  const mobiles = [
    {
      id: 1,
      brand: "Apple",
      model: "iPhone 14 Pro",
      price: 999,
      image: "https://m.media-amazon.com/images/I/61XO4bORHUL._AC_UY218_.jpg",
      ratings: 4.9,
      delivery_time: 2
    },
    {
      id: 2,
      brand: "Samsung",
      model: "Galaxy S23 Ultra",
      price: 1199,
      image: "https://m.media-amazon.com/images/I/71OXmy3NMCL._AC_UY218_.jpg",
      ratings: 4.8,
      delivery_time: 3
    },
    {
      id: 3,
      brand: "iQOO",
      model: "Z9s 5G",
      price: 699,
      image: "https://m.media-amazon.com/images/I/61nO5YRaAxL._AC_UY218_.jpg",
      ratings: 4.7,
      delivery_time: 2
    },
    {
      id: 4,
      brand: "OnePlus",
      model: "OnePlus 11",
      price: 649,
      image: "https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UY218_.jpg",
      ratings: 4.6,
      delivery_time: 4
    },
    {
      id: 5,
      brand: "Xiaomi",
      model: "Mi 13 Pro",
      price: 599,
      image: "https://m.media-amazon.com/images/I/71aiqeP-APL._AC_UY218_.jpg",
      ratings: 4.5,
      delivery_time: 3
    },
    {
      id: 6,
      brand: "Sony",
      model: "Xperia 5 V",
      price: 999,
      image: "https://m.media-amazon.com/images/I/51vJuXD50lL._AC_UY218_.jpg",
      ratings: 4.7,
      delivery_time: 5
    },
    {
      id: 7,
      brand: "Oppo",
      model: "F27 Pro",
      price: 799,
      image: "https://m.media-amazon.com/images/I/91AnvgyG1sL._AC_UY218_.jpg",
      ratings: 4.6,
      delivery_time: 4
    },
    {
      id: 8,
      brand: "Vivo",
      model: "Vivo X90 Pro",
      price: 699,
      image: "https://m.media-amazon.com/images/I/71Mc1FdLrWL._AC_UY218_.jpg",
      ratings: 4.5,
      delivery_time: 3
    },
    {
      id: 9,
      brand: "Realme",
      model: "GT 2 Pro",
      price: 499,
      image: "https://m.media-amazon.com/images/I/71fhaUR7VGL._AC_UY218_.jpg",
      ratings: 4.4,
      delivery_time: 5
    },
    // Additional mobile data can be added here
  ];

  const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
      console.log("Adding to cart:", product); // Debug log
      addToCart(product); // Add product to cart
    };

    return (
      <div className="w-[300px] bg-gray-900 shadow-lg rounded-xl p-4 mb-4 mx-2 transform hover:scale-110 transition-transform duration-100">
        <div className="relative min-h-28 w-full mb-3">
          <img
            src={product.image}
            alt={product.model}
            className="w-full h-[250px] object-fill rounded-2xl"
          />
        </div>
        <div className="text-left">
          <h2 className="text-lg text-gray-200">{`${product.brand} ${product.model}`}</h2>
          <p className="text-gray-300">Price: ${product.price}</p>
          <p className="text-gray-300">Rating: {product.ratings}</p>
          <p className="text-gray-300">Delivery Time: {product.delivery_time} days</p>
          <button className="CartBtn" onClick={handleAddToCart}>
            <span className="IconContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                fill="rgb(17, 17, 17)"
                className="cart"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
            </span>
            <p className="text">Add to Cart</p>
          </button>
        </div>
      </div>
    );
  };

  const ProductList = () => {
    return (
      <div className='text-center text-white font-4xl'>
        <h1 className='text-6xl font-semibold'>Mobile Phones</h1>
        <div className="min-w-12 h-50vh flex justify-center items-center inset-0 bg-black p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {mobiles.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <ProductList />;
};

export default Mobilepage;
