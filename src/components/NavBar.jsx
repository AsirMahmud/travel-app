import { useState } from "react";
import {
  FaFacebookF,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNavClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center bg-gray-700/80  text-white">
      <ul className={`hidden sm:flex px-4 ${nav ? "hidden" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>

      <div className={nav ? "hidden" : "flex justify-between"}>
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlus className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>

      <div className="sm:hidden z-10">
        {/* Hamburger Icon */}
        <FaBars
          size={20}
          className="mr-4 cursor-pointer"
          onClick={handleNavClick}
        />
      </div>

      {/* Mobile Icons */}
      {nav && (
        <div>
          {" "}
          <div
            className={
              "overflow-y-hidden md:hidden ease-in duration-300 z-10 text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-4 flex flex-col w-full fixed  "
            }
          >
            <div className="p-4 cursor-pointer ">
              <FaTimes onClick={handleNavClick} size={40}></FaTimes>
            </div>
            <ul className="h-full w-full text-center p-20">
              <li>
                <a href="#home" className="text-2xl" onClick={handleNavClick}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-2xl"
                  onClick={handleNavClick}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a href="#deals" className="text-2xl" onClick={handleNavClick}>
                  Deals
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-2xl"
                  onClick={handleNavClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
