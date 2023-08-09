import React from "react";
import { addToCart, setIsCartOpen } from "../../state/cartSlice";

import { clearModal } from "../../state/descriptionModalSlice";

export const foodDescriptionModal = (dispatch, descriptionModal) => {
    return (
        <div
            className="relative "
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className=" fixed inset-0 bg-stone-900 bg-opacity-50 transition-opacity "></div>

            <div
                className=" z-40 fixed inset-0 overflow-y-auto cursor-pointer "
                onClick={() => {
                    dispatch(clearModal());
                }}
            >
                <div className=" flex min-h-full  justify-center items-center p-4 text-center  sm:p-0 ">
                    <div
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg cursor-default "
                        onClick={(event) => {
                            event.stopPropagation();
                        }}
                    >
                        <div className="shadow-sm shadow-slate-400 border border-slate-400 rounded-lg">
                            <div className="bg-stone-900 text-stone-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3
                                            className="text-xl font-semibold leading-6 text-white"
                                            id="modal-title"
                                        >
                                            {descriptionModal.value.Title}
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500 font-sans">
                                                {descriptionModal.value.Description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-stone-900 text-stone-50 px-4 py-3 sm:flex sm:px-6 sm:justify-end gap-4 ">
                                <button
                                    className=" cursor-pointer prevent-select inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-yellow-700 hover:bg-yellow-600 w-full sm:width-auto justify-center sm:w-auto"
                                    onClick={() => {
                                        dispatch(
                                            addToCart({
                                                id: descriptionModal.value.ID,
                                                price: descriptionModal.value.Price,
                                                description: descriptionModal.value.Title,
                                            })
                                        );
                                        dispatch(clearModal());
                                        dispatch(setIsCartOpen(true));
                                    }}
                                >
                                    Add to Order
                                </button>
                                <button
                                    type="button"
                                    className="  mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-300 sm:mt-0 sm:w-auto"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        dispatch(clearModal());
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
