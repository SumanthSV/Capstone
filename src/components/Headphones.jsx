import React, { useState } from 'react';

const Headphones = () => {
  const headphones = [
    {
      id: 1,
      brand: "Sony",
      model: "WH-1000XM5",
      price: 399,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yYJ1mUWdicmWFw70ZA_z9Bt3pCe5rTzGTA&s",
      ratings: 4.8,
      delivery_time: 3,
    },
    {
      id: 2,
      brand: "Bose",
      model: "QuietComfort 45",
      price: 329,
      image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/QCUH-HEADPHONEARN/product_silo_images/AEM_PDP_GALLERY_WHITE-1.png/_jcr_content/renditions/cq5dam.web.320.320.png",
      ratings: 4.7,
      delivery_time: 4,
    },
    {
      id: 3,
      brand: "Apple",
      model: "AirPods Max",
      price: 549,
      image: "",
      ratings: 4.6,
      delivery_time: 5,
    },
    {
      id: 4,
      brand: "Sennheiser",
      model: "Momentum 4",
      price: 349,
      image: "",
      ratings: 4.7,
      delivery_time: 3,
    },
    {
      id: 5,
      brand: "Jabra",
      model: "Elite 85h",
      price: 249,
      image: "",
      ratings: 4.5,
      delivery_time: 4,
    },
    {
      id: 6,
      brand: "Anker",
      model: "Soundcore Life Q30",
      price: 99,
      image: "",
      ratings: 4.5,
      delivery_time: 5,
    },
    {
      id: 7,
      brand: "Beats",
      model: "Solo Pro",
      price: 299,
      image: "",
      ratings: 4.6,
      delivery_time: 3,
    },
    {
      id: 8,
      brand: "Beyerdynamic",
      model: "DT 770 Pro",
      price: 159,
      image: "",
      ratings: 4.7,
      delivery_time: 4,
    },
    {
      id: 9,
      brand: "Audio-Technica",
      model: "ATH-M50x",
      price: 149,
      image: "",
      ratings: 4.6,
      delivery_time: 5,
    },
    {
      id: 10,
      brand: "Samsung",
      model: "Galaxy Buds Pro",
      price: 199,
      image: "",
      ratings: 4.5,
      delivery_time: 3,
    },
    {
      id: 11,
      brand: "Google",
      model: "Pixel Buds A-Series",
      price: 99,
      image: "",
      ratings: 4.4,
      delivery_time: 4,
    },
    {
      id: 12,
      brand: "OnePlus",
      model: "Buds Z2",
      price: 99,
      image: "",
      ratings: 4.3,
      delivery_time: 5,
    },
  ];

  const ProductCard = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState("bg-blue-600");

    const handleColorChange = (color) => {
      setSelectedColor(color);
    };

    return (
      <div className="w-[300px]l bg-gray-900 shadow-lg rounded-xl p-4 mb-4 mx-2 transform hover:scale-95 transition-transform duration-100">
        <div className="relative min-h-28 w-52 mb-3">
          <img
            src={product.image}
            alt={product.model}
            className="w-30 h-30 rounded-2xl"
          />
        </div>
        <h2 className="text-lg text-gray-200">{`${product.brand} ${product.model}`}</h2>
        <p className="text-gray-300">Price: ${product.price}</p>
        <p className="text-gray-300">Rating: {product.ratings}</p>
        <p className="text-gray-300">Delivery Time: {product.delivery_time} days</p>
        <div className="flex flex-wrap py-2 text-sm text-gray-600">
        </div>
        <button className="CartBtn">
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
    );
  };
  const ProductList = () => {
    return (
      <div className='text-center text-white font-4xl'>
        <h1 className='text-6xl font-semibold'>Headphones</h1>
        <div className="min-w-12 h-50vh flex justify-center items-center inset-0 bg-black p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {headphones.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <ProductList/>;
};

export default Headphones;