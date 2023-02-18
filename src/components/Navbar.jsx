import React from "react";
import "./Navbar.css";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative  text-md flex items-center justify-between lg:justify-between px-2 lg:px-8 py-3 bg-stone-900 select-none">
        {getMenu()}
        <span
          className="text-stone-50 leading-none px-4 py-1 rounded bg-transparent lg:hidden outline-none focus:outline-none cursor-pointer"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="fas fa-bars"></i>
        </span>
        <a href="/" className="font-bold text-xl text-stone-50">
          Justin's Sushi
        </a>
        <div className="icons">
          <a href="#">
            <i className="px-3 py-1 fab leading-none px-2 py-1 fa-yelp border border-solid border-transparent leading-lg text-lg text-stone-50" />
          </a>
          <a href="#">
            <i className="px-3 py-1 fab leading-none px-1 py-1 fa-instagram border border-solid border-transparent leading-lg text-lg text-stone-50" />
          </a>
          <a href="#">
            <i className="px-3 py-1 leading-none px-1 py-1 fas fa-cart-shopping border border-solid border-transparent leading-lg text-lg text-stone-50" />
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
        <li className="menu cursor-pointer mx-1 px-1">Menu</li>
        <li className="menu cursor-pointer mx-1 px-1">Party Trays</li>
        {/* <li className="menu cursor-pointer mx-1 px-2">Category</li> */}
      </ul>
    </>
  );
}
