import { FunctionComponent } from "react";

const Button: FunctionComponent = () => {
  return (
    <div className="rounded-8xs box-border w-[215px] h-[141px] overflow-hidden text-left text-sm text-base-white font-work-sans border-[1px] border-dashed border-blueviolet">
      <div className="absolute top-[20px] left-[20px] rounded-lg bg-mediumslateblue shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-mediumslateblue">
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src="/plus.svg"
        />
        <div className="relative leading-[20px] font-semibold">
          Create New Task
        </div>
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
          alt=""
          src="/placeholder14.svg"
        />
      </div>
      <div className="absolute top-[81px] left-[20px] rounded-lg bg-mediumblue shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-mediumblue">
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src="/plus2.svg"
        />
        <div className="relative leading-[20px] font-semibold">
          Create New Task
        </div>
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
          alt=""
          src="/placeholder15.svg"
        />
      </div>
    </div>
  );
};

export default Button;
