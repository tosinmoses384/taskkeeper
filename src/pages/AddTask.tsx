import { FunctionComponent } from "react";

const AddTask: FunctionComponent = () => {
  return (
    <div className="relative rounded-xl bg-base-white shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] w-full overflow-hidden flex flex-col items-center justify-start text-left text-lg text-gray-500 font-work-sans">
      <div className="self-stretch bg-base-white flex flex-col items-center justify-start">
        <div className="self-stretch bg-base-white flex flex-col pt-6 px-6 pb-0 items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-gray-900">
            <div className="flex-1 relative leading-[28px] font-semibold">
              Add Task
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/xclose.svg"
            />
          </div>
          <div className="self-stretch rounded-lg bg-gray-50 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border h-[140px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
          <div className="self-stretch flex flex-row items-start justify-between text-sm">
            <div className="flex flex-col items-start justify-start">
              <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/calendar4.svg"
                />
                <div className="relative leading-[20px] font-semibold">
                  Today
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder27.svg"
                />
              </div>
            </div>
            <div className="w-[216px] flex flex-row items-start justify-start gap-[16px]">
              <div className="flex-1 rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/clock5.svg"
                />
                <div className="relative leading-[20px] font-semibold">
                  00:00
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder27.svg"
                />
              </div>
              <div className="flex-1 rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/clock5.svg"
                />
                <div className="relative leading-[20px] font-semibold">
                  00:00
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder27.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-base font-text-sm-medium">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/bell031.svg"
              />
              <div className="relative font-medium">10 Minute before</div>
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/xclose1.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col pt-8 px-0 pb-0 items-start justify-start text-base text-gray-700">
        <div className="self-stretch hidden flex-col pt-0 px-0 pb-6 items-start justify-start">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
            alt=""
            src="/divider3.svg"
          />
        </div>
        <div className="self-stretch flex flex-row pt-0 px-6 pb-6 items-start justify-start gap-[12px]">
          <div className="flex-1 rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-[18px] items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder29.svg"
            />
            <div className="relative leading-[24px] font-semibold">Cancel</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder29.svg"
            />
          </div>
          <div className="flex-1 rounded-lg bg-mediumslateblue shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-[18px] items-center justify-center gap-[8px] text-base-white border-[1px] border-solid border-mediumslateblue">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder30.svg"
            />
            <div className="relative leading-[24px] font-semibold">Add</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder30.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
