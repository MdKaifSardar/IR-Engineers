import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { logo, nav1, nav2, navbarSecond } from "../../data/Images/images";
import { useState } from "react";

const NavbarSecond = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-[20vh] md:h-[40vh] overflow-hidden relative">
      <div className="pb-3 pr-3 md:p-10 absolute bottom-0 right-0 text-right text-black font-semibold text-xl md:text-4xl font-sans z-[0]">
        {title}
      </div>
      <img
        src={navbarSecond}
        alt="second navbar"
        className="z-[-2] absolute w-full h-full object-cover opacity-60 blur-xs"
        style={{ objectPosition: "0% 10%" }}
      />
      <img
        src={nav1}
        alt="side image"
        className="z-[2] left-0 h-[100%] w-auto absolute top-0 right-0 object-contain"
      />
      <img
        src={nav2}
        alt="side image"
        className="z-[-1] h-[70%] absolute bottom-0 left-[10%] sm:left-[7%] md:left-[11%] lg:left-[6%] object-contain"
      />
      <Link to="/">
        <img
          src={logo}
          alt="company logo"
          className="z-[2] ml-5 absolute inset-0 my-auto h-[40%] object-contain"
        />
      </Link>
      <div className="custom-shadow z-[1] py-2 w-full h-[5%] md:h-[10%] fixed bg-[#353D40] flex flex-row justify-between px-5 items-center">
        {/* <div className="custom-shadow absolute bottom-0 left-0 w-full"/> */}
        <div className="hidden md:flex flex-row justify-center items-center gap-5 h-fit w-full">
          <Link
            to="/whychooseus"
            className="md:text-xl text-md text-white font-sans font-semibold"
          >
            Why Choose Us
          </Link>
          <Link
            to="/ourservice"
            className="md:text-xl text-md text-white font-sans font-semibold"
          >
            Our Services
          </Link>
          <Link
            to="/"
            className="md:text-xl text-md text-white font-sans font-semibold"
          >
            Get a visit
          </Link>
          <Link
            to="/"
            className="md:text-xl text-md text-white font-sans font-semibold"
          >
            Contact Us
          </Link>
        </div>
        <div className="z-[2] w-full flex flex-row justify-end items-center md:hidden">
          <IoMdMenu
            className="text-center text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div
            className={`absolute w-[65%] right-0 top-8 bg-[#353D40] transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col justify-center items-center space-y-2 text-white text-lg py-4 px-4">
              <li className="hover:bg-slate-700 px-4 py-2 rounded">
                <Link to="/whychooseus">Why Choose Us</Link>
              </li>
              <li className="hover:bg-slate-700 px-4 py-2 rounded">
                <Link to="/ourservice">Our Services</Link>
              </li>
              <li className="hover:bg-slate-700 px-4 py-2 rounded">
                <Link to="/">Get a Visit</Link>
              </li>
              <li className="hover:bg-slate-700 px-4 py-2 rounded">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSecond;
