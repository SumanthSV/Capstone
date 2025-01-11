import React from 'react';

const Furniture = () => {
  const furnitureItems = [
    { id: 1, brand: "Study Table",model:"",price:199,image:"//www.ikea.com/in/en/images/products/utespelare-gaming-desk-black__0997777_pe822755_s5.jpg?f=xxs", ratings: 4.5, delivery_time: 7 },
    { id: 4, brand: "Wayfair", model: "Dining Table Set", price: 499, image: "https://www.ikea.com/in/en/images/products/skogsta-nordviken-table-and-6-chairs-acacia-black__1097281_pe864868_s5.jpg?f=xxs", ratings: 4.6, delivery_time: 12 },
    { id: 5, brand: "La-Z-Boy", model: "Recliner Chair", price: 399, image: "https://www.ikea.com/in/en/images/products/muren-recliner-remmarn-dark-grey__0908537_pe783270_s5.jpg?f=xxs", ratings: 4.9, delivery_time: 15 },
    { id: 6, brand: "Serta", model: "Pillow", price: 89, image: "https://www.ikea.com/in/en/images/products/rumsmalva-ergonomic-pillow-side-back-sleeper__0778781_pe759130_s5.jpg?f=xxs", ratings: 4.8, delivery_time: 10 },
    { id: 7, brand: "Haverty's", model: "Coffee Table", price: 3250, image: "https://www.ikea.com/in/en/images/products/vittsjoe-coffee-table-black-brown-glass__0836655_pe601386_s5.jpg?f=xxs", ratings: 4.5, delivery_time: 8 },
    { id: 8, brand: "West Elm", model: "Mid-Century Sofa", price: 1399, image: "https://www.ikea.com/in/en/images/products/friheten-three-seat-sofa-bed-skiftebo-dark-grey__0829149_pe644867_s5.jpg?f=xxs", ratings: 4.7, delivery_time: 14 },
    { id: 9, brand: "Ashley", model: "Accent Chair", price: 299, image: "https://www.ikea.com/in/en/images/products/poaeng-rocking-chair-white-stained-oak-veneer-knisa-light-beige__0682937_pe720616_s5.jpg?f=xxsh", ratings: 4.6, delivery_time: 5 },
    { id: 10, brand: "Pottery Barn", model: "Farmhouse Dining Table", price: 9879, image: "https://www.ikea.com/in/en/images/products/malm-bed-frame-high-w-4-storage-boxes-black-brown-luroey__1101552_pe866728_s5.jpg?f=xxs", ratings: 4.7, delivery_time: 14 },
    { id: 2, brand: "Ashley", model: "Sofa Sectional", price: 99, image: "https://www.ikea.com/in/en/images/products/soederhamn-corner-section-viarp-beige-brown__0802788_pe768596_s5.jpg?f=xxs", ratings: 4.8, delivery_time: 10 },
    { id: 3, brand: "Sauder", model: "Computer Desk", price: 1200, image:"https://www.ikea.com/in/en/images/products/skogsta-dining-table-acacia-black__1342684_pe949087_s5.jpg?f=xxs", ratings: 4.8, delivery_time: 12 },
    { id: 11, brand: "CB2", model: "Sleek Console Table", price: 1499, image: "https://www.ikea.com/in/en/images/products/kallax-shelving-unit-with-4-inserts-white__1051352_pe845167_s5.jpg?f=xxs", ratings: 4.4, delivery_time: 6 },
    { id: 12, brand: "Crate & Barrel", model: "Lounge Chair", price: 659, image: "https://www.ikea.com/in/en/images/products/vessla-storage-crate-with-castors-light-pink__0876850_pe649299_s5.jpg?f=xxs", ratings: 4.6, delivery_time: 7 },
  ];

  const ProductCard = ({ product }) => {
    return (
      <div className="w-full  bg-gray-900 shadow-lg rounded-xl p-4 mb-4 transform hover:scale-110 transition-transform duration-100">
        <div className="relative w-full h-[250px] mb-3">
          <img
            src={product.image}
            alt={product.model}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="text-left">
          <h2 className="text-lg text-gray-200">{`${product.brand} ${product.model}`}</h2>
          <p className="text-gray-300">Price: ${product.price}</p>
          <p className="text-gray-300">Rating: {product.ratings}</p>
          <p className="text-gray-300">Delivery Time: {product.delivery_time} days</p>
          <div>
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
        </div>
      </div>
    );
  };
  

  const ProductList = () => {
    return (
      <div className='text-center text-white font-4xl'>
        <h1 className='text-6xl font-semibold'>Furniture</h1>
        <div className="min-w-12 h-50vh flex justify-center items-center inset-0 bg-black p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {furnitureItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <ProductList/>;
};

export default Furniture;