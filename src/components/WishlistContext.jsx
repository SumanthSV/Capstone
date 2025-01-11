import React, { createContext, useState, useContext } from 'react';

// Create the context
const WishlistContext = createContext();

// Custom hook to use wishlist
export const useWishlist = () => useContext(WishlistContext);

// Provider component to wrap your app and manage wishlist
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Function to add product to wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      // Check if product already exists in wishlist
      if (prevWishlist.find(item => item.name === product.name)) {
        return prevWishlist; // If already exists, don't add again
      }
      return [...prevWishlist, product];
    });
  };

  // Function to remove product from wishlist
  const removeFromWishlist = (product) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.name !== product.name));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
