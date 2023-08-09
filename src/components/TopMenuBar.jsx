import React from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "../constants/data";


const TopMenuNavBar = (props) => {
    const getMenus = navbarLinks.map((navbarMenu) => {
        return (
            <li
                key={navbarMenu.route}
                className="text-center m-3"
            >
                <NavLink
                    className="menu text-center px-2 py-1 "
                    to={navbarMenu.route}
                    onClick={() => {
                        props.setNavbarOpen(false);
                    }}
                >
                    {navbarMenu.linkName}
                </NavLink>
            </li>
        );
    });

    return (
        <main
            className={
                " z-30 flex flex-row fixed top-0  overflow-hidden bg-opacity-50 inset-0 transform ease-in-out " +
                (props.navbarOpen
                    ? " transition-opacity bg-stone-900 opacity-100 duration-300 translate-x-0  "
                    : " transition-all delay-300 opacity-0 translate-x-full  ")
            }
        >
            <div className="flex">
                <section
                    className={
                        " w-screen  shadow-xl duration-300 ease-in-out transition-all transform " +
                        (props.navbarOpen ? "translate-y-0 " : " -translate-y-full")
                    }
                >
                    <article className=" relative bg-stone-900 w-screen mt-20 flex flex-col items-center overflow-y-hidden  ">
                        <ul
                            className={
                                "font-semibold text-3xl text-stone-50 select-none pb-2 pt-3 w-screen fixed bg-zinc-900" +
                                (props.navbarOpen ? " top-0" : "-top-full")
                            }
                        >
                            {getMenus}
                        </ul>
                    </article>
                    <div
                        className={props.navbarOpen ? "h-screen w-screen cursor-pointer" : ""}
                        onClick={() => {
                            if (props.navbarOpen) {
                                props.setNavbarOpen(false);
                            }
                        }}
                    ></div>
                </section>
                <section
                    className=" w-screen h-full"
                    onClick={() => {
                        props.setNavbarOpen(false);
                    }}
                ></section>
            </div>
        </main>
    );
};

export default TopMenuNavBar;
