import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-4 h-[50px] max-auto flex">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-white text-sm">
          &copy; {currentYear} Luis Ramirez. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
