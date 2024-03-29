import React from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";

import { setModal } from "../../state/descriptionModalSlice";

import { foodDescriptionModal } from "./CartModal";

import "./RenderMenuList.css";
export function RenderList(list) {
    // disable scrolling if the modal is open
    document.body.style.overflow = useSelector((state) => state.menuItemModal).isOpen
        ? "hidden"
        : "auto";
    const descriptionModal = useSelector((state) => state.menuItemModal);
    // define cart and dispatch for redux
    const dispatch = useDispatch();
    const listItems = list.map((element) => (
        <li
            key={uuid()}
            className=" menuItem cursor-pointer "
            onClick={() => {
                dispatch(setModal(element));
            }}
        >
            <div className=" lg:max-w-md mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-900 dark:border-stone-900 mx-5 hover:brightness-75 transition-all max-w-lg">
                <div className="  ">
                    <img
                        className=" menuItemImage w-full rounded-t-lg object-cover"
                        src={element?.Image}
                        alt={element?.Alt}
                    />
                </div>
                <div className=" py-3 px-6 lg:min-h-72 ">
                    <div>
                        <h5 className=" mb-0 sm:-mb-6 menuItemText text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {element?.Title} {element?.Price ? "- $" + element?.Price : ""}
                        </h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-sans">
                        {element?.Description}
                    </p>
                </div>
            </div>
        </li>
    ));
    return (
        <>
            {useSelector((state) => state.menuItemModal).isOpen &&
                foodDescriptionModal(dispatch, descriptionModal)}
            {listItems}
        </>
    );
}
