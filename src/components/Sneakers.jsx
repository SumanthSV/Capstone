import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from './CartContext'; // Import the cart context
import {mainjson} from '../utils/mockdata'
import { useParams } from 'react-router-dom';


const Product_List = () => {
  const { addToCart } = useCart(); // Get addToCart function from context
  const [product, setproduct] = useState('')
  const {id} = useParams()

  const navigate = useNavigate()

  const categories = {
    '1': 'Mobiles',
    '2': 'Laptops',
    '3': 'Headphones',
    '4': 'Mens T-Shirts',
    '5': 'Television',
    '6': 'Sneakers',
    '7' :'Furnitures',
    '8' :'Watches'
  };

  useEffect(()=>{
    setproduct(categories[id])
  },[id])
  
  const Product_List = [
    {
      id: 1,
      brand: "Nike",
      model: "Air Max 270",
      price: 150,
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/kncr6f3jysl34ejmk7xp/NIKE+AIR+MAX+270+%28GS%29.png",
      ratings: 4.7,
      delivery_time: 3,
    },
    {
      id: 2,
      brand: "Adidas",
      model: "UltraBoost 21",
      price: 180,
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2eb4c41299344f07b18e3f6e7150c092_9366/adidas_Switch_Fwd_2_Running_Shoes_White_ID0533_06_standard.jpg",
      ratings: 4.8,
      delivery_time: 4,
    },
    {
      id: 3,
      brand: "Puma",
      model: "RS-X",
      price: 110,
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/400995/02/sv01/fnd/IND/fmt/png/RS-X-Efekt-Lights-On-Reflect-Unisex-Product_List",
      ratings: 4.6,
      delivery_time: 5,
    },
    {
      id: 4,
      brand: "Reebok",
      model: "Classic Leather",
      price: 75,
      image: "https://imagescdn.reebok.in/img/app/product/3/39706511-14539929.jpg?auto=format&w=390",
      ratings: 4.5,
      delivery_time: 3,
    },
    {
      id: 5,
      brand: "Nike",
      model: " Air Jordan Legacy 312 Low",
      price: 175,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5194f597-a088-4357-85d3-8589d59b42d8/AIR+JORDAN+LEGACY+312+LOW.png",
      ratings: 4.7,
      delivery_time: 4,
    },
    {
      id: 6,
      brand: "Adidas",
      model: "Ozelia Shoes",
      price: 160,
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6ae52eeeb9f14b3cb4c1adf701470acb_9366/Ozelia_Shoes_White_GX3268_06_standard.jpg",
      ratings: 4.5,
      delivery_time: 5,
    },
    {
      id: 7,
      brand: "Puma",
      model: "BMW M Motorsport N ",
      price: 55,
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/308057/03/sv01/fnd/IND/fmt/png/BMW-M-Motorsport-Neo-Cat-2.0-Unisex-Driving-Shoes",
      ratings: 4.4,
      delivery_time: 3,
    },
    {
      id: 8,
      brand: "Nike",
      model: "Air Jordan 1 Low SE",
      price: 65,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e4b9c2f6-9a19-475b-8f4e-3c3e9494c2df/AIR+JORDAN+1+LOW+SE.png",
      ratings: 4.6,
      delivery_time: 4,
    },
    {
      id: 9,
      brand: "Sketchers",
      model: "UNO - STAND ON AIR",
      price: 140,
      image: "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw83845255/images/large/197627149967-4.jpg",
      ratings: 4.7,
      delivery_time: 5,
    },
    {
      id: 10,
      brand: "Puma",
      model: "CA Pro Classic Unisex Product_List",
      price: 160,
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380190/53/sv01/fnd/IND/fmt/png/CA-Pro-Classic-Unisex-Product_List",
      ratings: 4.8,
      delivery_time: 3,
    },
    {
      id: 11,
      brand: "Nike",
      model: "Air Jordan 5 Retro 'Lucky Green'",
      price: 70,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33305375-4f76-4111-b0c4-8829c7c6a133/WMNS+AIR+JORDAN+5+RETRO.png",
      ratings: 4.3,
      delivery_time: 4,
    },
    {
      id: 12,
      brand: "Skechers",
      model: "D'lites",
      price: 65,
      image: "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw08b84c2e/images/large/196989934976-4.jpg",
      ratings: 4.5,
      delivery_time: 5,
    },
  ];

  const handleViewMore = (product) => {
    console.log(product.id)
    navigate(`/product/details/${product?.id}`, {
      state: { product: product }
    });
  };

  const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
      // console.log("Adding to cart:", product);
      addToCart(product);
    };

    return (
      <div className="w-[300px] bg-gray-900 shadow-lg rounded-xl p-4 transform hover:scale-110 transition-transform  duration-300 ">
        <div className="relative w-full mb-3">
          <img
            src={product.image}
            alt={product.model}
            className="w-full h-[250px] object-cover rounded-2xl"
          />
        </div>
        <div className="text-left">
          <h2 className="text-lg text-gray-200">{`${product.brand} ${product.model}`}</h2>
          <p className="text-gray-300">Price: ${product.price}</p>
          <p className="text-gray-300">Rating: {product.ratings}</p>
          <p className="text-gray-300">Sellers: {product.seller}</p>
          <p className="text-gray-300">Delivery Time: {product.delivery_time} days</p>
          <button className="CartBtn" onClick={() => {handleAddToCart() ;  handleViewMore(product)}} >
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
            <p className="text">View more</p>
          </button>
        </div>
      </div>
    );
  };

  const ProductList = () => {
    return (
      <div className='text-center text-white font-4xl'>
        <h1 className='text-6xl font-semibold'>Product_List</h1>
        <div className="min-w-12 h-50vh flex justify-center items-center inset-0 bg-black p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {mainjson.filter((cat)=>cat.category == product).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <ProductList />;
};
export default Product_List;