import { BsChatSquareDots } from "react-icons/bs";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className="flex justify-between   items-center px-4 py-2">
      <div className="flex items-center">
        <BsChatSquareDots
          size={30}
          className="text-[var(--primary-dark)] mr-3"
        ></BsChatSquareDots>
        <h1 className="text-xl font-bold text-gray-700">REDSTONE</h1>
      </div>
      <div className="flex  ">
        <div className="hidden md:flex items-center px-6 ">
          <AiOutlineClockCircle className="mr-1 text-[var(--primary-dark)]"></AiOutlineClockCircle>
          <p className="text-sm text-gray-700">9pm - 8pm</p>
        </div>
        <div className="hidden md:flex items-center px-6 ">
          <AiFillPhone className="mr-1 text-[var(--primary-dark)]">
            {" "}
          </AiFillPhone>
          <p className="text-sm text-gray-700">01816295343</p>
        </div>
        <div className="p-1 sm:">
          <button className="p-1 m-2 text-sm">GET A Free Quote</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
