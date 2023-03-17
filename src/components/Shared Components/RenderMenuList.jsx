import React from "react";
import uuid from "react-uuid";
import { useSelector, useDispatch } from "react-redux";
import { addToCartModal } from "./CartModal";

import {
    incrementByAmount,
    addToCart,
    decrementFromCart,
    deleteFromCart,
    emptyCart,
} from "../../state/cartSlice";

import "./RenderMenuList.css";

export function RenderList(list) {
    // define cart and dispatch for redux
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const isModalOpen = true;
    const listItems = list.map((element) => (
        <li
            key={uuid()}
            className=" menuItem cursor-pointer "
        >
            <div className=" lg:max-w-md mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-900 dark:border-stone-900 mx-5">
                <div className="  ">
                    <img
                        className=" menuItemImage lg:w-full rounded-t-lg object-cover "
                        src={element?.Image}
                        alt={element?.Alt}
                    />
                </div>
                <div className=" p-5 lg:min-h-72 ">
                    <div>
                        <h5 className=" menuItemText text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {element?.Title} {element?.Price ? "- $" + element?.Price : ""}
                        </h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {element?.Description}
                    </p>
                    {/* <a
                        className="  cursor-pointer prevent-select inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:focus:ring-blue-800"
                        onClick={() => {
                            dispatch(
                                addToCart({
                                    id: element.ID,
                                    price: element.Price,
                                    description: element.Title,
                                })
                            );
                        }}
                    >
                        Add to Cart
                    </a> */}
                </div>
            </div>
        </li>
    ));
    return (
        <>
            {/* <div className="flex flex-col"></div> */}
            {isModalOpen} && {addToCartModal()}
            {listItems}
        </>
    );
}
