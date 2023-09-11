import { FunctionComponent, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Mobile2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTableCellClick = useCallback(() => {
    navigate("/mobile");
  }, [navigate]);

  return (
    <div className="relative bg-base-white w-full h-[813px] overflow-hidden flex flex-col items-start justify-start text-left text-5xl text-black font-text-sm-medium">
      <div className="self-stretch bg-base-white shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] box-border h-[97px] flex flex-col pt-16 px-0 pb-0 items-center justify-start border-b-[1px] border-solid border-gray-200">
        <div className="self-stretch h-px flex flex-row py-3 pr-2 pl-4 box-border items-center justify-between">
          <div className="flex flex-row items-start justify-start">
            <div className="relative w-[142px] h-8">
              <img
                className="absolute w-[26.76%] top-[calc(50%_-_18px)] right-[75.35%] left-[-2.11%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/logomark@2x.png"
              />
              <div className="absolute h-full w-[70.42%] top-[0%] right-[0%] bottom-[0%] left-[29.58%]">
                <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_45px)] leading-[24px]">{`ToDo `}</b>
              </div>
            </div>
          </div>
          <Dropdown
            overlay={
              <Menu>
                {([] as any).map((option: any, index: number) => (
                  <Menu.Item key={index}>
                    <a onClick={(e) => e.preventDefault()}>
                      {option.value || ""}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            }
            placement="bottomLeft"
            trigger={["hover"]}
          >
            <Button onClick={(e) => e.preventDefault()}>
              {` `}
              <CalendarOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="self-stretch bg-base-white flex flex-col pt-8 px-0 pb-12 items-start justify-start relative gap-[32px] text-sm text-gray-900">
        <div className="self-stretch flex flex-col items-start justify-start z-[0] text-gray-600">
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
                  src="/placeholder21.svg"
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
        <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start gap-[12.74px] z-[1] text-[12.74px]">
          <div className="relative leading-[19.11px] font-semibold">
            January 2023
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[12.74px]">
            <button className="cursor-pointer py-[7.962963104248047px] px-[12.740740776062012px] bg-base-white flex-1 rounded-[6.37px] shadow-[0px_0.7962962985038757px_1.59px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[6.37px] border-[0.8px] border-solid border-gray-300">
              <div className="relative text-[11.15px] leading-[15.93px] font-semibold font-text-sm-medium text-gray-700 text-left">
                Mon
              </div>
              <div className="relative text-[11.15px] leading-[15.93px] font-semibold font-text-sm-medium text-gray-700 text-left">
                1
              </div>
            </button>
            <button className="cursor-pointer py-[7.962963104248047px] px-[12.740740776062012px] bg-mediumslateblue flex-1 rounded-[6.37px] shadow-[0px_0.7962962985038757px_1.59px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[6.37px] border-[0.8px] border-solid border-mediumslateblue">
              <div className="relative text-[11.15px] leading-[15.93px] font-semibold font-text-sm-medium text-base-white text-left">
                Tue
              </div>
              <div className="relative text-[11.15px] leading-[15.93px] font-semibold font-text-sm-medium text-base-white text-left">
                2
              </div>
            </button>
            <button className="cursor-pointer py-[7.962963104248047px] px-[12.740740776062012px] bg-base-white flex-1 rounded-[6.37px] shadow-[0px_0.7962962985038757px_1.59px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[6.37px] border-[0.8px] border-solid border-gray-300">
              <div className="relative text-[11.15px] leading-[15.93px] font-semibold font-text-sm-medium text-gray-700 text-left">
                Wed
              </div>
              <div className="relative text-[11.15px] leading-[15.93px] font-semibold font-text-sm-medium text-gray-700 text-left">
                3
              </div>
            </button>
            <button className="cursor-pointer py-[7.962963104248047px] px-[12.740740776062012px] bg-base-white flex-1 rounded-[6.37px] shadow-[0px_0.7962962985038757px_1.59px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[6.37px] border-[0.8px] border-solid border-gray-300">
              <div className="relative text-[11.15px] leading-[15.93px] font-semibold font-text-sm-medium text-gray-700 text-left">
                Thur
              </div>
              <div className="relative text-[11.15px] leading-[15.93px] font-semibold font-text-sm-medium text-gray-700 text-left">
                4
              </div>
            </button>
            <button className="cursor-pointer py-[7.962963104248047px] px-[12.740740776062012px] bg-base-white flex-1 rounded-[6.37px] shadow-[0px_0.7962962985038757px_1.59px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[6.37px] border-[0.8px] border-solid border-gray-300">
              <div className="relative text-[11.15px] leading-[15.93px] font-semibold font-text-sm-medium text-gray-700 text-left">
                Fri
              </div>
              <div className="relative text-[11.15px] leading-[15.93px] font-semibold font-text-sm-medium text-gray-700 text-left">
                5
              </div>
            </button>
            <button className="cursor-pointer py-[7.962963104248047px] px-[12.740740776062012px] bg-base-white flex-1 rounded-[6.37px] shadow-[0px_0.7962962985038757px_1.59px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[6.37px] border-[0.8px] border-solid border-gray-300">
              <div className="relative text-[11.15px] leading-[15.93px] font-semibold font-text-sm-medium text-gray-700 text-left">
                Sat
              </div>
              <div className="relative text-[11.15px] leading-[15.93px] font-semibold font-text-sm-medium text-gray-700 text-left">
                6
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch h-[376px] overflow-x-auto shrink-0 flex flex-col py-0 px-4 box-border items-start justify-start gap-[16px] z-[2] font-work-sans">
          <div className="relative text-base leading-[24px] font-semibold">
            My Tasks
          </div>
          <div
            className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
            onClick={onTableCellClick}
          >
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <input
                className="cursor-pointer flex flex-row items-center justify-center"
                type="checkbox"
              />
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
              <input
                className="cursor-pointer flex flex-row items-center justify-center"
                type="checkbox"
              />
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
              <input
                className="cursor-pointer flex flex-row items-center justify-center"
                type="checkbox"
              />
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
              <input
                className="cursor-pointer flex flex-row items-center justify-center"
                type="checkbox"
                defaultChecked={true}
              />
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
        <input
          className="font-work-sans text-base bg-gray-50 my-0 mx-[!important] absolute top-[634px] left-[16px] rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[343px] h-12 overflow-hidden shrink-0 flex flex-row py-2 px-3 items-center justify-start z-[3] border-[1px] border-solid border-gray-300"
          type="text"
          placeholder="Input task"
        />
      </div>
    </div>
  );
};

export default Mobile2;
