import React from 'react';

const Watches = () => {
  const watches = [
    { id: 1, brand: "Rolex", model: "Submariner", price: 8500, image: "https://example.com/images/rolex-submariner.jpg", ratings: 4.9, delivery_time: 7 },
    { id: 2, brand: "Omega", model: "Speedmaster", price: 5200, image: "https://example.com/images/omega-speedmaster.jpg", ratings: 4.8, delivery_time: 6 },
    { id: 3, brand: "Tag Heuer", model: "Carrera", price: 3500, image: "https://example.com/images/tag-heuer-carrera.jpg", ratings: 4.7, delivery_time: 5 },
    { id: 4, brand: "Casio", model: "G-Shock", price: 120, image: "https://example.com/images/casio-g-shock.jpg", ratings: 4.6, delivery_time: 4 },
    { id: 5, brand: "Seiko", model: "5 Sports", price: 250, image: "https://example.com/images/seiko-5-sports.jpg", ratings: 4.5, delivery_time: 3 },
    { id: 6, brand: "Fossil", model: "Hybrid HR", price: 199, image: "https://example.com/images/fossil-hybrid-hr.jpg", ratings: 4.4, delivery_time: 5 },
    { id: 7, brand: "Citizen", model: "Eco-Drive", price: 350, image: "https://example.com/images/citizen-eco-drive.jpg", ratings: 4.6, delivery_time: 6 },
    { id: 8, brand: "Michael Kors", model: "Gen 5", price: 250, image: "https://example.com/images/michael-kors-gen5.jpg", ratings: 4.5, delivery_time: 7 },
    { id: 9, brand: "Timex", model: "Expedition", price: 55, image: "https://example.com/images/timex-expedition.jpg", ratings: 4.3, delivery_time: 4 },
    { id: 10, brand: "Tissot", model: "PRX", price: 650, image: "https://example.com/images/tissot-prx.jpg", ratings: 4.7, delivery_time: 5 },
    { id: 11, brand: "Skagen", model: "Frederik", price: 199, image: "https://example.com/images/skagen-frederik.jpg", ratings: 4.4, delivery_time: 4 },
    { id: 12, brand: "Hamilton", model: "Khaki Field", price: 495, image: "https://example.com/images/hamilton-khaki-field.jpg", ratings: 4.8, delivery_time: 6 },
  ];

  const ProductCard = ({ product }) => {
    return (
      <div className=" w-[300px] bg-gray-900 shadow-lg rounded-xl p-4 mb-4 mx-2 transform hover:scale-110 transition-transform duration-100">
        <div className="relative min-h-28 w-full mb-3">
          <img src={product.image} alt={product.model} className="w-30 object-fill rounded-2xl" />
        </div>
        <div className='text-left'>
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
        <h1 className='text-3xl font-semibold'>Watches</h1>
        <div className="min-w-12 h-50vh flex justify-center items-center inset-0 bg-black p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {watches.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <ProductList />;
};

export default Watches;
