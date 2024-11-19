import React from "react";
import AboutComponent from "../components/About/AboutComponent";
import CopyrightComponent from "../components/Copyright/CopyrightComponent";
import HeroCompoent from "../components/Hero/HeroComponent";
import Navbar from "../components/Navbar/Navbar";
import OurClientsComponent from "../components/OurClients/OurClientsComponent";
import OurServicesComp from "../components/OurServices/OurServicesComp";
import QuickLinksComp from "../components/QuickLinks/QuickLinksComp";
import SidePopupComponent from "../components/SidePopup/SidePopup";
import SiteVisitComponent from "../components/SiteVisit/SiteVisit";
import WhyChooseComp from "../components/WhyChooseUs/WhyChooseComp";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <SidePopupComponent />
      <HeroCompoent />
      <AboutComponent />
      <OurServicesComp />
      <WhyChooseComp />
      <div id="OurClientsComponent">
        <OurClientsComponent />
      </div>
      <SiteVisitComponent />
      <QuickLinksComp />
      <CopyrightComponent />
    </div>
  );
};

export default Home;
