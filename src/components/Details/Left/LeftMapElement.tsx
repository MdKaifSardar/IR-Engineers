import React from "react";
import MoblieLeft from "./MoblieLeft";
import DesktopLeft from "./DesktopLeft";

interface MapElementProps {
  content: {
    title: string;
    text: string;
    image: string;
  };
}

const LeftMapElement: React.FC<MapElementProps> = ({ content }) => {
  return (
    <div className="py-5 w-full h-fit flex felx-row justify-center items-center">
      <DesktopLeft content={content} />
      <MoblieLeft content={content} />
    </div>
  );
};

export default LeftMapElement;
