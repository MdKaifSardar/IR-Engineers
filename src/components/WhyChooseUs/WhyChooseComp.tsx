import { WhChU1, WhChU2 } from "../../data/Images/images";
import { WhyChooseUsText } from "../../data/Text/WhyChooseUs";

const WhyChooseComp = () => {
  return (
    <div className="border-b-[2px] border-blue-900  lg:py-0 py-5 md:py-20 relative flex w-full lg:h-screen h-full flex-row justify-end items-center">
      <div className="lg:block hidden lg:w-full lg:h-screen h-full absolute left-[-20%] ">
        <img
          src={WhChU1}
          alt="side image"
          className="z-[1] h-[100%] absolute bottom-0 left-0 object-fill"
        />
        <img
          src={WhChU2}
          alt="side image"
          className="z-[-1] absolute h-[90%] bottom-0 object-fill left-[15%]"
        />
      </div>
      <div className="lg:pr-[8%] px-10 lg:w-[60%] w-[100%] gap-4 flex flex-col justify-center items-center lg:items-end">
        <div className="sm:text-4xl text-3xl font-bold text-[#003F63]">
          {WhyChooseUsText.title}
        </div>
        <div className="z-[2] gap-10 flex flex-col justify-center items-center lg:items-end">
          {WhyChooseUsText.mainText.map((text, index) => (
            <div className="lg:text-right text-center" key={index}>{text}</div>
          ))}
        </div>
        <button className="py-2 px-6 border-[1px] sm:text-2xl text-xl text-blue-900 border-blue-900">
          {WhyChooseUsText.buttontext}
        </button>
      </div>
    </div>
  );
};

export default WhyChooseComp;
