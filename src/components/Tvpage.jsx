import React from 'react';

const TVpage = () => {
  const tvs = [
    { id: 1, brand: "Samsung", model: "QLED 8K", price: 3499, image: "https://example.com/images/samsung-qled-8k.jpg", ratings: 4.9, delivery_time: 7 },
    { id: 2, brand: "LG", model: "OLED C1", price: 2999, image: "https://example.com/images/lg-oled-c1.jpg", ratings: 4.8, delivery_time: 5 },
    { id: 3, brand: "Sony", model: "Bravia XR", price: 1999, image: "https://example.com/images/sony-bravia-xr.jpg", ratings: 4.7, delivery_time: 6 },
    { id: 4, brand: "TCL", model: "6-Series", price: 999, image: "https://example.com/images/tcl-6-series.jpg", ratings: 4.5, delivery_time: 4 },
    { id: 5, brand: "Vizio", model: "P-Series", price: 1299, image: "https://example.com/images/vizio-p-series.jpg", ratings: 4.6, delivery_time: 3 },
    { id: 6, brand: "Hisense", model: "ULED 4K", price: 799, image: "https://example.com/images/hisense-uled-4k.jpg", ratings: 4.4, delivery_time: 5 },
    { id: 7, brand: "Philips", model: "Ambilight", price: 1099, image: "https://example.com/images/philips-ambilight.jpg", ratings: 4.5, delivery_time: 6 },
    { id: 8, brand: "Panasonic", model: "JZ2000", price: 2499, image: "https://example.com/images/panasonic-jz2000.jpg", ratings: 4.7, delivery_time: 5 },
    { id: 9, brand: "Sharp", model: "Aquos 4K", price: 599, image: "https://example.com/images/sharp-aquos-4k.jpg", ratings: 4.3, delivery_time: 4 },
    { id: 10, brand: "Sanyo", model: "DP32D3", price: 249, image: "https://example.com/images/sanyo-dp32d3.jpg", ratings: 4.2, delivery_time: 3 },
    { id: 11, brand: "Insignia", model: "Fire TV Edition", price: 329, image: "https://example.com/images/insignia-fire-tv.jpg", ratings: 4.5, delivery_time: 4 },
    { id: 12, brand: "Westinghouse", model: "TV", price: 349, image: "https://example.com/images/westinghouse-tv.jpg", ratings: 4.4, delivery_time: 5 },
  ];

  const ProductCard = ({ product }) => {
    return (
      <div className="w-[300px] bg-gray-900 shadow-lg rounded-xl p-4 mb-4 mx-2 transform hover:scale-110 transition-transform duration-100">
        <div className="relative min-h-28 w-full mb-3">
          <img src={product.image} alt={product.model} className="w-30 object-fill rounded-2xl" />
        </div>
        <div className=" text-left">
        <h2 className="text-lg text-gray-200">{`${product.brand} ${product.model}`}</h2>
        <p className="text-gray-300">Price: ${product.price}</p>
        <p className="text-gray-300">Rating: {product.ratings}</p>
        <p className="text-gray-300">Delivery Time: {product.delivery_time} days</p>
        <button className="CartBtn" >
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
        <h1 className='text-6xl font-semibold'>TVs</h1>
        <div className="min-w-12 h-50vh flex justify-center items-center inset-0 bg-black p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {tvs.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <ProductList />;
};

export default TVpage;
