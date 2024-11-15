import { OurService } from "../../data/Images/images";
import { BoxContent, MainText } from "../../data/Text/OurServices";

const OurServicesComp = () => {
  return (
    <div className="relative gap-5 py-5 flex flex-col justify-center items-center w-full OurService bg-contain">
      <img
        src={OurService}
        className="absolute w-full h-full z-[-1]"
        alt="bg-image"
      />
      <div className="gap-2 flex flex-col justify-center items-center">
        <div className="sm:text-4xl text-3xl text-yellow-500 font-bold">
          {MainText.title}
        </div>
        <div className="w-[90%] text-center text-white sm:text-xl text-sm">
          {MainText.mainText}
        </div>
      </div>
      <div className="gap-3 md:gap-6 flex flex-wrap justify-center items-center w-[90%] md:w-[100%]">
        {BoxContent.map((text, index) => (
          <div
            className="relative flex flex-row justify-center text-center items-center w-[20vh] sm:w-[23vh] md:w-[32vh] h-[20vh] sm:h-[23vh] md:h-[32vh]"
            key={index}
          >
            <img
              src={text.image}
              alt={text.title}
              className="z-[-1] absolute w-full h-full top-0 object-cover"
            />
            <span className="z-[-1] text-white md:text-lg text-xl font-bold text-center">{text.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesComp;
