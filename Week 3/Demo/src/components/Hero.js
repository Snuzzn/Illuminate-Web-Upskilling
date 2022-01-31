import React from "react";
import heroImg from "../heroImg.png";

function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} alt="" className="heroImg" />
      <div className="heroTitle">
        Get your Info on Movies, TV Shows, Books...
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        impedit veniam unde similique facere voluptates pariatur atque nisi
        minus, quam, enim consectetur ipsum tempora fugiat perferendis cum
        placeat odit. Iste. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Sed ipsum maxime iste reiciendis, sit quae sint corporis, eos et
        repellendus iure! Nobis ex, eum tempore obcaecati est at ratione natus!
      </div>
    </div>
  );
}

export default Hero;
