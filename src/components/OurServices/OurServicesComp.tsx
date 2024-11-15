import { OurService } from "../../data/Images/images";
import { BoxContent, MainText } from "../../data/Text/OurServices";

const OurServicesComp = () => {
  return (
    <div className="relative gap-5 py-5 flex flex-col justify-center items-center w-full OurService bg-contain">
      <img src={OurService} className="absolute w-full h-full z-[-1]" alt="" />
      <div className="gap-2 flex flex-col justify-center items-center">
        <div className="sm:text-4xl text-3xl text-yellow-500 font-bold">
          {MainText.title}
        </div>
        <div className="w-[90%] text-center text-white sm:text-xl text-sm">{MainText.mainText}</div>
      </div>
      <div className="w-full gap-6 flex flex-wrap justify-center items-center ">
        {BoxContent.map((text, index) => (
          <div
            className="flex flex-col justify-center text-center items-center w-[25vh] md:w-[32vh] h-[25vh] md:h-[32vh] bg-gray-300"
            key={index}
          >
            {text}
          </div>
        ))}
      </div>
      <div>
        <button className="border-[1px] text-white px-3 py-1"></button>
      </div>
    </div>
  );
};

export default OurServicesComp;
