import { DetailsContent } from "../../data/Text.ts/DetailsChooseUs";
import LeftMapElement from "./LeftMapElement";
import RightMapElement from "./RightMapElement";

const DetailsComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {DetailsContent.map((content, index) =>
        (index + 1) % 2 == 0 ? (
          <RightMapElement key={index} content={content} />
        ) : (
          <LeftMapElement key={index} content={content} />
        )
      )}
    </div>
  );
};

export default DetailsComponent;
