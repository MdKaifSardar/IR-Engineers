interface MapElementProps {
  content: {
    title: string;
    text: string;
    image: string;
  };
}

const DesktopRight = ({ content }: MapElementProps) => {
  return (
    <div className="md:flex hidden flex-row justify-center items-start gap-5 w-[90%]">
      <img
        src={content.image}
        alt="image"
        className="object-contain shadow-box-right w-[100%]"
      />
      <div className="gap-2 w-fit h-fit flex flex-col justify-center items-end">
        <div className="text-right text-blue-900 font-sans font-bold md:text-4xl text-2xl">
          {content.title}
        </div>
        <div className="md:block hidden pt-5 border-t-[2px] border-blue-900 text-right md:text-xl text-lg">
          {content.text}
        </div>
      </div>
    </div>
  );
};

export default DesktopRight;
