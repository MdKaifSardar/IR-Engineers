import { MainHeroText } from "../../data/Text/HeroText";

const HeroText = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-1 px-5 md:px-10 md:pb-4 pb-2 font-bold border-white border-b-[1px] md:text-5xl text-3xl text-white">
        {MainHeroText.title}
      </div>
      <div className="mb-3 gap-1 md:gap-3 flex flex-row justify-center items-center">
        {MainHeroText.bottomText.map((text, index) => (
          <div key={index}>
            <div className="lg:text-2xl text-sm text-white">
              {text}
            </div>
            {!(index == 2) ? (
              <div className="text-2xl rounded-full h-1 w-1 bg-white" />
            ) : null}
          </div>
        ))}
      </div>
      <div className="mb-5 md:mb-10 text-white text-center w-[90%] md:text-lg text-xs ">{MainHeroText.mainText}</div>
    </div>
  );
};

export default HeroText;
