import React from "react";
import uuid from "react-uuid";

const PartyTray = () => {
    const list = [
        {
            Title: "Very Nice Sushi",
            Image: "https://i.imgur.com/7uNqBcO.jpg",
            Alt: "Description of Image",
            Description: "Sushi tray with 50 pieces.",
        },
    ];

    return (
        <>
            <h2 className="flex justify-center items-center ">Party Trays</h2>
            <ul className="z-10 h-screen w-screen flex justify-center items-center place-content-around ">
                {renderList(list)}
            </ul>
        </>
    );
};

export default PartyTray;

function renderList(list) {
    const listItems = list.map((element) => (
        <li key={uuid()}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-900 dark:border-stone-900">
                <a href="#">
                    <img
                        className="rounded-t-lg"
                        src={element?.Image}
                        alt={element?.Alt}
                    />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {element?.Title}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {element?.Description}
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:focus:ring-blue-800"
                    >
                        Add to Cart
                    </a>
                </div>
            </div>
        </li>
    ));
    return <>{listItems}</>;
}
