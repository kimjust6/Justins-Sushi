import React from "react";

import { RenderList } from "./Shared Components/RenderMenuList";

const PartyTray = () => {
    const list = [
        {
            Title: "Sashimi A",
            // Image: "https://i.imgur.com/z3gQyeY.jpg",
            Image: "https://i.imgur.com/DCyZ5dK.jpg",
            Alt: "Sushi tray",
            Description: "Chef's choice of assorted raw sashimi, 24 pieces.",
            Price: "37",
            Pieces: "24",
            ID: "1",
        },
        {
            Title: "Sashimi B",
            // Image: "https://i.imgur.com/nuGuXl3.jpg",
            Image: "https://i.imgur.com/kFaDMYh.jpg",
            Alt: "Sushi tray",
            Description: "Chef's choice assorted raw sashimi 45 pieces.",
            Price: "65",
            Pieces: "45",
            ID: "2",
        },
        {
            Title: "Chef's Choice A",
            // Image: "https://i.imgur.com/521CBJF.jpg",
            Image: "https://i.imgur.com/uY36syl.jpg",
            Alt: "Description of Image",
            Description: "California, dynamite, chef's choice assorted raw sushi 14 pieces.",
            Price: "29",
            Pieces: "28",
            ID: "3",
        },
        {
            Title: "Chef's Choice B",
            // Image: "https://i.imgur.com/XaAUHLE.jpg",
            Image: "https://i.imgur.com/a0S8lqe.jpg",
            Alt: "Sushi tray",
            Description:
                "California, dynamite, aburi salmon. chef's choice assorted raw sushi 28 pieces.",
            Price: "49",
            Pieces: "50",
            ID: "4",
        },
        {
            Title: "Chef's Choice C",
            // Image: "https://i.imgur.com/URzFrp1.jpg",
            Image: "https://i.imgur.com/q0U0rKB.jpg",
            Alt: "Sushi tray",
            Description:
                "California, dynamite, aburi salmon, green dragon. chef's choice assorted raw sushi 40 pieces.",
            Price: "69",
            Pieces: "70",
            ID: "5",
        },
        {
            Title: "Sushi A",
            // Image: "https://i.imgur.com/6xZ8hxV.png",
            Image: "https://i.imgur.com/jRYlkkJ.png",
            Alt: "Sushi tray",
            Description: "Chef's choice assorted raw sushi 24 pieces.",
            Price: "33",
            Pieces: "24",
        },
        {
            Title: "Sushi B",
            // Image: "https://i.imgur.com/NkS9wh7.jpg",
            Image: "https://i.imgur.com/5nxlb4Q.jpg",
            Alt: "Sushi tray",
            Description: "Chef's choice assorted raw sushi 45 pieces.",
            Price: "59",
            Pieces: "45",
            ID: "6",
        },

        {
            Title: "Roll Tray Small",
            // Image: "https://i.imgur.com/HhO9nyt.jpg",
            Image: "https://i.imgur.com/nvLvZjM.jpg",
            Alt: "Sushi tray",
            Description:
                "California, salmon and avocado, dynamite, aburi salmon, chef's choice aburi sushi 6 pieces.",
            Price: "27",
            Pieces: "34",
            ID: "7",
        },
        {
            Title: "Roll Tray Medium",
            // Image: "https://i.imgur.com/5IfjCVG.jpg",
            Image: "https://i.imgur.com/nZ5MvWg.jpg",
            Alt: "Sushi tray",
            Description:
                "California, salmon and avocado, yam, dynamite, aburi salmon, green dragon, double spicy salmon, chef's choice aburi sushi 10 pieces. ",
            Price: "45",
            Pieces: "60",
            ID: "8",
        },
        {
            Title: "Roll Tray Large",
            // Image: "https://i.imgur.com/4Me4faW.jpg",
            Image: "https://i.imgur.com/KwOhh7F.jpg",
            Alt: "Sushi tray",
            Description:
                "California, salmon and avocado, yam, spicy salmon, dynamite, aburi salmon, green dragon, double spicy salmon, Philadelphia, chef's choice aburi sushi 18 pieces. ",
            Price: "59",
            Pieces: "82",
            ID: "9",
        },
        {
            Title: "Jumbo Roll Tray",
            // Image: "https://i.imgur.com/fQ6FBNy.png",
            Image: "https://i.imgur.com/sqrHfMp.png",
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
