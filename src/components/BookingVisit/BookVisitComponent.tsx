import { Contact1, Contact2 } from "../../data/Images/images";
import ContactForm from "./ContactForm";

const WhyChooseComp = () => {
  return (
    <div className="border-b-[2px] border-blue-900 lg:py-0 py-5 md:py-20 relative flex w-full lg:h-screen h-full flex-row justify-end items-center">
      <div className="lg:block hidden lg:w-full lg:h-screen h-full absolute left-[-10%]">
        <img
          src={Contact1}
          alt="side image"
          className="z-[-1] h-[90%] absolute bottom-0 left-[15%] object-cover"
        />
        <img
          src={Contact2}
          alt="side image"
          className="z-[1] absolute h-[100%] bottom-0 object-cover left-0"
        />
      </div>
      <div className="lg:pr-[8%] px-10 lg:w-[45%] w-[100%] gap-4 flex flex-col justify-center bg-transparent items-center lg:items-end rounded-2xl">
        <ContactForm />
      </div>
    </div>
  );
};

export default WhyChooseComp;
