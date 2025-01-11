import React, { createContext, useState, useContext, useEffect } from 'react';

// Create CartContext
const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
  // Initialize cartItems from localStorage (if any) or start with an empty array
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems.find(item => item.id === product.id);
      if (existingProduct) {
        // If the product already exists in the cart, update its quantity
        return prevCartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If it's a new product, add it to the cart
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to get the current cart items
  const getCartItems = () => {
    return cartItems;
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCartItems,updateQuantity,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);