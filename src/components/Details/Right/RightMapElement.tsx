import React from "react";
import MoblieRight from "./MoblieRight";
import DesktopRight from "./DesktopRight";

interface MapElementProps {
  content: {
    title: string;
    text: string;
    image: string;
  };
}

const RightMapElement: React.FC<MapElementProps> = ({ content }) => {
  return (
    <div className="py-5 w-full h-fit flex flex-col justify-center items-center">
      <MoblieRight content={content} />
      <DesktopRight content={content} />
    </div>
  );
};

export default RightMapElement;
