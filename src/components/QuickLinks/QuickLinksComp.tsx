import { Links, Social } from "../../data/Text/QuickLinks";
import { logo } from "../../data/Images/images";
import { Link } from "react-router-dom";

const QuickLinksComp = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="py-3 bg-[#353D40] flex flex-row justify-evenly items-center w-full">
      <div className="flex flex-col justify-center items-start gap-2">
        <span className="text-left sm:text-2xl text-md font-sans font-semibold text-yellow-500">
          Quick Links
        </span>
        {Links.map((link, index) => (
          <Link
            to={link.url}
            key={index}
            className="text-left text-white sm:text-xl text-sm"
            onClick={handleLinkClick}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="md:text-2xl text-lg text-white text-center">
          Get In Touch
        </div>
        <div className="flex flex-row justify-center items-center">
          {Social.map((link, index) => (
            <Link to={link.url} key={index} onClick={handleLinkClick}>
              <img
                className="h-8 md:h-10 w-8 md:w-10"
                src={link.image}
                alt="social image"
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <img
          src={logo}
          className="w-20 md:w-40 h-20 md:h-40"
          alt="company logo"
        />
      </div>
    </div>
  );
};

export default QuickLinksComp;
