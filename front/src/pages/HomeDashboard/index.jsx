import React from "react";

import { Button, Img, Line, List, Text } from "components";
import HomeDashboardShartscharts from "components/HomeDashboardShartscharts";

const HomeDashboardPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto sm:px-5 px-[35px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1365px] mx-auto md:px-5 w-full">
          <div className="flex flex-col justify-start">
            <Img
              className="h-9 md:h-auto md:ml-[0] ml-[71px] object-cover w-[17%]"
              src="images/img_5charmslogo1.png"
              alt="5charmslogoOne"
            />
            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] mt-[123px] w-[71%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[31px] items-start justify-start w-[81%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_home.svg"
                    alt="home"
                  />
                  <Text
                    className="mt-[3px] text-blue-400 text-sm"
                    size="txtManropeSemiBold14"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-row gap-[31px] items-center justify-start mt-[41px] w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                  <Text
                    className="text-gray-600 text-sm"
                    size="txtManropeMedium14"
                  >
                    Schedule
                  </Text>
                </div>
                <div className="flex flex-row gap-[30px] items-start justify-start mt-[39px] w-[78%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlylightoutlinefolder.svg"
                    alt="iconlylightoutl"
                  />
                  <Text
                    className="mt-[3px] text-gray-600 text-sm"
                    size="txtManropeMedium14"
                  >
                    Tasks
                  </Text>
                </div>
                <div className="flex flex-row gap-[30px] items-start justify-start mt-[41px] w-[97%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Text
                    className="mt-[3px] text-gray-600 text-sm"
                    size="txtManropeMedium14"
                  >
                    Message
                  </Text>
                </div>
                <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[3px] mt-[42px] w-[97%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-gray-600 text-sm"
                    size="txtManropeMedium14"
                  >
                    Meetings
                  </Text>
                </div>
                <div className="flex flex-row gap-8 items-center justify-start md:ml-[0] ml-[3px] mt-10 w-[81%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_music.svg"
                    alt="music"
                  />
                  <Text
                    className="text-gray-600 text-sm"
                    size="txtManropeMedium14"
                  >
                    Profile
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-blue-400_63 flex flex-col items-center justify-start mt-[332px] p-[17px] rounded-[18px] w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start mb-0.5 w-[96%] md:w-full">
                <Text
                  className="text-blue_gray-900_01 text-sm"
                  size="txtManropeBold14"
                >
                  Need any help?
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-between w-full">
                  <Text
                    className="text-blue-400 text-xs"
                    size="txtManropeMedium12"
                  >
                    Contact Admin
                  </Text>
                  <Button
                    className="flex h-[30px] items-center justify-center w-[30px]"
                    shape="round"
                    color="blue_400"
                    size="sm"
                    variant="outline"
                  >
                    <Img src="images/img_group51.svg" alt="groupFiftyOne" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-200 md:h-0.5 h-[1024px] w-0.5 md:w-full" />
          <div className="flex flex-col items-start justify-start">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Text
                className="text-blue-400 text-lg tracking-[0.90px]"
                size="txtManropeMedium18"
              >
                <span className="text-blue-400 font-manrope text-left font-normal">
                  Hello
                </span>
                <span className="text-blue-400 font-manrope text-left font-medium">
                  {" "}
                </span>
                <span className="text-blue-400 font-manrope text-left font-bold">
                  BRUNO
                </span>
                <span className="text-blue-400 font-manrope text-left font-medium">
                  ,{" "}
                </span>
                <span className="text-blue-400 font-manrope text-left font-normal">
                  welcome back!
                </span>
              </Text>
              <Img
                className="h-[26px] md:ml-[0] ml-[526px] w-[25px]"
                src="images/img_claritynotific.svg"
                alt="claritynotific"
              />
              <div className="bg-blue-400_63 flex md:flex-1 flex-col items-start justify-end ml-14 md:ml-[0] p-[7px] rounded-[16px] w-[22%] md:w-full">
                <div className="flex flex-row gap-[15px] items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[94%] md:w-full">
                  <Img
                    className="h-10 md:h-auto object-cover rounded-[10px] w-10"
                    src="images/img_rectangle4.png"
                    alt="rectangleFour"
                  />
                  <div className="flex flex-col items-start justify-start w-3/4">
                    <div className="flex flex-row gap-[31px] items-end justify-between w-full">
                      <Text
                        className="mb-[3px] text-blue_gray-900_01 text-sm"
                        size="txtManropeSemiBold14Bluegray90001"
                      >
                        Bruno Fernandes
                      </Text>
                      <Img
                        className="h-2 mt-[15px]"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                    <Text
                      className="text-blue-400 text-xs"
                      size="txtManropeMedium12"
                    >
                      Developer
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="mt-[13px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01"
              size="txtManropeBold30"
            >
              Chrono
            </Text>
            <div className="font-dmsans h-80 md:h-[336px] mt-[17px] relative w-[43%] sm:w-full">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-1 right-[10%] w-[69%]"
                style={{ backgroundImage: "url('images/img_chrono.svg')" }}
              >
                <div className="flex flex-col gap-6 items-center justify-start mt-[55px] w-[62%] md:w-full">
                  <HomeDashboardShartscharts className="md:h-[194px] h-[195px] relative w-[194px]" />
                  <div className="flex flex-col items-center justify-start w-[56%] md:w-full">
                    <Button
                      className="cursor-pointer min-w-[108px] text-center text-sm"
                      shape="round"
                      color="blue_400"
                      size="sm"
                      variant="fill"
                    >
                      Start
                    </Button>
                  </div>
                </div>
              </div>
              <Text
                className="absolute inset-x-[0] mx-auto text-black-900 text-sm top-[5%] w-max"
                size="txtDMSansRegular14"
              >
                Warning: Once you start the chrono, you won’t be able to stop it
                manually.{" "}
              </Text>
            </div>
            <Text
              className="mt-[55px] text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
              size="txtManropeBold24"
            >
              This Month Statistics
            </Text>
            <List
              className="sm:flex-col flex-row font-dmsans gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 mt-8 w-[76%]"
              orientation="horizontal"
            >
              <div className="bg-blue-400_63 flex flex-col h-[180px] items-center justify-end p-[23px] sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col gap-[29px] items-start justify-start mt-1.5 w-[127px] md:w-full">
                  <Text
                    className="text-base text-blue_gray-300"
                    size="txtDMSansMedium16"
                  >
                    <>
                      Total
                      <br />
                      Hours
                    </>
                  </Text>
                  <div className="flex flex-row font-manrope items-center justify-between w-full">
                    <Line className="bg-blue-400 h-[30px] my-3 rounded-sm w-1" />
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-light_blue-800"
                      size="txtManropeBold40"
                    >
                      48
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-blue-400_63 flex flex-col h-[180px] items-center justify-end p-[23px] sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col gap-[29px] items-start justify-start mt-1.5 w-[98%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-300"
                    size="txtDMSansMedium16"
                  >
                    <>
                      Total Points
                      <br />
                      Gained
                    </>
                  </Text>
                  <div className="flex flex-row font-manrope gap-[52px] items-center justify-start w-full">
                    <Line className="bg-blue-400 h-[30px] my-3 rounded-sm w-1" />
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-light_blue-800 text-right"
                      size="txtManropeBold40"
                    >
                      250
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-blue-400_63 flex flex-col h-[180px] items-center justify-end p-[23px] sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col gap-[29px] items-start justify-start mt-1.5 w-[127px] md:w-full">
                  <Text
                    className="text-base text-blue_gray-300"
                    size="txtDMSansMedium16"
                  >
                    <>
                      Tasks
                      <br />
                      In Progress
                    </>
                  </Text>
                  <div className="flex flex-row font-manrope items-center justify-between w-full">
                    <Line className="bg-blue-400 h-[30px] my-3 rounded-sm w-1" />
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-light_blue-800"
                      size="txtManropeBold40"
                    >
                      05
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-blue-400_63 flex flex-col h-[180px] items-center justify-end p-[23px] sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col gap-[29px] items-start justify-start mt-1.5 w-[96%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-300"
                    size="txtDMSansMedium16"
                  >
                    <>
                      Tasks
                      <br />
                      Completed
                    </>
                  </Text>
                  <div className="flex flex-row font-manrope items-center justify-between w-full">
                    <Line className="bg-blue-400 h-[30px] my-3 rounded-sm w-1" />
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-light_blue-800"
                      size="txtManropeBold40"
                    >
                      03
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboardPage;
