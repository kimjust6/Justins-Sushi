import React from "react";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../state/cartSlice";
import Sidebar from "./Sidebar";
import TopMenuNavBar from "./TopMenuBar";

import "./Navbar.css";

const data = require("../public/constants.json");

export default function Navbar(props) {
    const dispatch = useDispatch();
    const isCartOpen = useSelector((state) => state.cart).isOpen;
    const getMenus = (
        <>
            <ul className=" font-semibold hidden lg:flex lg:flex-row text-3xl lg:text-xl text-stone-50 select-none ">
                {data.Navigation.map((navigation) => {
                    return (
                        <li
                            className=" cursor-pointer "
                            key={uuid()}
                        >
                            <NavLink className=" menu px-2 pt-1 mx-1 pb-2" to={navigation.route}>{navigation.linkName}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </>
    );

    return (
        <>
            <Sidebar />
            <TopMenuNavBar
                navbarOpen={props.navbarOpen}
                setNavbarOpen={props.setNavbarOpen}
            />
            <nav className={" outline-1 outline outline-stone-400 absolute w-screen text-md flex items-center justify-between lg:justify-between px-2 lg:px-8 py-5 bg-stone-900 select-none "
                + (useSelector((state) => state.menuItemModal).isOpen ? " z-10 " : "z-30")}

            >
                {getMenus}
                < span
                    className="text-stone-50 leading-none px-4 py-1 rounded bg-transparent lg:hidden outline-none focus:outline-none cursor-pointer"
                    type="button"
                    onClick={() => dispatch(setIsCartOpen(true))}
                >
                    <i
                        className={
                            props.navbarOpen ? " fa-solid fa-x text-xl" : " fas fa-bars text-xl"
                        }
                    ></i>
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
                        <i className=" hover:text-stone-300 px-3 py-1 fab leading-none fa-yelp border border-solid border-transparent leading-lg" />
                    </a>
                    <a
                        href="https://www.instagram.com/milklatteteas/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className=" hover:text-stone-300 px-3 py-1 fab leading-none fa-instagram border border-solid border-transparent leading-lg" />
                    </a>
                    <button
                        onClick={() => {
                            dispatch(setIsCartOpen(!isCartOpen));
                        }}
                    >
                        <i className=" hover:text-stone-300 px-3 py-1 leading-none fas fa-cart-shopping border border-solid border-transparent leading-lg" />
                    </button>
                </div>
            </nav>
        </>
    );
}
