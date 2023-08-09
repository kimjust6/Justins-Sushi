import React from "react";

const Footer = () => {
    return (
        <section className=" flex justify-center bg-stone-900 text-stone-50 py-5 z-30">
            <footer className=" w-10/12 flex justify-around">
                <div className="">
                    <h2 className="font-bold">Phone</h2>
                    <ul className="">
                        <li>416-908-4783</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="font-bold">Opening Hours</h2>
                    <ul className="">
                        <li>Mon - Thur 11:30 AM - 09:30 PM </li>
                        <li>Fri 11:00 AM - 10:00 PM </li>
                        <li>Sat 12:00 AM - 10:00 PM </li>
                        <li>Sun 12:00 AM - 09:30 PM</li>
                    </ul>
                </div>

                <div className="">
                    <h2 className="font-bold">Address</h2>
                    <ul className="">
                        <li>770 Don Mills Rd.</li>
                        <li> North York, ON </li>
                        <li> M3C 1T3</li>
                    </ul>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
