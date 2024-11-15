import CarouselReviewComponent from "../components/CarouselReview/CarouselReviewComponent";
import ContactUsComponent from "../components/ContactUs/ContactUsComponent";
import CopyrightComponent from "../components/Copyright/CopyrightComponent";
import NavbarSecond from "../components/NavbarSecond/NavbarSecond";
import OurClientsComponent from "../components/OurClients/OurClientsComponent";
import ServicesDetailsComponent from "../components/OurServicesDetails/ServicesDetailsComponent";
import QuickLinksComp from "../components/QuickLinks/QuickLinksComp";

const OurServices = () => {
  return (
    <div className="w-full h-fit">
      <NavbarSecond title="Our Services" />
      <ServicesDetailsComponent />
      <ContactUsComponent />
      <OurClientsComponent />
      <CarouselReviewComponent />
      <QuickLinksComp />
      <CopyrightComponent />
    </div>
  );
};

export default OurServices;
