import React from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10">
      <img className="w-44" src={LOGO} alt="Logo" />
    </div>
  );
};

export default Header;
