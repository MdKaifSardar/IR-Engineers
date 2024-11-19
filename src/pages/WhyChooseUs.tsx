import BookVisitComponent from "../components/BookingVisit/BookVisitComponent";
import CopyrightComponent from "../components/Copyright/CopyrightComponent";
import DetailsComponent from "../components/Details/DetailsComponent";
import NavbarSecond from "../components/NavbarSecond/NavbarSecond";
import OurClientsComponent from "../components/OurClients/OurClientsComponent";
import QuickLinksComp from "../components/QuickLinks/QuickLinksComp";
import SidePopupComponent from "../components/SidePopup/SidePopup";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const WhyChooseUs: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ block: "center" });
      }
    }
  }, [location]);

  return (
    <div className="w-full h-fit">
      <NavbarSecond title="Why Choose Us?" />
      <SidePopupComponent />
      <DetailsComponent />
      <div id="OurClientsComponent">
        <OurClientsComponent />
      </div>
      <div id="BookVisitComponent">
        <BookVisitComponent />
      </div>
      <QuickLinksComp />
      <CopyrightComponent />
    </div>
  );
};

export default WhyChooseUs;
