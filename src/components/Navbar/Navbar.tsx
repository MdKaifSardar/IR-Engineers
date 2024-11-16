import { Link } from "react-router-dom";
import { logo } from "../../data/Images/images";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="z-10 py-2 w-full h-fit fixed bg-[#353D40] flex flex-row justify-between px-5 items-center">
      <Link
        className="sm:w-[5%] w-[10%] h-fit"
        to="/"
        onClick={handleScrollToTop}
      >
        <img src={logo} alt="logo" className="w-full h-auto" />
      </Link>
      <div className="hidden w-[90%] md:flex flex-row justify-center items-center gap-5">
        <Link
          to="/whychooseus"
          className="md:text-xl text-md text-white font-sans font-semibold"
          onClick={handleScrollToTop}
        >
          Why Choose Us
        </Link>
        <Link
          to="/ourservice"
          className="md:text-xl text-md text-white font-sans font-semibold"
          onClick={handleScrollToTop}
        >
          Our Services
        </Link>
        <Link
          to="/whychooseus"
          className="md:text-xl text-md text-white font-sans font-semibold"
          onClick={handleScrollToTop}
        >
          Get a Visit
        </Link>
        <Link
          to="/whychooseus"
          className="md:text-xl text-md text-white font-sans font-semibold"
          onClick={handleScrollToTop}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile navbar */}
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
              <Link to="/whychooseus" onClick={handleScrollToTop}>
                Why Choose Us
              </Link>
            </li>
            <li className="hover:bg-slate-700 px-4 py-2 rounded">
              <Link to="/ourservice" onClick={handleScrollToTop}>
                Our Services
              </Link>
            </li>
            <li className="hover:bg-slate-700 px-4 py-2 rounded">
              <Link to="/" onClick={handleScrollToTop}>
                Get a Visit
              </Link>
            </li>
            <li className="hover:bg-slate-700 px-4 py-2 rounded">
              <Link to="/" onClick={handleScrollToTop}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
