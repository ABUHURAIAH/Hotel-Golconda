import React from 'react';
import logo from '../logo.png';

export default function Header() {
  const show = () => {
    const header = document.getElementById("header");
    const hambox = document.getElementById("hambox");

    if (header.style.paddingBottom === "200px") {
      header.style.paddingBottom = "0";
      hambox.style.display = "none";
    } else {
      header.style.paddingBottom = "200px";
      hambox.style.display = "block";
    }
  }
  return (
    <div className="header" id="header">
      <div className="header-left">
        <img src={logo} />
      </div>
      <div className="header-middle">
        <a href="#">ACCOMODATION</a>
        <a href="#">FOOD & BEVERAGE</a>
        <a href="#">CONFERENCING & EVENTS</a>
        <a href="#">GALLERY</a>
      </div>
      <div className="header-right">
        <div className="book1">
          BOOK NOW
        </div>
      </div>
      <div className="ham" onClick={show}>
        <span >
          &equiv;
        </span>
      </div>
    </div>
  )
}
