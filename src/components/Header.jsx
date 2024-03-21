import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="w-full fixed z-10">
        <nav className="py-2.5 border-gray-200 bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <Link to={"/"}>
              <span className="flex items-center">
                <img
                  src="https://demo.themesberg.com/landwind/images/logo.svg"
                  className=" mr-3 sm:h-9"
                  alt="Landwind Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  SLMS
                </span>
              </span>
            </Link>

            <div
              className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <span className="block  pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    {" "}
                    <Link to={"/"}>Home</Link>
                  </span>
                </li>
                <li>
                  <span className="block  pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    <Link to={"/books"}>Books</Link>
                  </span>
                </li>
                <li>
                  <span className="block  pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    <Link to={"/profile"}>Profile</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
