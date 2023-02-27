import React from "react";
import { NavLink } from "react-router-dom";

const TopMenuNavBar = (props) => {
    return (
        <>
            <main
                className={
                    " z-30 flex flex-row fixed overflow-hidden bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out " +
                    (props.navbarOpen
                        ? " transition-opacity opacity-100 duration-300 translate-x-0  "
                        : " transition-all delay-300 opacity-0 translate-x-full  ")
                }
            >
                <div className="flex">
                    <section
                        className={
                            " w-screen h-fit absolute bg-stone-900 h-full shadow-xl duration-300 ease-in-out transition-all transform  " +
                            (props.navbarOpen ? " translate-y-0 " : " -translate-y-full ")
                        }
                    >
                        <article className=" relative w-screen mt-20 pb-10 flex flex-col items-center overflow-y-hidden  ">
                            <ul className="font-semibold text-3xl text-stone-50 select-none">
                                <li className="menu cursor-pointer px-2">
                                    <NavLink
                                        to="/Menu"
                                        onClick={() => {
                                            props.setNavbarOpen(false);
                                        }}
                                    >
                                        Menu
                                    </NavLink>
                                </li>
                                <li className="menu cursor-pointer px-2">
                                    <NavLink
                                        to="/PartyTrays"
                                        onClick={() => {
                                            props.setNavbarOpen(false);
                                        }}
                                    >
                                        Party Trays
                                    </NavLink>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section
                        className=" w-screen h-full cursor-pointer "
                        onClick={() => {
                            props.setNavbarOpen(false);
                        }}
                    ></section>
                </div>
            </main>
        </>
    );
};

export default TopMenuNavBar;
