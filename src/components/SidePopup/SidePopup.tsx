import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { sidePopup } from "../../data/Images/images";

const SidePopupComponent = () => {
  return (
    <Link
      to="#"
      className="h-[5%] z-[4] fixed right-0 top-[50%]"
      onClick={() => window.open("mailto:contactus@irengineers.in")}
    >
      <img
        src={sidePopup}
        alt="side popup"
        className="object-fill w-full h-full"
      />
    </Link>
  );
};

export default SidePopupComponent;
