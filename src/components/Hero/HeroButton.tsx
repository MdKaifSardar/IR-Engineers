import { Link } from "react-router-dom";

const HeroButton = () => {
  return (
    <div className="p-[1px] mb-0 md:mb-12 w-fit flex flex-row justify-center items-center rounded-full bg-yellow-400">
      <Link
        to="/ourservice"
        className="px-2 py-1 md:p-3 bg-transparent text-md md:text-xl rounded-full"
      >
        Our Services
      </Link>
      <Link
        to="/ourservice?scrollTo=BookVisitComponent"
        className="px-2 py-1 md:p-3 bg-[#003F63] text-md md:text-xl text-white font-sans rounded-full"
      >
        Book a Visit
      </Link>
    </div>
  );
};

export default HeroButton;
