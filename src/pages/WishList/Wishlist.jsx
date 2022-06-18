/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../Context/wishlist-context";
import { Card } from "../../components/index";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-wrap">
      {wishlist.length === 0 ? (
        <>
          <h1 className="mb">Your Wishlist is empty</h1>
          <Link to="/products" className="btn primary-btn undle">Browse products to add</Link>
        </>
      ) : (
        <>
          <h1 className="wishlist-head">Wishlist Items({wishlist.length}) 
          <Link to="/products" className="btn primary-btn undle ml">Browse products to add</Link></h1>
          <div className="card-collection">
            {wishlist.map((prod) => {
              return <Card key={prod.id} prod={prod} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}
