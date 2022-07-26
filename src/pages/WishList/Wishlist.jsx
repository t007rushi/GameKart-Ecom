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
          <Link to="/products" className="btn primary-btn undle">
            Browse products to add
          </Link>
        </>
      ) : (
        <>
          <div className="flex-col wishlist-head center-it gap-btwn">
            <h1 className="">Wishlist Items({wishlist.length})</h1>
            <Link to="/products" className="btn primary-btn undle ml">
              Browse products
            </Link>
          </div>

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
