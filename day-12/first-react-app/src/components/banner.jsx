import React from "react";
import banner from "../assets/banner.png";

export default function Banner() {
  return (
    <div>
      <img
        alt="banner"
        src={banner}
        className="aspect-19/8 w-full rounded object-cover"
      />
    </div>
  );
}
