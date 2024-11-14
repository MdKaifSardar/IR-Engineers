interface MapElementProps {
  content: {
    title: string;
    text: string;
    image: string;
  };
}
const DesktopLeft = ({ content }: MapElementProps) => {
  return (
    <div className="md:flex hidden flex-row justify-center items-start gap-5 w-[90%]">
      <div className="gap-2 w-fit h-fit flex flex-col justify-center items-start">
        <div className="text-left text-blue-900 font-sans font-bold md:text-4xl text-2xl">
          {content.title}
        </div>
        <div className="md:block hidden pt-5 border-t-[2px] border-blue-900 text-left md:text-xl text-lg">
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

export default DesktopLeft;
