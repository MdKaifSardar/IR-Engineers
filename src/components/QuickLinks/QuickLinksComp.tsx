import { Links, Social } from "../../data/Text/QuickLinks";
import { logo } from "../../data/Images/images";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LogoTextComponent from "./LogoTextComponent";

interface LinkItem {
  text: string;
  url: string;
}

const QuickLinksComp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link: LinkItem) => {
    const currentPath = location.pathname;

    // Links that should just navigate to their URLs
    if (link.text === "Our Services" || link.text === "Why Choose Us") {
      navigate(link.url);
      window.scrollTo(0, 0);
      return;
    }

    const componentMap: Record<string, { path: string[]; scrollTo: string }> = {
      "Our Clients": {
        path: ["/", "/ourservice", "/whychooseus"],
        scrollTo: "OurClientsComponent",
      },
      "Book A Visit": {
        path: ["/ourservice", "/whychooseus"],
        scrollTo: "BookVisitComponent",
      },
      "Contact Us": {
        path: ["/ourservice"],
        scrollTo: "ContactUsComponent",
      },
    };

    const target = componentMap[link.text];

    if (target) {
      if (target.path.includes(currentPath)) {
        // Scroll within the same page
        const element = document.getElementById(target.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "instant", block: "center" });
        }
      } else {
        // Navigate to the target page with scrollTo parameter
        navigate(`${target.path[0]}?scrollTo=${target.scrollTo}`);
      }
    }
  };

  return (
    <div className="py-3 bg-[#353D40] flex flex-row justify-evenly items-center w-full">
      <div className="flex flex-col justify-center items-start gap-2">
        <span className="text-left sm:text-2xl text-md font-sans font-semibold text-yellow-500">
          Quick Links
        </span>
        {Links.map((link, index) => (
          <button
            key={index}
            className="text-left text-white sm:text-xl text-sm"
            onClick={() => handleLinkClick(link)}
          >
            {link.text}
          </button>
        ))}
      </div>
      <div className="md:hidden flex flex-col justify-center items-center">
        <div className="md:text-2xl text-lg text-white text-center">
          Get In Touch
        </div>
        <div className="flex flex-row justify-center items-center">
          {Social.map((link, index) => (
            <Link to={link.url} key={index}>
              <img
                className="h-8 md:h-10 w-8 md:w-10"
                src={link.image}
                alt="social image"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="md:block hidden">
        <LogoTextComponent />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={logo}
          className="w-[15vh] md:w-20 h-[15vh] md:h-20"
          alt="company logo"
        />
        <div className="md:flex hidden flex-row justify-center items-center">
          {Social.map((link, index) => (
            <Link to={link.url} key={index}>
              <img
                className="h-8 md:h-10 w-8 md:w-10"
                src={link.image}
                alt="social image"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinksComp;
