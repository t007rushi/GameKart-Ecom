import React from "react";
import {Banner ,
 Category,
 Footer ,
 ImgBanner }  from "../../components/index.js"
 import "./home.css"

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Category />
      <ImgBanner />
      <Footer />
    </div>
  );
};

export default Home;
