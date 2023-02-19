import React from "react";
import "./Navbar.css";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="absolute z-50 w-screen text-md flex items-center justify-between lg:justify-between px-2 lg:px-8 py-3 bg-stone-900 select-none">
        {getMenu()}
        <span
          className="text-stone-50 leading-none px-4 py-1 rounded bg-transparent lg:hidden outline-none focus:outline-none cursor-pointer"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="fas fa-bars"></i>
        </span>
        <a href="/" className="font-bold text-2xl text-stone-50 title-hover">
          <span class="outline-1 text-stone-900 title-outline">Justin's </span>
          <span class="outline-1 text-stone-50 title-solid">Sushi</span>
        </a>
        <div className="icons">
          <a href="#">
            <i className="px-3 py-1 fab leading-none fa-yelp border border-solid border-transparent leading-lg text-lg text-stone-50" />
          </a>
          <a href="#">
            <i className="px-3 py-1 fab leading-none fa-instagram border border-solid border-transparent leading-lg text-lg text-stone-50" />
          </a>
          <a href="#">
            <i className="px-3 py-1 leading-none fas fa-cart-shopping border border-solid border-transparent leading-lg text-lg text-stone-50" />
          </a>
        </div>
      </nav>
    </>
  );
}

function getMenu() {
  return (
    <>
      <ul className="font-semibold hidden lg:flex lg:flex-row text-lg text-stone-50 select-none">
        <li className="menu cursor-pointer px-2">Menu</li>
        <li className="menu cursor-pointer px-2">Party Trays</li>
      </ul>
    </>
  );
}
