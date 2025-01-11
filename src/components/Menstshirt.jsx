import React from 'react';
import { useCart } from './CartContext'; // Import the CartContext

const Menstshirt = () => {
  const tshirts = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 19.99,
      image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/30232946/2024/8/12/91f3bd24-5b22-45a9-bff7-ff8a7bbf25ee1723456249253-Classics-Logo-Mens-T-Shirt-5981723456248819-1.jpg",
      color: "White",
      size: ["S", "M", "L", "XL"],
      description: "A simple, clean, and classic white t-shirt made of 100% cotton."
    },
    {
      id: 2,
      name: "Black Crew Neck T-Shirt",
      price: 24.99,
      image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7487209/2022/4/19/4303a3a1-0930-4f66-98a3-85406f09ac011650355012181FreeAuthorityCrewNeckBlackMenTshirt1.jpg",
      color: "Black",
      size: ["S", "M", "L", "XL"],
      description: "A versatile black crew neck t-shirt that's perfect for casual wear."
    },
    {
      id: 3,
      name: "Graphic T-Shirt",
      price: 29.99,
      image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23622024/2024/3/28/a3059c83-e102-4d11-a142-081704a28a5f1711623880504-RARE-RABBIT-Printed-Slim-Fit-Cotton-T-shirt-5821711623880405-11.jpg",
      color: "Blue",
      size: ["S", "M", "L"],
      description: "A stylish graphic t-shirt featuring a bold and modern design."
    },
    {
      id: 4,
      name: "Striped T-Shirt",
      price: 22.99,
      image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12956244/2021/4/20/486a3efe-6fbe-4297-8256-a012303970621618915179262-Kook-N-Keech-Men-Tshirts-971618915178743-3.jpg",
      color: "Red",
      size: ["S", "M", "L", "XL"],
      description: "A trendy striped t-shirt, perfect for summer outings."
    },
    {
      id: 5,
      name: "V-Neck Cotton T-Shirt",
      price: 21.99,
      image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/29883084/2024/6/21/fa8756d3-928d-459b-98a3-4833197ffed31718970907862-DAMENSCH-Breeze-Ultralight-V-Neck-Solid-T-shirt-726171897090-11.jpg",
      color: "Gray",
      size: ["M", "L", "XL"],
      description: "Soft, lightweight v-neck t-shirt made from premium cotton fabric."
    },
    {
      id: 6,
      name: "Long Sleeve T-Shirt",
      price: 26.99,
      image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21807308/2024/5/2/648dc303-3bfd-4d1b-96b8-0c7e0c9ca3cc1714629602516-The-Souled-Store-Men-Colourblocked-Oversize-Fit-Cotton-Overs-6.jpg",
      color: "Navy Blue",
      size: ["M", "L", "XL"],
      description: "A comfortable long-sleeve t-shirt for cooler days."
    },
    {
      id: 7,
      name: "Pocket T-Shirt",
      price: 18.99,
      image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/30256241/2024/7/17/8fb826b0-7b6b-4eac-b0ea-241141c1c27e1721212884353JackJonesMenPrintedPocketsT-shirt1.jpg",
      color: "Olive Green",
      size: ["S", "M", "L"],
      description: "A stylish t-shirt with a convenient front pocket."
    },
    {
      id: 8,
      name: "Henley T-Shirt",
      price: 27.99,
      image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/28693598/2024/4/5/e63d2b9f-38d3-4b34-8b3d-f3524b34a6b81712260534746ManiacMenStripedHenleyNeckPocketsT-shirt1.jpg",
      color: "Burgundy",
      size: ["S", "M", "L", "XL"],
      description: "A casual yet refined Henley t-shirt with button details."
    },
    {
      id: 9,
      name: "Raglan T-Shirt",
      price: 23.99,
      image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/27193510/2024/1/26/9fe1378c-7383-4ca3-b819-68dccc296f2d1706217070560CrazymonkUnisexPrintedT-shirt1.jpg",
      color: "Black & White",
      size: ["S", "M", "L"],
      description: "A sporty raglan t-shirt with contrasting sleeves."
    },
    {
      id: 10,
      name: "Muscle Fit T-Shirt",
      price: 28.99,
      image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/27/qaUb7thG_16bb5e4db9484aabbb74c92fa176dcb1.jpg",
      color: "Charcoal",
      size: ["M", "L", "XL"],
      description: "A muscle fit t-shirt designed to showcase athletic physique."
    },
  ];
  

  const ProductCard = ({ product }) => {
    const { addToCart } = useCart(); // Get the addToCart function from context

    return (
      <div className="w-[300px] bg-gray-900 shadow-lg rounded-xl p-4 mb-4 mx-2 transform hover:scale-110 transition-transform duration-100">
        <div className="relative min-h-28 w-full mb-3">
          <img src={product.image} alt={product.model} className="w-full h-[300px] object-fill rounded-2xl" />
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
        <h1 className='text-6xl font-semibold'>Men's T-Shirts</h1>
        <div className="min-w-12 h-50vh flex justify-center items-center inset-0 bg-black p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {tshirts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <ProductList />;
};

export default Menstshirt;