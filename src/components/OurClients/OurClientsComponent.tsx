import { logos } from "../../data/Images/Clients";
import { MainContent } from "../../data/Text/OurClients";

const OurClientsComponent = () => {
  return (
    <div className="gap-2 md:gap-4 py-5 md:py-10 w-full flex flex-col justify-center items-center">
      <div className="sm:text-4xl font-bold text-3xl text-[#003F63]">{MainContent.title}</div>
      <div className="py-3 md:py-10 border-[1px] border-black rounded-[10vh] flex w-[90%] flex-wrap justify-center items-center gap-1 md:gap-3">
        {logos.map((logo, index) => (
          <img src={logo} key={index} className="w-[15%] h-auto" />
        ))}
      </div>
      <div>
        <button className="border-0 lg:border-[1px] bg-[#003F63] text-white lg:text-[#003F63] lg:bg-transparent border-black px-5 py-2">{MainContent.buttonText}</button>
      </div>
    </div>
  );
};

export default OurClientsComponent;
