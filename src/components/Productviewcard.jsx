import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from './CartContext';

const ProductViewCard = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        brand: product.brand,
        model: product.model,
        image: product.image,
        price: product.price,
        seller:product.seller,
        quantity: 1,
      });
      alert("Product added to cart!");
    }
  };

  return (
    <div className="container mx-auto my-8 p-6 max-w-4xl bg-gray-900 shadow-lg rounded-lg transform hover:scale-95 transition-transform  duration-300">
    
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="w-[290px] md:w-[400px] mt-6 md:mt-0 transform hover:scale-110 transition-transform  duration-300 "
            src={product?.image || "https://via.placeholder.com/290"}
            alt={product?.model || "No Image"}
          />
        </div>

        <div className="product-info w-full md:w-1/2 mt-6 md:mt-0 p-6">
          <h1 className="text-white text-2xl font-bold mb-2">
            {product?.brand || "No Brand"}
          </h1>
          <span className="text-white text-lg">{product?.model || "No Model Info"}</span>
          
          <div className="price my-4 text-white text-3xl">
            $ <span className="text-4xl">{product?.price || "N/A"}</span>
          </div>

          <h3 className="text-lg text-white font-bold mb-2">Rating: {product?.ratings || "N/A"}</h3>
          
          <p className="desc text-white text-sm leading-tight">
            {product?.description || "This product combines style, comfort, and functionality, making it perfect for everyday use. Its high-quality materials ensure durability, while the innovative design enhances performance. Ideal for various activities, it provides excellent support and a modern look that fits seamlessly into any lifestyle."}
          </p>
          <div className="delivery-time mt-4">
            <h3 className="font-bold text-white">Sellers: {product?.seller || "N/A"}</h3>
          </div>
          <div className="delivery-time mt-4">
            <h3 className="font-bold text-white">Delivery Time: {product?.delivery_time || "N/A"} days</h3>
          </div>

          <div className="buttons mt-6">
            <button onClick={handleAddToCart} className="CartBtn">
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
    </div>
  );
};
export default ProductViewCard;