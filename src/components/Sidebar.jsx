import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../state/counterslice";

const Sidebar = (props) => {
    const cartTotal = useSelector((state) => state.counter.value);
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
                            <div>
                                <button
                                    aria-label="Increment Value"
                                    onClick={() => dispatch(increment())}
                                >
                                    Increment
                                </button>
                                <span>{cartTotal}</span>
                                <button
                                    aria-label="Decrement Value"
                                    onClick={() => dispatch(decrement())}
                                >
                                    Decrement
                                </button>
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
