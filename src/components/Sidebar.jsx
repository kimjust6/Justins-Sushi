import React from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";
import {
    incrementByAmount,
    addToCart,
    decrementFromCart,
    deleteFromCart,
    emptyCart,
} from "../state/cartSlice";

import "./Sidebar.css";

const Sidebar = (props) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            <main
                className={
                    " z-40 fixed overflow-hidden bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out " +
                    (props.isCartOpen
                        ? " transition-opacity opacity-100 duration-300 translate-x-0  "
                        : " transition-all delay-300 opacity-0 translate-x-full  ")
                }
            >
                <section
                    className={
                        " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl  duration-300 ease-in-out transition-all transform  " +
                        (props.isCartOpen ? " translate-x-0 " : " translate-x-full ")
                    }
                >
                    <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
                        <div>
                            <div className="pb-2 mt-12 text-xl mx-8">
                                <span>
                                    {cart.map((element) => {
                                        return (
                                            <div
                                                key={uuid()}
                                                className="flex justify-between "
                                            >
                                                <div>
                                                    {element?.quantity} {element?.description}{" "}
                                                    {element?.price}
                                                </div>
                                                <i className="my-1">
                                                    <button
                                                        onClick={() => {
                                                            dispatch(
                                                                deleteFromCart({
                                                                    id: element.id,
                                                                })
                                                            );
                                                        }}
                                                    >
                                                        {/* <i className="px-3 py-1 fa-solid leading-none fa-trash-can border border-solid border-transparent leading-lg" /> */}
                                                        <i
                                                            className=" bg-red-400 text-xl rounded-full hover:scale-105 px-3 py-3 fa-solid leading-none fa-trash-can border border-solid border-transparent leading-lg "
                                                        />
                                                    </button>
                                                </i>
                                            </div>
                                        );
                                    })}
                                </span>
                            </div>
                        </div>
                    </article>
                </section>
                <section
                    className=" w-screen h-full cursor-pointer "
                    onClick={() => {
                        props.setIsCartOpen(false);
                    }}
                ></section>
            </main>
        </>
    );
};

export default Sidebar;
