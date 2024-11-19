import { MainHeroText } from "../../data/Text/HeroText";

const LogoTextComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-1 px-5 md:px-10 md:pb-4 pb-2 font-bold border-white border-b-[1px] md:text-4xl text-3xl text-white">
        {MainHeroText.title}
      </div>
      <div className="mb-3 gap-2 flex flex-row justify-center items-center">
        {MainHeroText.bottomText.map((text, index) => (
          <div key={index} className="flex flex-row justify-center items-center gap-2">
            <div className="lg:text-2xl text-lg text-white">
              {text}
            </div>
            {!(index == 2) ? (
              <div className="text-2xl rounded-full h-1 md:h-2 w-1 md:w-2 bg-white" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTextComponent;
