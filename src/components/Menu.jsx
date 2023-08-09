import React from "react";
import { RenderList } from "./Shared Components/RenderMenuList";
import { menuList } from "../constants/data";

const Menu = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="flex justify-center items-center text-4xl font-bold mt-36 py-4 mb-6">
                    Main Menu
                </h2>
                <ul className="z-10 flex flex-wrap justify-center items-center ">
                    {RenderList(menuList)}
                </ul>
            </div>
        </>
    );
};

export default Menu;
