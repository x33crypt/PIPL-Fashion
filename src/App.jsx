import React, { createContext, useState } from "react";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Sourcing from "./components/Sourcing/Sourcing";
import Providing from "./components/Providing/Providing";
import Elevating from "./components/Elevating/Elevating";
import Empowered from "./components/Empowered/Empowered";
import Commitment from "./components/Commitment/Commitment";
import Symphony from "./components/Symphony/Symphony";
import Shinning from "./components/Shinning/Shinning";
import Reachout from "./components/Reachout/Reachout";
import NavOption from "./components/NavOption/NavOption";

export const navStatusContext = createContext();

const App = () => {
  const [navOption, setNavOption] = useState(false);

  return (
    <>
      <navStatusContext.Provider value={{ navOption, setNavOption }}>
        <Nav />
        <NavOption />
        <Hero />
        <Sourcing />
        <Providing />
        <Elevating />
        <Empowered />
        <Commitment />
        <Symphony />
        <Shinning />
        <Reachout />
      </navStatusContext.Provider>
    </>
  );
};

export default App;
