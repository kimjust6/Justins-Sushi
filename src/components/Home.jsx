import React from "react";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div
                className="z-0 h-[calc(100vh-15em)] bg-center bg-cover brightness-[0.9] absolute w-screen brightness"
                style={{
                    backgroundImage: `url("https://i.imgur.com/7VGIWbb.jpg")`,
                }}
            ></div>

            <section className="z-0 flex flex-col place-content-around text-stone-50 text-5xl sm:text-3xl font-semibold w-screen h-[calc(100vh-8.5em)] justify-center items-center bg-red-900">
                <h1 className="select-none z-20 pb-20 text-center mx-8  ">
                    CRAFTING THE PERFECT SUSHI EXPERIENCE, ONE TRAY AT A TIME
                    {/* sushi, tray, person at a time */}
                </h1>
                <div className="flex justify-center z-20 ">
                    <Link
                        to="/menu"
                        className="outline-1 outline text-lg bg-stone-900 px-3 py-2 rounded-sm outline-stone-500 hover:bg-stone-300 hover:text-stone-900 ease-in-out duration-300 font-bold"
                    >
                        VIEW MENU
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
