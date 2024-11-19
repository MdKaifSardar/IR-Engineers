import { Contact1, Contact2 } from "../../data/Images/images";
import { bookVisitText } from "../../data/Text/BookAVisit";
import ContactForm from "./ContactForm";

const BookVisitComponent = () => {
  return (
    <div className="border-b-[2px] border-blue-900 lg:py-0 py-10 md:py-10 relative flex w-full lg:h-screen h-fit lg:flex-row flex-col lg:justify-end justify-center items-center gap-4 lg:gap-0">
      <div className="flex-col justify-center items-start lg:flex hidden lg:w-full lg:h-screen h-full absolute left-[-10%]">
        <img
          src={Contact1}
          alt="side image"
          className="z-[-2] h-[90%] absolute bottom-0 left-[15%] object-cover"
        />
        <img
          src={Contact2}
          alt="side image"
          className="z-[-1] absolute h-[100%] bottom-0 object-cover left-0"
        />
        <div className="pl-[13%] text-xl font-sans text-white z-[1] gap-4 lg:w-[50%] flex flex-col justify-center items-start ">
          <div className="flex flex-col justify-center items-start gap-3">
            <div className="text-white sm:text-4xl text-xl font-bold">
              {bookVisitText.title}
            </div>
            <div className="text-left w-[70%]">{bookVisitText.bottomText}</div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden flex-col justify-center items-center gap-3">
        <div className="text-[#003F63] lg:text-white sm:text-4xl text-3xl font-bold">
          {bookVisitText.title}
        </div>
        <div className="text-center lg:text-left w-[70%]">{bookVisitText.bottomText}</div>
      </div>
      <div className="lg:pr-[8%] px-10 lg:w-[45%] w-[100%] gap-4 flex flex-col justify-center bg-transparent items-center lg:items-end rounded-2xl">
        <ContactForm />
      </div>
    </div>
  );
};

export default BookVisitComponent;
