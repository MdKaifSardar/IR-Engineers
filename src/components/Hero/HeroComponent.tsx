import React from "react";
import { HeroImage } from "../../data/Hero";
import HeroText from "./HeroText";
import HeroButton from "./HeroButton";

const HeroCompoent: React.FC = () => {
  return (
    <div
      className="relative flex flex-col justify-center lg:justify-end items-center w-full h-full md:h-screen bg-cover bg-center py-40 md:py-0"
    >
      <img src={HeroImage} alt="hero img"  className="absolute h-full w-full z-[-1]"/>
      <HeroText/>
      <HeroButton/>
    </div>
  );
};

export default HeroCompoent;
