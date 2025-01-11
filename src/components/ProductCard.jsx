import { useState } from "react";
import Watch from '../assets/Watch.png'
import Mobile from '../assets/Mobile.png'
import tv from '../assets/tv.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const homepagedata = [
  {
    products: [
      { id: 1, name: "Mobiles", image: "https://techrushi.com/wp-content/uploads/2024/01/Galaxy-S24-Ultra-Wallpapers-Download.webp","link": "products/1" },
      { id: 2, name: "Laptops", image: "https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714071.jpg?t=st=1727618808~exp=1727622408~hmac=f0b908c4dc605486d284a0fbd0306f5cce9fdd09451489f7ea5802152e0cbbba&w=740"   ,"link": "products/2" },
      { id: 3, name: "Headphones",image: "https://img.freepik.com/free-photo/black-headphones-black-textile_417767-625.jpg?t=st=1727617031~exp=1727620631~hmac=f3b43f41bad25009f66a3be0bcc4cb8046679ca28d0bbb5328f91266df3a3d87&w=996", "link": "products/3"},
      { id: 4, name: "Men's T-Shirts",image: "https://img.freepik.com/free-photo/photography-hoodies-fashion-apparel-background_1409-5177.jpg?t=st=1727618718~exp=1727622318~hmac=5638bce976d166ee8a9f95fb93d00ff4894f38393233edafcd21cb83c1184db9&w=996" ,"link": "products/4"},
      { id: 5, name: "Television", image: "https://img.freepik.com/free-photo/view-computer-monitor-display_23-2150757537.jpg?t=st=1727618628~exp=1727622228~hmac=33aa9870678ca56add9a7d13560f1e27f96f4919c1d69ba3be495ea2d6762ae7&w=996" , "link": "products/5"},
      { id: 6, name: "Sneakers", image: "https://img.freepik.com/free-photo/futuristic-football-game-shoe_23-2151153045.jpg?t=st=1727618128~exp=1727621728~hmac=6ca7b1e3a94c97ec04e9219181b4eb213cc934c4057a08b74d520a2ba7c5050f&w=740","link": "products/6" },
      { id: 7, name: "Furnitures", image: "https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118943.jpg?t=st=1727618203~exp=1727621803~hmac=5f5a1361791d8e9ea46bbb408a0e3e66a76bd5fc4f35d5a9a13d43172c2402e9&w=826","link": "products/7" },
      { id: 8, name: "Watches", image: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039378.jpg?t=st=1727618539~exp=1727622139~hmac=7681151f27738c2df5b2a566fe496a4a4c1b2131107713092c649341fc072e45&w=1060" ,"link": "products/8"},
    ],
  },
];

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("bg-blue-600");
  const [selectedSize, setSelectedSize] = useState("M");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className=" w-[300px] bg-gray-900 shadow-lg rounded-xl p-4 mb-4 mx-2 transform hover:scale-110 transition-transform duration-100">
      <div className="relative w-full h-[200px] mb-3"> 
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <h2 className="text-lg text-gray-200">{product.name}</h2>
      <div className="flex flex-wrap py-2 text-sm text-gray-600">
        <div className="flex-1 inline-flex items-center mb-2">
          <ul className="flex flex-row justify-center items-center space-x-2">
            {["bg-blue-600", "bg-yellow-400", "bg-red-500", "bg-green-500"].map((color) => (
              <li key={color}>
                <span
                  className={`block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300`}
                  onClick={() => handleColorChange(color)}
                >
                <a
                  href={`#${color}`}
                  className={`block w-3 h-3 ${color} rounded-full`}
                ></a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a href={product.link}>
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
         <Link to={product.link} smooth=""> <p  className="text">Check out</p></Link>
        </button>
      </a>
    </div>
  );
};
const ProductList = () => {
  return (
    <div>
    <h1 className="text-white text-center text-3xl font-semibold p-10">Product Categories</h1>
    <div className="min-w-12 h-50vh flex justify-center items-center inset-0 bg-black p-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"> 
        {homepagedata[0].products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>      
  );
};

export default ProductList;