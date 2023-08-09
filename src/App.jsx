import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Shared Components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import PartyTray from "./components/PartyTray";
import NotFound from "./components/NotFound";

import "./App.css";

function App() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div className={navbarOpen ? "m-0 h-screen overflow-hidden" : ""}>
            <Navbar
                navbarOpen={navbarOpen}
                setNavbarOpen={setNavbarOpen}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/Menu"
                    element={
                        <>
                            <Menu />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/PartyTrays"
                    element={
                        <>
                            <PartyTray />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="*"
                    element={
                        <>
                            <NotFound />
                        </>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
