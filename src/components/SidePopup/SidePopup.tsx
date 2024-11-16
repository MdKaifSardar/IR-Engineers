import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { sidePopup } from "../../data/Images/images";

const SidePopupComponent = () => {
  const handleClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Open dial pad for mobile devices
      window.location.href = "tel:+918910001691";
    } else {
      // Open WhatsApp chat for desktop devices
      window.open("https://wa.me/918910001691", "_blank");
    }
  };

  return (
    <Link
      to="#"
      className="h-[4%] sm:h-[5%] z-[4] fixed right-0 top-[50%]"
      onClick={handleClick}
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
