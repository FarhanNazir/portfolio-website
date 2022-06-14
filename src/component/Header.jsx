import React from "react";
import Logo from "../img/logo.png";

const Header = () => {
  return (
    <nav className="relative containe mx-auto px-20 shadow-md">
      <div className="flex items-center justify-between">
        <div className="">
          <img src={Logo} alt="" className="h-20 w-22 pt-2" />
        </div>
        <div className="hidden md:flex space-x-6 text-lg font-bold">
          <a href="#">Home</a>
          <a href="#">Work</a>
          <a href="#">About</a>
        </div>
      </div>
    </nav>
  );
};
export default Header;
