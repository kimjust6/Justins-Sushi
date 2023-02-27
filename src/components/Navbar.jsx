import React from "react";
import { NavLink } from "react-router-dom";

import Sidebar from "./Sidebar";
import TopMenuNavBar from "./TopMenuBar";

import "./Navbar.css";

export default function Navbar(props) {
    return (
        <>
            <Sidebar
                isCartOpen={props.isCartOpen}
                setIsCartOpen={props.setIsCartOpen}
            />
            <TopMenuNavBar
                navbarOpen={props.navbarOpen}
                setNavbarOpen={props.setNavbarOpen}
            />
            <nav className="absolute z-30 w-screen text-md flex items-center justify-between lg:justify-between px-2 lg:px-8 py-5 bg-stone-900 select-none">
                {getDesktopMenu()}
                <span
                    className="text-stone-50 leading-none px-4 py-1 rounded bg-transparent lg:hidden outline-none focus:outline-none cursor-pointer"
                    type="button"
                    onClick={() => props.setNavbarOpen(!props.navbarOpen)}
                >
                    <i className={props.navbarOpen ? "fa-solid fa-x" : "fas fa-bars"}></i>
                </span>
                <a
                    href="/"
                    className="font-bold text-5xl text-stone-50 title-hover"
                >
                    <span className="outline-1 text-stone-900 title-outline">Justin's </span>
                    <span className="outline-1 text-stone-50 title-solid">Sushi</span>
                </a>
                <div className="text-3xl lg:text-xl text-stone-50 flex">
                    <a
                        href="https://www.yelp.ca/toronto/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="px-3 py-1 fab leading-none fa-yelp border border-solid border-transparent leading-lg" />
                    </a>
                    <a
                        href="https://www.instagram.com/milklatteteas/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="px-3 py-1 fab leading-none fa-instagram border border-solid border-transparent leading-lg" />
                    </a>
                    <button
                        onClick={() => {
                            props.setIsCartOpen(!props.isCartOpen);
                        }}
                    >
                        <i className="px-3 py-1 leading-none fas fa-cart-shopping border border-solid border-transparent leading-lg" />
                    </button>
                </div>
            </nav>
        </>
    );
}

function getDesktopMenu() {
    return (
        <>
            <ul className="font-semibold hidden lg:flex lg:flex-row text-3xl lg:text-xl text-stone-50 select-none">
                <li className="menu cursor-pointer px-2">
                    <NavLink to="/Menu">Menu</NavLink>
                </li>
                <li className="menu cursor-pointer px-2">
                    <NavLink to="/PartyTrays">Party Trays</NavLink>
                </li>
            </ul>
        </>
    );
}
