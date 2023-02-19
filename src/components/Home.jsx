import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        className="z-0 h-screen bg-center bg-cover "
        style={{
          backgroundImage: `url("https://i.imgur.com/7VGIWbb.jpg")`,
        }}
      >
        <div className="z-10 flex h-2/5 items-end place-content-around text-stone-50 text-5xl lg:text-2xl font-semibold ">
          <div className="flex flex-col justify-between items-center h-1/3">
            <div className="select-none">
              CRAFTING THE PERFECT SUSHI EXPERIENCE, ONE TRAY AT A TIME
              {/* sushi, tray, person at a time */}
            </div>
            <div className="flex justify-center">
              <button class="outline-4 outline text-sm bg-stone-900 px-3 py-2 rounded-sm outline-stone-900 hover:bg-stone-300 hover:text-stone-900 ease-in-out duration-300 font-bold">
                VIEW MENU
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
