import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import useDarkMode from "../useDarkMode";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };

  return (
    <nav className=" mx-auto px-2 md:px-20 dark:text-cyan-300 shadow-md sticky top-0 bg-white transition-colors duration-700 dark:bg-gray-900 ">
      <div className="flex items-center justify-between h-16">
        <div className="font-bold text-base  ">FARHAN NAZIR</div>
        <div className="flex items-center md:space-x-6 space-x-3">
          <div className="hidden md:flex space-x-6 text-lg font-bold ">
            <a
              href="#home"
              onClick={handleClick}
              className="hover:text-cyan-500"
            >
              Home
            </a>
            <a
              href="#work"
              onClick={handleClick}
              className="hover:text-cyan-500"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={handleClick}
              className="hover:text-cyan-500"
            >
              About
            </a>
          </div>
          <div className="inline-flex justify-center w-full rounded-md border shadow-sm p-0.75  dark:bg-orange-300 bg-purple-400 text-sm font-medium text-gray-700">
            {colorTheme === "light" ? (
              <button onClick={() => setTheme("light")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-[20px] w-[20px] m-2 "
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
              </button>
            ) : (
              <button onClick={() => setTheme("dark")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[20px] w-[20px] m-2 "
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </button>
            )}
          </div>
          <Menu as="div" className="md:hidden relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border shadow-sm p-0.75 transition-colors duration-700  dark:bg-gray-900  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[20px] w-[20px] m-2 "
                  viewBox="0 0 20 20"
                  fill={colorTheme === "light" ? "white" : "black"}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-[13px] w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#Home"
                        onClick={handleClick}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Home
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#work"
                        onClick={handleClick}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Work
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#about"
                        onClick={handleClick}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        About
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};
export default Header;
