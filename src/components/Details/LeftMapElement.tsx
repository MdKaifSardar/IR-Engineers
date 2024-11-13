import React from "react";

interface MapElementProps {
  content: {
    title: string;
    text: string;
    image: string;
  };
}

const LeftMapElement: React.FC<MapElementProps> = ({ content }) => {
  return (
    <div className="relative px-20 py-10 gap-10  w-full h-fit flex felx-row justify-center items-start">
      <div className="gap-1 w-fit h-fit flex flex-col justify-center items-start">
        <div className="text-left text-blue-900 font-sans font-bold md:text-4xl text-2xl">
          {content.title}
        </div>
        <div className="pt-5 border-t-[2px] border-blue-900 text-left md:text-xl text-lg">
          {content.text}
        </div>
      </div>
      <img
        src={content.image}
        alt="image"
        className="object-contain shadow-box-left w-[100%]"
      />
    </div>
  );
};

export default LeftMapElement;
