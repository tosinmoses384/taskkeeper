import { FunctionComponent } from "react";

const DribbbleShotHD4: FunctionComponent = () => {
  return (
    <div className="bg-base-white w-[1035px] h-[600px] overflow-hidden">
      <div className="absolute top-[-21px] right-[-80px] rounded-[50%] bg-mediumslateblue w-[247px] h-[247px]" />
      <div className="absolute bottom-[-39px] left-[-39px] rounded-[50%] bg-mediumslateblue w-[247px] h-[247px]" />
      <img
        className="absolute top-[90px] left-[303px] w-[209px] h-[426px] object-cover"
        alt=""
        src="/mobile-to-do-add-task@2x.png"
      />
      <img
        className="absolute top-[90px] left-[783px] w-[209px] h-[426px] object-cover"
        alt=""
        src="/mobile-to-do-edit-task@2x.png"
      />
      <img
        className="absolute top-[90px] left-[543px] w-[209px] h-[426px] object-cover"
        alt=""
        src="/mobile-to-do-view-task@2x.png"
      />
      <img
        className="absolute top-[90px] left-[63px] w-[209px] h-[426px] object-cover"
        alt=""
        src="/mobile-to-do@2x.png"
      />
    </div>
  );
};

export default DribbbleShotHD4;
