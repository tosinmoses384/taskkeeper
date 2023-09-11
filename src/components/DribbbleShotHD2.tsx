import { FunctionComponent } from "react";

const DribbbleShotHD2: FunctionComponent = () => {
  return (
    <div className="bg-whitesmoke w-[1035px] h-[600px] overflow-hidden">
      <div className="absolute top-[-21px] right-[-80px] rounded-[50%] bg-mediumslateblue w-[247px] h-[247px]" />
      <div className="absolute bottom-[-39px] left-[-39px] rounded-[50%] bg-mediumslateblue w-[247px] h-[247px]" />
      <img
        className="absolute top-[136px] left-[484px] w-[561.66px] h-[328px] object-cover"
        alt=""
        src="/to-do-add-task@2x.png"
      />
      <img
        className="absolute top-[136px] left-[0px] w-[561.66px] h-[328px] object-cover"
        alt=""
        src="/desktop-to-do@2x.png"
      />
    </div>
  );
};

export default DribbbleShotHD2;
