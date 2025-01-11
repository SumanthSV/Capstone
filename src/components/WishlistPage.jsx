// src/components/WishlistPage.js
import React from 'react';
import { useWishlist } from './WishlistContext';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty. <Link to="/">Continue Shopping</Link></p>
      ) : (
        <div>
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
