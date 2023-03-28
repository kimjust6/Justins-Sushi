import React from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import {
    setIsCartOpen,
    addToCart,
    decrementCartItem,
    deleteFromCart,
} from "../state/cartSlice";

import "./Sidebar.css";

const Sidebar = (props) => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.cart).isOpen;
    const cart = useSelector((state) => state.cart).cartArray;
    const subtotal = useSelector((state) => state.cart).subtotal;
    // disable scrolling if the modal is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    document.body.style.height = isOpen ? "100%" : "";
    document.body.style.margin = isOpen ? "0" : "";

    return (
        <>
            <main
                className={
                    " z-40 fixed overflow-hidden bg-zinc-900 bg-opacity-50 inset-0 transform ease-in-out " +
                    (isOpen
                        ? " transition-opacity opacity-100 duration-300 translate-x-0 "
                        : " transition-all delay-300 opacity-0 translate-x-full ")
                }
            >
                <section
                    className={
                        " w-screen max-w-lg right-0 absolute bg-stone-900 text-stone-50  h-full shadow-xl duration-300 ease-in-out transition-all transform " +
                        (isOpen ? " translate-x-0 " : " translate-x-full ")
                    }
                >
                    <article className=" relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full ">
                        <div>
                            <div className="pb-2 mt-12 text-xl mx-8">
                                <div>Your Order</div>
                                <div className=" w-full border-b"></div>
                                <div className=" divide-y text-stone-50 ">
                                    <div className="">
                                        {cart.map((element) => {
                                            return (
                                                <div
                                                    key={uuid()}
                                                    className=" flex justify-between pt-4"
                                                >
                                                    <div className="flex w-full">
                                                        <button
                                                            onClick={() => {
                                                                dispatch(
                                                                    decrementCartItem({
                                                                        id: element.id,
                                                                        price: element.price,
                                                                        description:
                                                                            element.description,
                                                                    })
                                                                );
                                                            }}
                                                        >
                                                            <i className=" fa-solid fa-minus "></i>
                                                        </button>
                                                        <div className=" flex items-center px-4 ">
                                                            {element?.quantity}
                                                        </div>
                                                        <button
                                                            onClick={() => {
                                                                dispatch(
                                                                    addToCart({
                                                                        id: element.id,
                                                                        price: element.price,
                                                                        description:
                                                                            element.description,
                                                                    })
                                                                );
                                                            }}
                                                        >
                                                            <i className="fa-solid fa-plus"></i>
                                                        </button>
                                                        <div className="flex items-center justify-between w-full px-2">
                                                            <span>{element?.description}</span> <span> ${element?.price * element?.quantity}</span>
                                                        </div>
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
                                                            <i className=" bg-red-400 text-xl rounded-full hover:scale-105 px-3 py-3 fa-solid leading-none fa-trash-can border border-solid border-transparent leading-lg " />
                                                        </button>
                                                    </i>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                {subtotal != 0 && <div className="w-full border-t  mt-4 py-4 flex justify-between">
                                    {"Subtotal: $" + subtotal}
                                    <button className="cursor-pointer prevent-select inline-flex items-center ml-3 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-yellow-700 hover:bg-yellow-600 ">
                                        Checkout
                                    </button>
                                </div>}
                                <div className=" w-full flex justify-center my-8 ">

                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section
                    className=" w-screen h-full cursor-pointer "
                    onClick={() => {
                        dispatch(setIsCartOpen(false));
                    }}
                ></section>

            </main>
        </>
    );
};

export default Sidebar;
