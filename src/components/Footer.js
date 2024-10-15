import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-6 h-auto max-auto  ">
      <div className="w-full h-0.5 bg-gradient-to-l from-gray-900 to-gray-700"></div>
      <div className="max-w-screen-xl mx-auto text-center mt-2">
        <p className="text-white text-sm">
          &copy; {currentYear} Luis Ramirez. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
