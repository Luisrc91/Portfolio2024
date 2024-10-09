import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./NavBar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }



  return (
    <div>
      
      <div className="bg-black h-[35px] text-gray-400">
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}

        </div>
      </div>
       
    </div>
  );
};

export default Navbar;
