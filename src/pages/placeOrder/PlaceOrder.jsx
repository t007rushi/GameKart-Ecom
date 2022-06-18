import React from 'react'
import { Link } from 'react-router-dom'
import "./order.css"

export const PlaceOrder = () => {
  return (
    <div className="flex-col mt">
        <h1>Your Order Has been Placed Succesfully🎉</h1>
        <Link to="/products" className="btn primary-btn undle shop-more-btn">Shop More</Link>
    </div>
  )
}
