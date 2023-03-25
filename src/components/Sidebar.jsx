import React from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import {
    // incrementCartItem,
    addToCart,
    decrementCartItem,
    deleteFromCart,
} from "../state/cartSlice";

import "./Sidebar.css";

const Sidebar = (props) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // disable scrolling if the modal is open
    document.body.style.overflow = props.isCartOpen ? "hidden" : "auto";
    document.body.style.height = props.isCartOpen ? "100%" : "";
    document.body.style.margin = props.isCartOpen ? "0" : "";

    return (
        <>
            <main
                className={
                    " z-40 fixed overflow-hidden bg-stone-900 bg-opacity-50 inset-0 transform ease-in-out " +
                    (props.isCartOpen
                        ? " transition-opacity opacity-100 duration-300 translate-x-0  "
                        : " transition-all delay-300 opacity-0 translate-x-full  ")
                }
            >
                <section
                    className={
                        " w-screen max-w-lg right-0 absolute bg-stone-900 text-stone-50  h-full shadow-xl  duration-300 ease-in-out transition-all transform  " +
                        (props.isCartOpen ? " translate-x-0 " : " translate-x-full ")
                    }
                >
                    <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
                        <div>
                            <div className="pb-2 mt-12 text-xl mx-8">
                                <div>Your Order</div>
                                <span>
                                    {cart.map((element) => {
                                        return (
                                            <div
                                                key={uuid()}
                                                className="flex justify-between "
                                            >
                                                <div className="flex ">
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
                                                        <i className="fa-solid fa-minus"></i>
                                                    </button>
                                                    <div className="flex items-center px-4 ">
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
                                                    <div className="flex items-center px-8">
                                                        {element?.description} {element?.price}
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
                                                        {/* <i className="px-3 py-1 fa-solid leading-none fa-trash-can border border-solid border-transparent leading-lg" /> */}
                                                        <i className=" bg-red-400 text-xl rounded-full hover:scale-105 px-3 py-3 fa-solid leading-none fa-trash-can border border-solid border-transparent leading-lg " />
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
