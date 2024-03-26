// NavBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container flex justify-between items-center">
        <h1 className="logo" style={{ marginBottom: "0" }}>
  <span>
    <img src="./IMG_20240302_192729 (1).png" alt="Logo" width="50" height="100" />
  </span>
  <span style={{ fontWeight: "bold", color: "#d62828" }}>R</span>ishus{" "}
  <span style={{ fontWeight: "bold", color: "#d62828" }}>I</span>nfotech
</h1>

          <button
            className="md:hidden text-white text-xl"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:flex-row md:space-x-4`}
          >
            <li className="hover:text-green-600 text-[20px]">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-green-600 text-[20px]">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-green-600 text-[20px]">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-green-600 text-[20px]">
              <Link to="/career">Career</Link>
            </li>
            <li className="hover:text-green-600 text-[20px]">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
