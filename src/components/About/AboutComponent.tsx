import React from "react";
import {
  MainTextFirst,
  MainTextSecond,
  SideText,
} from "../../data/Text/AboutText";
import { AboutSide1, AboutSide2 } from "../../data/Images/images";

const AboutComponent: React.FC = () => {
  return (
    <div className="py-5 relative h-full lg:h-screen flex flex-row items-center justify-center overflow-hidden w-full">
      <div className="px-10 z-30 lg:pl-[10%] w-full gap-5 md:gap-12 flex flex-col justify-center items-start">
        <div className="w-full lg:hidden flex flex-col justify-center items-center gap-2">
          <div className="text-[#003F63] sm:text-4xl text-3xl font-bold">
            {SideText.title}
          </div>
          <div className="text-center w-[95%] md:w-[60%]">{SideText.bottomText}</div>
        </div>
        <div className="lg:text-left text-center lg:w-[60%] w-[100%]">
          {MainTextFirst}
        </div>
        <div className="lg:text-left text-center lg:w-[80%] w-[100%]">
          {MainTextSecond}
        </div>
      </div>
      <div className="lg:flex hidden h-screen w-[40%] flex-col items-center mt-[30%]">
        <img
          src={AboutSide1}
          alt="side image"
          className="z-[-1] h-screen w-auto absolute top-0 right-0 object-fill"
        />
        <img
          src={AboutSide2}
          alt="side image"
          className="z-[-2] h-[90%] absolute bottom-0 right-40"
        />
        <div className="pr-[20%] text-xl font-sans text-white z-[1] gap-4 w-full flex-col justify-center items-end ">
          <div className="flex flex-col justify-center items-end gap-2">
            <div className="text-yellow-500 sm:text-4xl text-xl font-bold">
              {SideText.title}
            </div>
            <div className="text-right">{SideText.bottomText}</div>
          </div>
          <button className="w-fit px-[10%] py-1 border-[1px]">
            {SideText.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
