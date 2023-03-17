import React from "react";
import { RenderList } from "./Shared Components/RenderMenuList";

const Menu = () => {
    const list = [
        {
            Title: "Hae Dup Bap",
            Image: "https://i.imgur.com/rSP1qvt.jpg",
            Alt: "Menu Item",
            Description:
                "Assorted raw fish and fresh vegetables on the bed of rice w/ Korean sour and sweet spicy sauce",
            Price: "23",
            Pieces: "",
            ID: "1",
        },
        {
            Title: "Sushi Don",
            Image: "https://i.imgur.com/gtzTTpt.jpg",
            Alt: "Menu Item",
            Description: "Assorted raw seafood, avocado with special sauce on sushi rice",
            Price: "23",
            Pieces: "",
            ID: "2",
        },
        {
            Title: "Chicken Udon in Soup",
            Image: "https://i.imgur.com/0bIl50n.jpg",
            Alt: "Menu Item",
            Description: "Soup udon with chicken, noodles",
            Price: "17",
            Pieces: "",
            ID: "3",
        },
        {
            Title: "Tempura Udon",
            Image: "https://i.imgur.com/SNSwZMO.jpg",
            Alt: "Menu Item",
            Description: "2 Shrimp tempura and 4 vegetable in clear fish stock soup with udon",
            Price: "19",
            Pieces: "",
            ID: "4",
        },
        {
            Title: "Kalbi Appetizer (6 pieces)",
            Image: "https://i.imgur.com/01aOa08.jpg",
            Alt: "Menu Item",
            Description: "Korean BBQ rips",
            Price: "17",
            Pieces: "",
            ID: "5",
        },
        {
            Title: "Kalbi Dinner",
            Image: "https://i.imgur.com/wMre81b.jpg",
            Alt: "Menu Item",
            Description: "Korean style marinated BBQ beef ribs",
            Price: "35",
            Pieces: "",
            ID: "6",
        },
        {
            Title: "Atlantic Salmon Teriyaki Dinner",
            Image: "https://i.imgur.com/CsYuV1M.jpg",
            Alt: "Menu Item",
            Description: "Atlantic salmon grilled with teriyaki sauce",
            Price: "29",
            Pieces: "",
            ID: "6",
        },
        {
            Title: "Salmon Sashimi Boat Small",
            Image: "https://i.imgur.com/Sd70pt3.jpg",
            Alt: "Menu Item",
            Description: "Salmon sushi boat",
            Price: "27",
            Pieces: "15",
            ID: "6",
        },
        {
            Title: "Salmon Sushi Lover Small",
            Image: "https://i.imgur.com/0S5QH0Y.jpg",
            Alt: "Menu Item",
            Description: "Salmon sushi small",
            Price: "27",
            Pieces: "6",
            ID: "6",
        },
        {
            Title: "Salmon - Holic Combo",
            Image: "https://i.imgur.com/kO9G4XY.jpg",
            Alt: "Menu Item",
            Description:
                "Soup, salad, 4 pieces salmon sushi, 6 pieces salmon sashimi, 8 pieces super salmon",
            Price: "31",
            Pieces: "18",
            ID: "6",
        },
    ];
    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="flex justify-center items-center text-4xl font-bold mt-36 py-4 mb-6">
                    Main Menu
                </h2>
                <ul className="z-10 flex flex-wrap justify-center items-center">
                    {RenderList(list)}
                </ul>
            </div>
        </>
    );
};

export default Menu;
