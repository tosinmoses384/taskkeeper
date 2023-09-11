import { FunctionComponent } from "react";

const Mobile: FunctionComponent = () => {
  return (
    <div className="relative bg-base-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-5xl text-black font-text-sm-medium">
      <div className="self-stretch bg-base-white shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] box-border h-[97px] flex flex-col pt-16 px-0 pb-0 items-center justify-start z-[0] border-b-[1px] border-solid border-gray-200">
        <div className="self-stretch h-px flex flex-row py-3 pr-2 pl-4 box-border items-center justify-between">
          <div className="flex flex-row items-start justify-start">
            <div className="relative w-[142px] h-8">
              <div className="absolute h-full w-[22.54%] top-[0%] right-[77.46%] bottom-[0%] left-[0%] shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] flex flex-row items-start justify-start">
                <img
                  className="relative rounded-lg w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/content1.svg"
                />
              </div>
              <div className="absolute h-full w-[70.42%] top-[0%] right-[0%] bottom-[0%] left-[29.58%]">
                <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_45px)] leading-[24px]">{`ToDo `}</b>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-base-white overflow-hidden flex flex-row p-2 items-center justify-center">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/menu021.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-base-white flex flex-col pt-8 px-0 pb-12 items-start justify-start relative gap-[32px] z-[1] text-sm text-gray-600">
        <div className="self-stretch flex flex-col items-start justify-start z-[0]">
          <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="overflow-hidden hidden flex-row items-center justify-center gap-[8px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/arrowleft.svg"
                />
                <div className="relative leading-[20px] font-semibold">
                  Back
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder16.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-5xl text-gray-900">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative leading-[32px] font-semibold">
                    Good morning!
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] font-work-sans text-gray-600">
                    You got some task to do.
                  </div>
                </div>
                <div className="self-stretch hidden flex-col items-start justify-start gap-[8px] text-sm text-gray-700">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative leading-[20px] font-medium hidden">
                      Search
                    </div>
                    <div className="self-stretch rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start text-base text-gray-500 border-[1px] border-solid border-gray-300">
                      <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-5 h-5 overflow-hidden shrink-0"
                          alt=""
                          src="/searchlg.svg"
                        />
                        <div className="relative leading-[24px]">Search</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative leading-[20px] text-gray-600 hidden w-80">
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 hidden"
                alt=""
                src="/divider1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start gap-[12.74px] z-[1] text-[12.74px] text-gray-900">
          <div className="relative leading-[19.11px] font-semibold">
            January 2023
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-[11.15px] text-gray-700">
            <div className="rounded-[6.37px] bg-base-white shadow-[0px_0.7962962985038757px_1.59px_rgba(16,_24,_40,_0.05)] box-border w-[49.37px] overflow-hidden shrink-0 flex flex-col py-[7.962963104248047px] px-[12.740740776062012px] items-center justify-center gap-[6.37px] border-[0.8px] border-solid border-gray-300">
              <div className="relative leading-[15.93px] font-semibold">
                Mon
              </div>
              <div className="relative leading-[15.93px] font-semibold">1</div>
            </div>
            <div className="rounded-[6.37px] bg-mediumslateblue shadow-[0px_0.7962962985038757px_1.59px_rgba(16,_24,_40,_0.05)] box-border w-[49.37px] overflow-hidden shrink-0 flex flex-col py-[7.962963104248047px] px-[12.740740776062012px] items-center justify-center gap-[6.37px] text-base-white border-[0.8px] border-solid border-mediumslateblue">
              <div className="relative leading-[15.93px] font-semibold">
                Tue
              </div>
              <div className="relative leading-[15.93px] font-semibold">2</div>
            </div>
            <div className="rounded-[6.37px] bg-base-white shadow-[0px_0.7962962985038757px_1.59px_rgba(16,_24,_40,_0.05)] box-border w-[49.37px] overflow-hidden shrink-0 flex flex-col py-[7.962963104248047px] px-[12.740740776062012px] items-center justify-center gap-[6.37px] border-[0.8px] border-solid border-gray-300">
              <div className="relative leading-[15.93px] font-semibold">
                Wed
              </div>
              <div className="relative leading-[15.93px] font-semibold">3</div>
            </div>
            <div className="rounded-[6.37px] bg-base-white shadow-[0px_0.7962962985038757px_1.59px_rgba(16,_24,_40,_0.05)] box-border w-[49.37px] overflow-hidden shrink-0 flex flex-col py-[7.962963104248047px] px-[12.740740776062012px] items-center justify-center gap-[6.37px] border-[0.8px] border-solid border-gray-300">
              <div className="relative leading-[15.93px] font-semibold">
                Thur
              </div>
              <div className="relative leading-[15.93px] font-semibold">4</div>
            </div>
            <div className="rounded-[6.37px] bg-base-white shadow-[0px_0.7962962985038757px_1.59px_rgba(16,_24,_40,_0.05)] box-border w-[49.37px] overflow-hidden shrink-0 flex flex-col py-[7.962963104248047px] px-[12.740740776062012px] items-center justify-center gap-[6.37px] border-[0.8px] border-solid border-gray-300">
              <div className="relative leading-[15.93px] font-semibold">
                Fri
              </div>
              <div className="relative leading-[15.93px] font-semibold">5</div>
            </div>
            <div className="rounded-[6.37px] bg-base-white shadow-[0px_0.7962962985038757px_1.59px_rgba(16,_24,_40,_0.05)] box-border w-[49.37px] overflow-hidden shrink-0 flex flex-col py-[7.962963104248047px] px-[12.740740776062012px] items-center justify-center gap-[6.37px] border-[0.8px] border-solid border-gray-300">
              <div className="relative leading-[15.93px] font-semibold">
                Sat
              </div>
              <div className="relative leading-[15.93px] font-semibold">6</div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[376px] overflow-x-auto shrink-0 flex flex-col py-0 px-4 box-border items-start justify-start gap-[16px] z-[2] text-gray-900 font-work-sans">
          <div className="relative text-base leading-[24px] font-semibold">
            My Tasks
          </div>
          <div className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between border-b-[1px] border-solid border-gray-200">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="flex flex-row items-center justify-center">
                <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[20px] font-medium">
                  Create Wireframe
                </div>
                <div className="relative leading-[20px] text-gray-600">
                  10:30 am - 11:30 am
                </div>
              </div>
            </div>
            <div className="relative leading-[20px] text-gray-600">Today</div>
          </div>
          <div className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between border-b-[1px] border-solid border-gray-200">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="flex flex-row items-center justify-center">
                <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[20px] font-medium">
                  Go shopping
                </div>
                <div className="relative leading-[20px] text-gray-600">
                  12:30 pm - 1:30 pm
                </div>
              </div>
            </div>
            <div className="relative leading-[20px] text-gray-600">Today</div>
          </div>
          <div className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between border-b-[1px] border-solid border-gray-200">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="flex flex-row items-center justify-center">
                <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[20px] font-medium">
                  Do my laundry
                </div>
                <div className="relative leading-[20px] text-gray-600">
                  1:30 pm - 2:10 pm
                </div>
              </div>
            </div>
            <div className="relative leading-[20px] text-gray-600">Today</div>
          </div>
          <div className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between text-gray-300 font-text-sm-medium border-b-[1px] border-solid border-gray-200">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="flex flex-row items-center justify-center">
                <img
                  className="relative rounded-md w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/-checkbox-base1.svg"
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
          <div className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between border-b-[1px] border-solid border-gray-200">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="flex flex-row items-center justify-center">
                <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[20px] font-medium">{`Meeting with Product Manager `}</div>
                <div className="relative leading-[20px] text-gray-600">
                  2:15 pm - 4:30 pm
                </div>
              </div>
            </div>
            <div className="relative leading-[20px] text-gray-600">Today</div>
          </div>
          <div className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between border-b-[1px] border-solid border-gray-200">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="flex flex-row items-center justify-center">
                <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[20px] font-medium">{`Meeting with Product Manager `}</div>
                <div className="relative leading-[20px] text-gray-600">
                  2:15 pm - 4:30 pm
                </div>
              </div>
            </div>
            <div className="relative leading-[20px] text-gray-600">Today</div>
          </div>
          <div className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between border-b-[1px] border-solid border-gray-200">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="flex flex-row items-center justify-center">
                <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[20px] font-medium">{`Meeting with Product Manager `}</div>
                <div className="relative leading-[20px] text-gray-600">
                  2:15 pm - 4:30 pm
                </div>
              </div>
            </div>
            <div className="relative leading-[20px] text-gray-600">Today</div>
          </div>
          <div className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between border-b-[1px] border-solid border-gray-200">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="flex flex-row items-center justify-center">
                <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[20px] font-medium">{`Meeting with Product Manager `}</div>
                <div className="relative leading-[20px] text-gray-600">
                  2:15 pm - 4:30 pm
                </div>
              </div>
            </div>
            <div className="relative leading-[20px] text-gray-600">Today</div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[634px] left-[16px] rounded-lg bg-gray-50 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[343px] h-12 overflow-hidden shrink-0 flex flex-row py-2 px-3 items-center justify-start gap-[8px] z-[3] text-base font-work-sans border-[1px] border-solid border-gray-300">
          <div className="flex-1 flex flex-row items-center justify-start">
            <div className="flex-1 relative leading-[24px]">Input task</div>
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/microphone01.svg"
          />
        </div>
      </div>
      <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] bg-gray1 w-[375px] h-[820px] z-[2]" />
      <div className="my-0 mx-[!important] absolute bottom-[0.04px] left-[0px] rounded-t-9xl rounded-b-none bg-base-white shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] w-[375px] h-[648px] overflow-hidden shrink-0 flex flex-col items-center justify-start z-[3] text-lg text-gray-900 font-work-sans">
        <div className="self-stretch bg-base-white flex flex-col items-center justify-start">
          <div className="self-stretch bg-base-white flex flex-col pt-6 px-6 pb-0 items-start justify-start gap-[16px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
              <h1 className="m-0 flex-1 relative text-inherit leading-[28px] font-semibold font-inherit">
                Edit Task
              </h1>
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
                    src="/calendar2.svg"
                  />
                  <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-500 text-left">
                    Today
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder17.svg"
                  />
                </div>
              </button>
              <div className="w-[225px] flex flex-row items-start justify-start gap-[16px]">
                <button className="cursor-pointer py-2.5 px-2 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/clock1.svg"
                  />
                  <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-500 text-left">
                    10:30 am
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder18.svg"
                  />
                </button>
                <button className="cursor-pointer py-2.5 px-2 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/clock1.svg"
                  />
                  <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-500 text-left">
                    11:30 am
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder18.svg"
                  />
                </button>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between text-base text-gray-500 font-text-sm-medium">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/bell03.svg"
                />
                <h2 className="m-0 relative text-inherit font-medium font-inherit">
                  10 Minute before
                </h2>
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/xclose1.svg"
              />
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
                src="/placeholder19.svg"
              />
              <div className="relative text-base leading-[24px] font-semibold font-work-sans text-gray-700 text-left">
                Cancel
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder19.svg"
              />
            </button>
            <button className="cursor-pointer py-2.5 px-[18px] bg-mediumslateblue flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-mediumslateblue">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder20.svg"
              />
              <div className="relative text-base leading-[24px] font-semibold font-work-sans text-base-white text-left">
                Save
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder20.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
