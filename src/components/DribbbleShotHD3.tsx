import { FunctionComponent } from "react";

const DribbbleShotHD3: FunctionComponent = () => {
  return (
    <div className="bg-mediumslateblue w-[1035px] h-[600px] overflow-hidden text-left text-lg text-gray-900 font-work-sans">
      <div className="absolute top-[-21px] right-[-80px] rounded-[50%] bg-base-white w-[247px] h-[247px]" />
      <div className="absolute bottom-[-39px] left-[-39px] rounded-[50%] bg-base-white w-[247px] h-[247px]" />
      <img
        className="absolute top-[136px] left-[0px] w-[561.66px] h-[328px] object-cover"
        alt=""
        src="/to-do-view-task@2x.png"
      />
      <img
        className="absolute top-[136px] left-[493px] w-[564px] h-[329.37px] object-cover"
        alt=""
        src="/to-do-edit-task@2x.png"
      />
      <div className="absolute bottom-[1707px] left-[2073px] rounded-t-9xl rounded-b-none bg-base-white shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] w-[375px] h-[648px] overflow-hidden flex flex-col items-center justify-start">
        <div className="self-stretch bg-base-white flex flex-col items-center justify-start">
          <div className="self-stretch bg-base-white flex flex-col pt-6 px-6 pb-0 items-start justify-start gap-[16px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
              <div className="flex-1 relative leading-[28px] font-semibold">
                Edit Task
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/xclose.svg"
              />
            </div>
            <textarea className="bg-gray-50 font-work-sans text-base self-stretch rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border h-[140px] overflow-hidden shrink-0 flex flex-row py-3 px-3.5 items-start justify-start border-[1px] border-solid border-gray-300" />
            <div className="self-stretch flex flex-row items-start justify-between">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-2 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/calendar1.svg"
                  />
                  <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-500 text-left">
                    Today
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder9.svg"
                  />
                </div>
              </button>
              <div className="w-[225px] flex flex-row items-start justify-start gap-[16px]">
                <button className="cursor-pointer py-2.5 px-2 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/clock.svg"
                  />
                  <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-500 text-left">
                    10:30 am
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder10.svg"
                  />
                </button>
                <button className="cursor-pointer py-2.5 px-2 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/clock.svg"
                  />
                  <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-500 text-left">
                    11:30 am
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder11.svg"
                  />
                </button>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between text-base text-gray-500 font-text-sm-medium">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="relative w-4 h-4 overflow-hidden shrink-0">
                  <img
                    className="absolute h-[83.33%] w-[70.53%] top-[8.33%] right-[14.74%] bottom-[8.33%] left-[14.73%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
                <div className="relative font-medium">10 Minute before</div>
              </div>
              <div className="relative w-4 h-4 overflow-hidden shrink-0">
                <img
                  className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/icon1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col pt-8 px-0 pb-0 items-start justify-start">
          <div className="self-stretch hidden flex-col pt-0 px-0 pb-6 items-start justify-start">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
              alt=""
              src="/divider.svg"
            />
          </div>
          <div className="self-stretch flex flex-row pt-0 px-6 pb-6 items-start justify-start gap-[12px]">
            <button className="cursor-pointer py-2.5 px-[18px] bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder12.svg"
              />
              <div className="relative text-base font-semibold font-text-sm-medium text-gray-700 text-left">
                Cancel
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder12.svg"
              />
            </button>
            <button className="cursor-pointer py-2.5 px-4 bg-mediumslateblue flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-mediumslateblue">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/plus1.svg"
              />
              <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-base-white text-left">
                Save
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder13.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DribbbleShotHD3;
