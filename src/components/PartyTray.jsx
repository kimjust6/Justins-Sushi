import React from "react";
import uuid from "react-uuid";
import { useSelector, useDispatch } from "react-redux";
import {
    incrementByAmount,
    addToCart,
    decrementFromCart,
    deleteFromCart,
    emptyCart,
} from "../state/cartSlice";

import { RenderList } from "./Shared Components/RenderMenuList";

const PartyTray = () => {
    const list = [
        {
            Title: "Sashimi A",
            Image: "https://i.imgur.com/z3gQyeY.jpg",
            Alt: "Sushi tray",
            Description: "Chef's choice of assorted raw sashimi, 24 pieces.",
            Price: "37",
            Pieces: "24",
            ID: "1",
        },
        {
            Title: "Sashimi B",
            Image: "https://i.imgur.com/nuGuXl3.jpg",
            Alt: "Sushi tray",
            Description: "chef's choice assorted raw sashimi 45 pcs",
            Price: "65",
            Pieces: "45",
            ID: "2",
        },
        {
            Title: "Chef's Choice A",
            Image: "https://i.imgur.com/521CBJF.jpg",
            Alt: "Description of Image",
            Description: "california, dynamite, chef's choice assorted raw sushi 14 pcs",
            Price: "29",
            Pieces: "28",
            ID: "3",
        },
        {
            Title: "Chef's Choice B",
            Image: "https://i.imgur.com/XaAUHLE.jpg",
            Alt: "Sushi tray",
            Description:
                "california, dynamite, aburi salmon. chef's choice assorted raw sushi 28 pcs",
            Price: "49",
            Pieces: "50",
            ID: "4",
        },
        {
            Title: "Chef's Choice C",
            Image: "https://i.imgur.com/URzFrp1.jpg",
            Alt: "Sushi tray",
            Description:
                "california, dynamite, aburi salmon, green dragon. chef's choice assorted raw sushi 40 pcs",
            Price: "69",
            Pieces: "70",
            ID: "5",
        },
        {
            Title: "Sushi A",
            Image: "https://i.imgur.com/6xZ8hxV.png",
            Alt: "Sushi tray",
            Description: "chef's choice assorted raw sushi 24 pcs",
            Price: "33",
            Pieces: "24",
        },
        {
            Title: "Sushi B",
            Image: "https://i.imgur.com/NkS9wh7.jpg",
            Alt: "Sushi tray",
            Description: "chef's choice assorted raw sushi 45 pcs",
            Price: "59",
            Pieces: "45",
            ID: "6",
        },

        {
            Title: "Roll Tray Small",
            Image: "https://i.imgur.com/HhO9nyt.jpg",
            Alt: "Sushi tray",
            Description:
                "california, salmon and avocado, dynamite, aburi salmon, chef's choice aburi sushi 6 pcs.",
            Price: "27",
            Pieces: "34",
            ID: "7",
        },
        {
            Title: "Roll Tray Medium",
            Image: "https://i.imgur.com/5IfjCVG.jpg",
            Alt: "Sushi tray",
            Description:
                "California, salmon and avocado, yam, dynamite, aburi salmon, green dragon, double spicy salmon, chef's choice aburi sushi 10 pcs. ",
            Price: "45",
            Pieces: "60",
            ID: "8",
        },
        {
            Title: "Roll Tray Large",
            Image: "https://i.imgur.com/4Me4faW.jpg",
            Alt: "Sushi tray",
            Description:
                "California, salmon and avocado, yam, spicy salmon, dynamite, aburi salmon, green dragon, double spicy salmon, Philadelphia, chef's choice aburi sushi 18 pcs. ",
            Price: "59",
            Pieces: "82",
            ID: "9",
        },
        {
            Title: "Jumbo Roll Tray",
            Image: "https://i.imgur.com/fQ6FBNy.png",
            Alt: "Sushi tray",
            Description:
                "2*california, salmon and avocado, yam tempura roll, spicy yam tempura roll, spicy salmon, spicy tuna, spicy crabmeat, crabmeat tempura roll, avocado and cucumber, dynamite, aburi salmon roll, green dragon, double spicy salmon, rainbow dragon. *must placing this tray before 1 hours from your pick up time. *cannot modify any rolls. *limited : 1 tray per 1 person",
            Price: "65",
            Pieces: "100",
            ID: "10",
        },
    ];

    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="flex justify-center items-center text-4xl font-bold mt-36 py-4 mb-6">
                    Party Trays
                </h2>
                <ul className="z-10 flex flex-wrap justify-center items-center">
                    {RenderList(list)}
                </ul>
            </div>
        </>
    );
};

export default PartyTray;
