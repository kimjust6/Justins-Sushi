import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        className="z-0 h-screen bg-center bg-cover bg-no-repeat flex justify-center"
        style={{
          backgroundImage: `url("https://i.imgur.com/7VGIWbb.jpg")`,
        }}
      >
        <ul className="z-10 w-4/5 flex h-7/8 items-center place-content-around ">
          <li className="">Party Tray</li>
          <li className="">Menu</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
