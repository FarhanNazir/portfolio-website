import React from "react";
import Logo from "../img/logo.png";

const Header = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 66,
    });
  };

  return (
    <nav className=" containe mx-auto px-20 py-[20px] shadow-md sticky top-0  bg-indigo-600">
      <div className="flex items-center justify-between">
        <div className="font-bold text-lg">FARHAN NAZIR</div>
        <div className="hidden md:flex space-x-6 text-lg font-bold">
          <a href="#home" onClick={handleClick}>
            Home
          </a>
          <a href="#work" onClick={handleClick}>
            Work
          </a>
          <a href="#about" onClick={handleClick}>
            About
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Header;
