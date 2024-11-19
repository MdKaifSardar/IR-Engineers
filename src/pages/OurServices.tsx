import ContactUsComponent from "../components/ContactUs/ContactUsComponent";
import CopyrightComponent from "../components/Copyright/CopyrightComponent";
import NavbarSecond from "../components/NavbarSecond/NavbarSecond";
import OurClientsComponent from "../components/OurClients/OurClientsComponent";
import ServicesDetailsComponent from "../components/OurServicesDetails/ServicesDetailsComponent";
import QuickLinksComp from "../components/QuickLinks/QuickLinksComp";
import SidePopupComponent from "../components/SidePopup/SidePopup";
import BookVisitComponent from "../components/BookingVisit/BookVisitComponent";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OurServicePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the URL contains the scrollTo query parameter
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      // Scroll to the specified component instantly
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView(); // Instant scrolling
      }
    }
  }, [location]);

  return (
    <div>
      <NavbarSecond title="Our Services" />
      <SidePopupComponent />
      <ServicesDetailsComponent />
      <div id="ContactUsComponent">
        <ContactUsComponent />
      </div>
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

export default OurServicePage;
