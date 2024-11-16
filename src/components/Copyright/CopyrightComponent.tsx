import { FaArrowUp } from "react-icons/fa";

const CopyrightComponent = () => {
  return (
    <div className="p-2 gap-1 flex flex-row justify-center items-center">
      <button className="p-1 bg-blue-900">
        <FaArrowUp className="text-yellow-500 text-2xl" />
      </button>
      <div className="text-center md:text-xl text-sm text-black">
        © Copyright 2024 IR Engineers | Developed by Asit mondal.
      </div>
    </div>
  );
};

export default CopyrightComponent;
