import React from "react";
import uuid from "react-uuid";

const PartyTray = () => {
    const list = [
        {
            Title: "Sashimi A",
            Image: "https://i.imgur.com/z3gQyeY.jpg",
            Alt: "Sushi tray",
            Description: "Chef’s choice of assorted raw sashimi, 24 pieces.",
            Price: "37",
            Pieces: "24",
        },
        {
            Title: "Sashimi B",
            Image: "https://i.imgur.com/nuGuXl3.jpg",
            Alt: "Sushi tray",
            Description: "chef’s choice assorted raw sashimi 45 pcs",
            Price: "65",
            Pieces: "45",
        },
        {
            Title: "Chef's Choice A",
            Image: "https://i.imgur.com/521CBJF.jpg",
            Alt: "Description of Image",
            Description: "california, dynamite, chef’s choice assorted raw sushi 14 pcs",
            Price: "29",
            Pieces: "28",
        },
        {
            Title: "Chef's Choice B",
            Image: "https://i.imgur.com/XaAUHLE.jpg",
            Alt: "Sushi tray",
            Description:
                "california, dynamite, aburi salmon. chef’s choice assorted raw sushi 28 pcs",
            Price: "49",
            Pieces: "50",
        },
        {
            Title: "Chef's Choice C",
            Image: "https://i.imgur.com/URzFrp1.jpg",
            Alt: "Sushi tray",
            Description:
                "california, dynamite, aburi salmon, green dragon. chef’s choice assorted raw sushi 40 pcs",
            Price: "69",
            Pieces: "70",
        },
        {
            Title: "Sushi A",
            Image: "https://i.imgur.com/6xZ8hxV.png",
            Alt: "Sushi tray",
            Description: "chef’s choice assorted raw sushi 24 pcs",
            Price: "33",
            Pieces: "24",
        },
        {
            Title: "Sushi B",
            Image: "https://i.imgur.com/NkS9wh7.jpg",
            Alt: "Sushi tray",
            Description: "chef’s choice assorted raw sushi 45 pcs",
            Price: "59",
            Pieces: "45",
        },

        {
            Title: "Roll Tray Small",
            Image: "https://i.imgur.com/HhO9nyt.jpg",
            Alt: "Sushi tray",
            Description:
                "california, salmon and avocado, dynamite, aburi salmon, chef’s choice aburi sushi 6 pcs.",
            Price: "27",
            Pieces: "34",
        },
        {
            Title: "Roll Tray Medium",
            Image: "https://i.imgur.com/5IfjCVG.jpg",
            Alt: "Sushi tray",
            Description:
                "California, salmon and avocado, yam, dynamite, aburi salmon, green dragon, double spicy salmon, chef’s choice aburi sushi 10 pcs. ",
            Price: "45",
            Pieces: "60",
        },
        {
            Title: "Roll Tray Large",
            Image: "https://i.imgur.com/4Me4faW.jpg",
            Alt: "Sushi tray",
            Description:
                "California, salmon and avocado, yam, spicy salmon, dynamite, aburi salmon, green dragon, double spicy salmon, Philadelphia, chef’s choice aburi sushi 18 pcs. ",
            Price: "59",
            Pieces: "82",
        },
        {
            Title: "Jumbo Roll Tray",
            Image: "https://i.imgur.com/fQ6FBNy.png",
            Alt: "Sushi tray",
            Description:
                "2*california, salmon and avocado, yam tempura roll, spicy yam tempura roll, spicy salmon, spicy tuna, spicy crabmeat, crabmeat tempura roll, avocado and cucumber, dynamite, aburi salmon roll, green dragon, double spicy salmon, rainbow dragon. *must placing this tray before 1 hours from your pick up time. *cannot modify any rolls. *limited : 1 tray per 1 person",
            Price: "65",
            Pieces: "100",
        },
    ];

    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="flex justify-center items-center text-4xl font-bold mt-36 py-4 mb-6">
                    Party Trays
                </h2>
                <ul className="z-10 flex flex-wrap justify-center items-center">
                    {renderList(list)}
                </ul>
            </div>
        </>
    );
};

export default PartyTray;

function renderList(list) {
    const listItems = list.map((element) => (
        <li key={uuid()}>
            <div className="lg:max-w-2xl mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-900 dark:border-stone-900 mx-5">
                <a href="#">
                    <img
                        className="rounded-t-lg min-w-2xl"
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
    return (
        <>
            {/* <div className="flex flex-col"></div> */}
            {listItems}
        </>
    );
}
