import React from 'react';
import { useCart } from './CartContext'; // Import the cart context

const Laptoppage = () => {
  const { addToCart } = useCart(); // Get addToCart function from context

  const laptops = [
    {
      id: 1,
      brand: "Apple",
      model: "MacBook Pro 16-inch",
      price: 2399,
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698821675/Croma%20Assets/Computers%20Peripherals/Laptop/Images/302735_yoe3hs.png?tr=w-400",
      ratings: 4.9,
      delivery_time: 5,
    },
    {
      id: 2,
      brand: "Dell",
      model: "XPS 13",
      price: 1099,
      image: "https://example.com/images/dell-xps-13.jpg",
      ratings: 4.7,
      delivery_time: 4
    },
    {
      id: 3,
      brand: "HP",
      model: "Spectre x360",
      price: 1299,
      image: "https://example.com/images/hp-spectre-x360.jpg",
      ratings: 4.6,
      delivery_time: 6
    },
    {
      id: 4,
      brand: "Lenovo",
      model: "ThinkPad X1 Carbon",
      price: 1499,
      image: "https://example.com/images/lenovo-thinkpad-x1-carbon.jpg",
      ratings: 4.8,
      delivery_time: 3
    },
    {
      id: 5,
      brand: "Asus",
      model: "ZenBook Duo",
      price: 1399,
      image: "https://example.com/images/asus-zenbook-duo.jpg",
      ratings: 4.5,
      delivery_time: 7
    },
    {
      id: 6,
      brand: "Microsoft",
      model: "Surface Laptop 4",
      price: 1399,
      image: "https://example.com/images/microsoft-surface-laptop.jpg",
      ratings: 4.7,
      delivery_time: 4
    },
    {
      id: 7,
      brand: "Acer",
      model: "Swift 3",
      price: 849,
      image: "https://example.com/images/acer-swift-3.jpg",
      ratings: 4.6,
      delivery_time: 6
    },
    {
      id: 8,
      brand: "Razer",
      model: "Blade 15",
      price: 2499,
      image: "https://example.com/images/razer-blade-15.jpg",
      ratings: 4.8,
      delivery_time: 5
    },
    {
      id: 9,
      brand: "HP",
      model: "Pavilion 15",
      price: 699,
      image: "https://img.freepik.com/free-photo/laptop-wooden-table-dark-room-with-window_1142-58872.jpg?t=st=1727616323~exp=1727619923~hmac=a48f8d06a3857a206716a249563de9f52ceb2902626d421f14a81bb796c51902&w=360",
      ratings: 4.5,
      delivery_time: 3
    },
    {
      id: 10,
      brand: "Dell",
      model: "Inspiron 15",
      price: 599,
      image: "https://example.com/images/dell-inspiron-15.jpg",
      ratings: 4.4,
      delivery_time: 4
    },
    {
      id: 11,
      brand: "Lenovo",
      model: "IdeaPad Flex 5",
      price: 749,
      image: "https://example.com/images/lenovo-ideapad-flex-5.jpg",
      ratings: 4.5,
      delivery_time: 3
    },
    {
      id: 12,
      brand: "Asus",
      model: "VivoBook 15",
      price: 649,
      image: "https://example.com/images/asus-vivobook-15.jpg",
      ratings: 4.3,
      delivery_time: 5,
    },
  ];

  const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
      console.log("Adding to cart:", product); // Debug log
      addToCart(product);
    };
    return (
      <div className="w-[300px] bg-gray-900 shadow-lg rounded-xl p-4 transform hover:scale-110 transition-transform duration-100">
        <div className="relative w-full mb-3">
          <img
            src={product.image}
            alt={product.model}
            className="w-full h-[200px] object-cover rounded-2xl"
          />
        </div>
        <div className="text-left">
          <h2 className="text-lg text-gray-200">{`${product.brand} ${product.model}`}</h2>
          <p className="text-gray-300">Price: ${product.price}</p>
          <p className="text-gray-300">Rating: {product.ratings}</p>
          <p className="text-gray-300">Delivery Time: {product.delivery_time} days</p>
        </div>
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
    );
  };
  const ProductList = () => {
  return (
    <div className='text-center text-white font-4xl'>
      <h1 className='text-6xl font-semibold'>Laptops</h1>
      <div className="min-w-12 h-50vh flex justify-center items-center inset-0 bg-black p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {laptops.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};

return <ProductList/>
};

export default Laptoppage;