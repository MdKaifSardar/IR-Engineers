import { DetailsContent } from "../../data/Text/DetailsChooseUs";
import LeftMapElement from "./Left/LeftMapElement";
import RightMapElement from "./Right/RightMapElement";

const DetailsComponent = () => {
  return (
    <div className="y-5 flex flex-col justify-center items-center gap-2">
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
