import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <div className="bg-black h-[90px] text-gray-400 max-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent ml-4">
          Luis Ramirez
        </h1>
        <ul className="hidden md:flex">
          <li className="p-5 transition duration-300 hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="p-5 transition duration-300 hover:text-red-500">
            <Link to="/About">About</Link>
          </li>
          <li className="p-5 transition duration-300 hover:text-red-500">
            <Link to="/MainProjects">Projects</Link>
          </li>
          <li className="p-5 transition duration-300 hover:text-red-500">
            <Link to="/ContactMe">Contact</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden mr-6">
          {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
        </div>
        <div
          ref={navRef}
          className={
            nav
              ? "rounded fixed h-full right-0 top-20 w-[40%] bg-[#0c0c0c] ease-in-out duration-400"
              : "fixed right-[-100%]"
          }
        >
          <h1 className="text-3xl primary-color m-4">Menu</h1>
          <ul className="p-8 text-2xl">
            <li className="p-2 transition duration-300 hover:text-red-500">
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="p-2 transition duration-300 hover:text-red-500">
              <Link to="/About" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="p-2 transition duration-300 hover:text-red-500">
              <Link to="/MainProjects" onClick={handleLinkClick}>
                Projects
              </Link>
            </li>
            <li className="p-2 transition duration-300 hover:text-red-500">
              <Link to="/ContactMe" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
