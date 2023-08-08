import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    const navigateToMenu = () => {
        navigate("/menu");
    };
    return (
        <>
            <div
                className="z-0 h-screen bg-center bg-cover brightness-[0.9] absolute w-screen brightness"
                style={{
                    backgroundImage: `url("https://i.imgur.com/7VGIWbb.jpg")`,
                }}
            ></div>

            <div className="z-0 flex flex-col place-content-around text-stone-50 text-2xl sm:text-4xl font-semibold w-screen h-screen justify-center items-center">
                <div className="select-none z-20 pb-20 text-center mx-8  ">
                    CRAFTING THE PERFECT SUSHI EXPERIENCE, ONE TRAY AT A TIME
                    {/* sushi, tray, person at a time */}
                </div>
                <div className="flex justify-center z-20 ">
                    <button
                        className="outline-1 outline text-sm bg-stone-900 px-3 py-2 rounded-sm outline-stone-500 hover:bg-stone-300 hover:text-stone-900 ease-in-out duration-300 font-bold"
                        onClick={navigateToMenu}
                    >
                        VIEW MENU
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;
