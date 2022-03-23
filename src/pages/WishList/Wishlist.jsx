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
          <h1>Wishlist is empty add items here</h1>
          <Link to="/products">Browse products to add</Link>
        </>
      ) : (
        <>
          <h1 className="wishlist-head">Wishlist Items({wishlist.length}) </h1>
          <Link to="/products">Browse products to add</Link>
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
