import React from "react";
import img1 from "../assets/home/Gaming-amico.png";
import img2 from "../assets/home/buil_pc.jpg";
import img4 from "../assets/home/ps5_lineup.jpg";
import img3 from "../assets/home/gamer.jpg";
import { Link} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <main className="home-content">
        <div className="home-intro flex-row">
          <div className="home-descr flex-col center-it">
            <h1>EXPLORE THE NEXT GEN GAMING WORLD</h1>
            <p>
              Experience thrilling, cinematic storytelling and the iconic
              franchise’s largest blockbuster action set pieces.
            </p>
            <div className="flex-row gap-btwn">
              <a href="./screens/prodListHori.html" className="undle">
                <button className="btn primary-btn bold">
                  Learn More &gt;
                </button>
              </a>
              <Link to="/products" className="undle">
                <button className="btn linked-btn bold">SHOP NOW &gt;</button>
              </Link>
            </div>
          </div>
          <img
            src={img1}
            alt=""
            className="home-img"
          />
        </div>
        <div className="flex-row middle-bar center-it">
          <div className="flex-col center-it">
            <span className="material-icons expl-icon"> sports_esports </span>
            <h3>GAMES</h3>
          </div>
          <div className="flex-col center-it">
            <span className="material-icons expl-icon"> kitchen </span>
            <h3>CONSOLE</h3>
          </div>
          <div className="flex-col center-it">
            <span className="material-icons expl-icon"> headphones </span>
            <h3>ACCESORIES</h3>
          </div>
          <div className="flex-col center-it">
            <span className="material-icons expl-icon"> person </span>
            <h3>JOIN IN</h3>
          </div>
          <div className="flex-col center-it">
            <span className="material-icons expl-icon"> play_arrow </span>
            <h3>PLAY</h3>
          </div>
        </div>
        <div className="flex-row">
          <div className="relative-container">
            <img
              src={img2}
              alt=""
              className="left-side-img"
            />
            <div className="abs-pos">
              <h3>BUILD YOUR OWN BEAST</h3>
              <button className="btn btn-2">LEARN MORE &gt;</button>
            </div>
          </div>
          <div className="right-side-img relative-container img-wrap-mid">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="relative-container">
          <img
            src={img4}
            alt=""
            className="bottom-img"
          />
          <div className="top-right pre-order flex-col gap-btwn">
            <h2>NEXT-GEN Gaming Console Is Here</h2>
            <button className="btn pre-order-txt">PRE-ORDER NOW &gt;</button>
          </div>
        </div>
      </main>
    </div>
  );
}
