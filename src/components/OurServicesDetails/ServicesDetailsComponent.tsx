import { services } from "../../data/serviceDetails/serviceDetails";

const ServicesDetailsComponent = () => {
  return (
    <div className="py-5 w-full h-fit flex gap-5 flex-col justify-center items-center">
      {services.map((service, index) => (
        <div
          key={index}
          className={`md:px-5 px-2 flex flex-col justify-center md:items-start items-${
            index % 2 == 0 ? "start" : "end"
          } gap-3`}
        >
          <div className="relative w-fit h-fit flex flex-row justify-center items-center">
            <div className="z-[-1] text-md sm:text-xl md:text-2xl bg-[#003F63] text-white font-sans font-semibold p-2">
              {service.title}
            </div>
            {/* <div className="w-0 h-0 border-l-[50px] border-b-[50px] border-transparent border-l-blue-500 border-b-blue-500"></div> */}
            <div className="z-[-2] bg-yellow-500 w-full h-full absolute top-1 left-2"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {service.content.map((content, index) => (
              <div
                key={index}
                className="w-[20vh] md:w-[34vh] h-[20vh] md:h-[34vh] flex flex-col justify-center items-center"
              >
                <div className="overflow-hidden w-full h-full">
                  <img src={content.image} alt={content.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-fit p-1 text-center border-[1px] border-black font-sans font-semibold">
                  {content.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesDetailsComponent;
