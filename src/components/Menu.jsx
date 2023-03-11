import React from "react";

const Menu = () => {
    const list = [
        {
            Title: "Hae Dup Bap",
            Image: "https://i.imgur.com/rSP1qvt.jpg",
            Alt: "Menu Item",
            Description: "Assorted raw fish and fresh vegetables on the bed of rice w/ Korean sour and sweet spicy sauce",
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
            ID: "1",
        },
        {
            Title: "Chicken Udon in Soup",
            Image: "https://i.imgur.com/0bIl50n.jpg",
            Alt: "Menu Item",
            Description: "Soup udon with chicken, noodles",
            Price: "23",
            Pieces: "",
            ID: "1",
        },
    ];
    return (
        <>
            <ul className="z-10 h-screen w-screen flex justify-center items-center place-content-around ">
                <li className="">Menu</li>
            </ul>
        </>
    );
};

export default Menu;
