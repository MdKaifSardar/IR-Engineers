import ContactForm from "../components/BookingVisit/BookVisitComponent";
import CopyrightComponent from "../components/Copyright/CopyrightComponent";
import DetailsComponent from "../components/Details/DetailsComponent";
import NavbarSecond from "../components/NavbarSecond/NavbarSecond";
import OurClientsComponent from "../components/OurClients/OurClientsComponent";
import QuickLinksComp from "../components/QuickLinks/QuickLinksComp";
import SidePopupComponent from "../components/SidePopup/SidePopup";

const WhyChooseUs = () => {
  return (
    <div className="w-full h-fit">
      <NavbarSecond title="Why Choose Us?"/>
      <SidePopupComponent/>
      <DetailsComponent />
      <OurClientsComponent />
      <ContactForm />
      <QuickLinksComp/>
      <CopyrightComponent/>
    </div>
  );
};

export default WhyChooseUs;
