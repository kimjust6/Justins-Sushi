import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import PartyTray from "./components/PartyTray";

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  return (
    <>
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
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
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
