import React from "react";
import uuid from "react-uuid";

const PartyTray = () => {
    return (
        <>
            <ul className="z-10 h-screen w-screen flex justify-center items-center place-content-around ">
                <li className="">Party Tray</li>
            </ul>
        </>
    );
};

export default PartyTray;

function renderList(list) {
    const listItems = list.map((element) => <li key={uuid()}>{element}</li>);
    return (
        <>
            <ul>{listItems}</ul>
        </>
    );
}
