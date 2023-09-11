import { FunctionComponent } from "react";

const DateSelection: FunctionComponent = () => {
  return (
    <div className="rounded-8xs box-border w-[141px] h-20 overflow-hidden text-center text-sm text-base-white font-work-sans border-[1px] border-dashed border-blueviolet">
      <div className="absolute top-[20px] left-[20px] rounded-xl bg-mediumslateblue w-10 h-10">
        <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_12px)] leading-[20px] font-medium inline-block w-6">
          6
        </div>
      </div>
      <div className="absolute top-[20px] left-[81px] rounded-xl bg-mediumblue w-10 h-10">
        <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_12px)] leading-[20px] font-medium inline-block w-6">
          6
        </div>
        <img
          className="absolute h-[53.44%] w-[50.94%] top-[50%] right-[-10%] bottom-[-3.44%] left-[59.06%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/cursor1.svg"
        />
      </div>
    </div>
  );
};

export default DateSelection;
