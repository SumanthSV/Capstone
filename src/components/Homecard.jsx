import { useEffect, useState } from 'react';
import $ from 'jquery';
import Arrangetv from '../assets/Arange_tv.png';
import laptop from '../assets/laptop.jpg';
import headphones from '../assets/headphones.jpg';
import ProductList from './ProductCard';

const ProductdisplayCard = ({ product }) => {
  const [currentColor, setCurrentColor] = useState({
    primary: product.defaultColor.primary,
    secondary: product.defaultColor.secondary,
    pic: product.defaultImage,
  });

  // Update currentColor whenever the product prop changes
  useEffect(() => {
    setCurrentColor({
      primary: product.defaultColor.primary,
      secondary: product.defaultColor.secondary,
      pic: product.defaultImage,
    });
  }, [product]);

  // Handle color change without moving the card
  const handleColorChange = (primary, secondary, pic) => {
    console.log(`Changing color to: Primary: ${primary}, Secondary: ${secondary}, Image: ${pic}`);
    
    setCurrentColor({ primary, secondary, pic });
    $(".content h2").css("color", secondary);
    $(".content h3").css("color", secondary);
    $(".container .imgBx").css("background", secondary);
    $(".container .details button").css("background", secondary);
  };

  return (
    <div>
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="container flex flex-wrap justify-between w-[900px] h-[600px] bg-white transition-transform duration-500">
        <div
          className="imgBx flex justify-center items-center w-1/2 h-full transition-all duration-300 relative overflow-hidden"
          style={{ background: currentColor.secondary }}
        >
          <div className="absolute text-[5em] font-bold opacity-20 top-0 left-6 whitespace-nowrap">{product.brand}</div>
          <img 
            className="w-[1000px] "
            src={currentColor.pic}
            alt={product.altText}
          />
        </div>
        <div className="details flex justify-center bg-black items-center w-1/2 h-full p-10">
          <div className="content ">
            <h2 className="text-4xl text-white font-semibold mb-4">
              {product.name} <br />
              <span className="text-sm uppercase tracking-wider text-white">{product.category}</span>
            </h2>
            <p className="max-w-[85%] ml-[15%] text-base text-white mb-9">
              {product.description}
            </p>
            <p className="product-colors  text-white flex items-center text-base mb-6">
              Available Colors: 
               {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="cursor-pointer w-6 h-6 rounded-full mr-3"
                  style={{ backgroundColor: color.primary }}
                  onClick={() => handleColorChange(color.primary, color.secondary, color.pic)}
                ></span>
              ))}
            </p>
            <h3 className="text-3xl font-semibold text-white float-left">Rs. {product.price}</h3>
            <div>
            <button className="bg-black text-white font-semibold py-3 px-5 mt-2 rounded-full float-right">
              Buy Now
            </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='mt-20px'> <ProductList/> </div>
      </div>

  );
};




const HomeCard = () => {
  const products = [
    {
      name: 'Jordan Proto-Lyte',
      brand: 'Nike',
      category: 'Running Collection',
      description: 'Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort.',
      price: '12,800',
      defaultColor: { primary: '#7E021C', secondary: '#bd072d' },
      defaultImage: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true',
      altText: 'Nike Jordan Proto-Lyte Image',
      colors: [
        { primary: '#7E021C', secondary: '#bd072d', pic: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true', isDefault: true },
        { primary: '#0d1b2a', secondary: '#212121', pic: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true' },
        { primary: '#CE5B39', secondary: '#F18557', pic: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=trueg' },
      ]
    },
    {
      name: 'Sony Bravia OLED',
      brand: 'Sony',
      category: '4K Smart TV',
      description: 'The Sony Bravia OLED TV delivers stunning visuals with true blacks and vibrant colors.',
      price: '2,50,000',
      defaultColor: { primary: 'rgb(51, 49, 49)', secondary: 'rgb(51, 49, 49)' },
      defaultImage: 'https://img.freepik.com/free-photo/view-computer-monitor-display_23-2150757537.jpg?t=st=1727618628~exp=1727622228~hmac=33aa9870678ca56add9a7d13560f1e27f96f4919c1d69ba3be495ea2d6762ae7&w=996',
      altText: 'Sony Bravia OLED TV Image',
      colors: [
        { primary: "rgb(51, 49, 49)", secondary: 'rgb(51, 49, 49)', pic: 'https://img.freepik.com/free-photo/view-computer-monitor-display_23-2150757537.jpg?t=st=1727618628~exp=1727622228~hmac=33aa9870678ca56add9a7d13560f1e27f96f4919c1d69ba3be495ea2d6762ae7&w=996' , isDefault: true},

      ]
    },
    
    {
      name: 'Sony WH-1000XM5',
      brand: 'Sony',
      category: 'Noise-Cancelling Headphones',
      description: 'The Sony WH-1000XM5 offers industry-leading noise cancellation and high-resolution audio.',
      price: '29,999',
      defaultColor: { primary: '#2B2B2B', secondary: '#515151' },
      defaultImage: headphones,
      altText: 'Sony WH-1000XM5 Headphones Image',
      colors: [
        { primary: 'black', secondary: 'black', pic: headphones, isDefault: true },
        { primary: 'gray', secondary: 'gray', pic: 'https://i.imgur.com/Zm7HQ2D.jpg' },
        {primary: 'white', secondary: 'white', pic: 'https://i.imgur.com/Zm7HQ2D.jpg'}
      ]
    },
    {
      name: 'ROG Strix Laptop',
      brand: 'ASUS',
      category: 'Gaming Laptop',
      description: 'The ASUS ROG Strix is packed with the latest Intel i9 processor and RTX 4080 for ultimate gaming.',
      price: '1,80,000',
      defaultColor: { primary: '#1F1F1F', secondary: '#3A3A3A' },
      defaultImage: laptop,
      altText: 'ASUS ROG Strix Laptop Image',
      colors: [
        { primary: 'black', secondary: '#3A3A3A', pic: laptop, isDefault: true },
        { primary: 'silver', secondary: '#43445A', pic: '' },
      ]
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      category: 'Mobile Phone',
      description: 'The next-gen Samsung Galaxy S24 Ultra comes with an epic 108MP camera and 5000mAh battery.',
      price: '95,000',
      defaultColor: { primary: '#000', secondary: '#212121' },
      defaultImage: '',
      altText: 'Samsung Galaxy S24 Ultra Image',
      colors: [
        { primary: 'black', secondary: '#212121', pic: 'https://i.imgur.com/oP59cN4.jpg', isDefault: true },
        { primary: 'gray', secondary: '#333', pic: 'https://i.imgur.com/oP59cN4.jpg' },
        { primary: 'violet', secondary: '#D67C37', pic: 'https://i.imgur.com/oP59cN4.jpg' },
      ]
    },
    
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [products.length]);

  return <ProductdisplayCard product={products[currentProductIndex]} />;
};

export default HomeCard;
