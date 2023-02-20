import React from "react";

const Sidebar = ({ isCartOpen, setIsCartOpen }) => {
  return (
    <>
      <main
        className={
          " z-40 fixed overflow-hidden z-10 bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out " +
          (isCartOpen
            ? " transition-opacity opacity-100 duration-300 translate-x-0  "
            : " transition-all delay-300 opacity-0 translate-x-full  ")
        }
      >
        <section
          className={
            " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl  duration-300 ease-in-out transition-all transform  " +
            (isCartOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
            <header className="p-4 font-bold text-lg">Header</header>
            Cart
          </article>
        </section>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsCartOpen(false);
          }}
        ></section>
      </main>
    </>
  );
};

export default Sidebar;
