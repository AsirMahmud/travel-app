import React from "react";
import { BsChatDots } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-[1140px w-full p-4 m-auto border-t-4]">
      <div className="flex items-center justify-center m-auto ">
        <BsChatDots
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        ></BsChatDots>

        <h1 className="text-2xl font-bold">REDSTONE</h1>
      </div>
    </div>
  );
};

export default Footer;
