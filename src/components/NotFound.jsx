import React from "react";

const NotFound = () => {
    var test = "nice"
    return (
        <>
            <ul className="z-10 h-screen w-screen flex justify-center items-center place-content-around flex-col">
                <li>{process.env.REACT_APP_TEST_VARIABLE}</li>
                <li>{test}</li>
                <li className="">404 page not found</li>
            </ul>
        </>
    );
};

export default NotFound;
