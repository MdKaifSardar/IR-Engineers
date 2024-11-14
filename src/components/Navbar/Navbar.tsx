import { Link } from "react-router-dom";
import { logo } from "../../data/Images/images";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="z-[10] py-2 w-full h-fit fixed bg-gray-800 flex flex-row justify-between px-5 items-center">
      <Link className="sm:w-[5%] w-[10%] h-fit" to="/">
        <img src={logo} alt="logo" className="w-full h-auto" />
      </Link>
      <div className="hidden w-[90%] md:flex flex-row justify-center items-center gap-5">
        <Link
          to="/whychooseus"
          className="md:text-xl text-md text-white font-sans font-semibold"
        >
          Why Choose Us
        </Link>
        <Link
          to="/whychooseus"
          className="md:text-xl text-md text-white font-sans font-semibold"
        >
          Our Services
        </Link>
        <Link
          to="/whychooseus"
          className="md:text-xl text-md text-white font-sans font-semibold"
        >
          Get a visit
        </Link>
        <Link
          to="/whychooseus"
          className="md:text-xl text-md text-white font-sans font-semibold"
        >
          Contact Us
        </Link>
      </div>
      <div className="block md:hidden">
        <IoMdMenu className="text-center text-white text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
