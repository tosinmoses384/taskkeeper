import { FunctionComponent } from "react";

const DribbbleShotHD1: FunctionComponent = () => {
  return (
    <div className="bg-mediumslateblue w-[1035px] h-[600px] overflow-hidden text-left text-[50.95px] text-base-white font-work-sans">
      <div className="absolute top-[226px] left-[51px] flex flex-col items-start justify-start">
        <div className="relative font-black">
          <p className="m-0">{`To Do App `}</p>
          <p className="m-0">Design</p>
        </div>
        <div className="relative text-5xl">By Olumide</div>
      </div>
      <img
        className="absolute top-[173.8px] left-[316px] w-[561px] h-[327.62px] object-cover"
        alt=""
        src="/desktop-to-do-1@2x.png"
      />
      <img
        className="absolute top-[99px] left-[817px] w-[197.23px] h-[402px] object-cover"
        alt=""
        src="/mobile-to-do-1@2x.png"
      />
    </div>
  );
};

export default DribbbleShotHD1;
