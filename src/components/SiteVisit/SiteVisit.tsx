import { IoIosMail } from "react-icons/io";

const SiteVisitComponent = () => {
  return (
    <div className="bg-[#003F63] gap-2 flex flex-row justify-center items-center">
      <div className="md:text-2xl text-xl text-white ">Get a site visit, Book now</div>
      <div className="flex flex-col justify-center items-center">
        <IoIosMail className="md:text-3xl text-xl text-center text-white"/>
      </div>
    </div>
  );
};

export default SiteVisitComponent;
