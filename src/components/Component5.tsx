import { FunctionComponent, useCallback } from "react";

const Component5: FunctionComponent = () => {
  const onProperty1TaskDesktopClick = useCallback(() => {
    // Please sync "To Do - view task" to the project
  }, []);

  return (
    <div className="rounded-8xs box-border w-[882px] h-[200px] overflow-hidden text-left text-sm text-gray-900 font-work-sans border-[1px] border-dashed border-blueviolet">
      <div
        className="absolute top-[20px] left-[20px] bg-gray-50 box-border w-[842px] h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
        onClick={onProperty1TaskDesktopClick}
      >
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <div className="flex flex-row items-center justify-center">
            <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
          </div>
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative leading-[20px] font-medium">
              Meeting with stakeholder
            </div>
            <div className="relative leading-[20px] text-gray-600">5:30 pm</div>
          </div>
        </div>
        <div className="relative leading-[20px] text-gray-600">Today</div>
      </div>
      <div className="absolute top-[108px] left-[20px] bg-gray-50 box-border w-[842px] h-[72px] flex flex-row py-4 px-6 items-center justify-between text-gray-300 font-text-sm-medium border-b-[1px] border-solid border-gray-200">
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <div className="flex flex-row items-center justify-center">
            <img
              className="relative rounded-md w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/-checkbox-base.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative [text-decoration:line-through] leading-[20px] font-medium">
              Create Wireframe
            </div>
            <div className="relative [text-decoration:line-through] leading-[20px]">
              9:00 am - 10:00 am
            </div>
          </div>
        </div>
        <div className="relative leading-[20px] font-work-sans text-gray-600">
          Today
        </div>
      </div>
    </div>
  );
};

export default Component5;
