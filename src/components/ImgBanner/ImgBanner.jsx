import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../Context/filter-context";
import "./imgbanner.css";

const ImgBanner = () => {
  const { dispactherforfilter } = useFilter();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex-row overflow">
        <div className="relative-container">
          <img
            src="./assets/home/buil_pc.jpg"
            alt=""
            className="left-side-img"
          />
          <div className="abs-pos">
            <h3>BUILD YOUR OWN BEAST</h3>
            <button className="btn btn-2">LEARN MORE &gt;</button>
          </div>
        </div>
        <div className="right-side-img relative-container img-wrap-mid res-hid">
          <img src="./assets/home/gamer.jpg" alt="" />
        </div>
      </div>

      <div className="relative-container">
        <img
          src="./assets/home/ps5_lineup.jpg"
          alt=""
          className="bottom-img img-banner-pic"
        />
        <div className="top-right pre-order flex-col gap-btwn rmv-abs">
          <h2>NEXT-GEN Gaming Console Is Here</h2>
          <button
            className="btn pre-order-txt"
            onClick={() => {
              dispactherforfilter({ type: "SEARCH", payload: "ps5" });
              navigate("/products");
            }}
          >
            PRE-ORDER NOW &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgBanner;
