interface MapElementProps {
  content: {
    title: string;
    text: string;
    image: string;
  };
}

const MoblieRight = ({ content }: MapElementProps) => {
  return (
    // <div className="md:hidden w-[90%] flex flex-col justify-center items-center gap-5 sm:gap-7">
    //   <div className="gap-6 flex flex-row justify-between items-end sm:items-end w-full">
    //     <div className="text-left border-b-[2px] border-blue-900 text-blue-900 font-sans font-bold sm:text-3xl text-2xl pb-2">
    //       {content.title}
    //     </div>
    //     <img
    //       src={content.image}
    //       alt="image"
    //       className="object-contain shadow-box-left w-full"
    //     />
    //   </div>

    //   <div className="text-center w-full block sm:text-md text-sm">
    //     {content.text}
    //   </div>
    // </div>
    <div className="md:hidden w-[95%] sm:w-[90%] flex flex-col justify-center items-center gap-7 sm:gap-7">
      <div className="gap-2 flex flex-row justify-between items-end w-full">
        <img
          src={content.image}
          alt="image"
          className="object-contain shadow-box-right w-full"
        />
        <div className="text-right border-b-[2px] border-blue-900 text-blue-900 font-sans font-bold sm:text-3xl text-lg pb-2">
          {content.title}
        </div>
      </div>

      <div className="text-center w-fit block sm:text-md text-sm">
        {content.text}
      </div>
    </div>
  );
};

export default MoblieRight;
