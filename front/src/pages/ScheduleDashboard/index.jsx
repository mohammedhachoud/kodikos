import React from "react";

import { Button, Img, Line, Text } from "components";

const ScheduleDashboardPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto sm:px-5 px-[30px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1374px] mx-auto md:px-5 w-full">
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
                    src="images/img_home_gray_600.svg"
                    alt="home"
                  />
                  <Text
                    className="mt-[3px] text-gray-600 text-sm"
                    size="txtManropeSemiBold14Gray600"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-row gap-[31px] items-center justify-start mt-[41px] w-full">
                  <Img className="h-6 w-6" src="images/img_bag.svg" alt="bag" />
                  <Text
                    className="text-blue-400 text-sm"
                    size="txtManropeMedium14Blue400"
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
                    <Img src="images/img_group51.svg" alt="groupFiftyFive" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-200 md:h-0.5 h-[1024px] w-0.5 md:w-full" />
          <div className="flex flex-col justify-start">
            <div className="flex flex-row gap-14 items-center justify-end md:ml-[0] ml-[788px] w-[29%] md:w-full">
              <Img
                className="h-[26px] w-[25px]"
                src="images/img_claritynotific.svg"
                alt="claritynotific"
              />
              <div className="bg-blue-400_63 flex flex-col items-start justify-end p-[7px] rounded-[16px] w-3/4">
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
              Schedule{" "}
            </Text>
            <div className="flex flex-col font-dmsans items-start justify-start md:ml-[0] ml-[35px] mt-[61px] w-[97%] md:w-full">
              <div className="flex flex-row gap-[7px] items-center justify-start w-[15%] md:w-full">
                <Button
                  className="cursor-pointer min-w-[76px] text-center text-sm"
                  shape="round"
                  color="blue_400"
                  size="sm"
                  variant="fill"
                >
                  Month
                </Button>
                <Button
                  className="cursor-pointer min-w-[76px] text-center text-sm"
                  shape="round"
                  color="blue_100"
                  size="sm"
                  variant="fill"
                >
                  Week
                </Button>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[26px] pr-[3px] w-[89%] md:w-full">
                <Text
                  className="text-black-900_7e text-xl"
                  size="txtDMSansRegular20"
                >
                  Mon
                </Text>
                <Text
                  className="ml-32 md:ml-[0] text-black-900_7e text-xl"
                  size="txtDMSansRegular20"
                >
                  Tue
                </Text>
                <Text
                  className="md:ml-[0] ml-[133px] text-black-900_7e text-xl"
                  size="txtDMSansRegular20"
                >
                  Wed
                </Text>
                <Text
                  className="md:ml-[0] ml-[124px] text-black-900_7e text-xl"
                  size="txtDMSansRegular20"
                >
                  Thu
                </Text>
                <Text
                  className="md:ml-[0] ml-[132px] text-black-900_7e text-xl"
                  size="txtDMSansRegular20"
                >
                  Fri
                </Text>
                <Text
                  className="md:ml-[0] ml-[142px] text-black-900_7e text-xl"
                  size="txtDMSansRegular20"
                >
                  Sat
                </Text>
                <Text
                  className="md:ml-[0] ml-[131px] text-black-900_7e text-xl"
                  size="txtDMSansRegular20"
                >
                  Sun
                </Text>
              </div>
              <div className="md:h-[1288px] h-[552px] sm:h-[573px] ml-0.5 md:ml-[0] mt-[21px] relative w-full">
                <div className="md:h-[1267px] h-[552px] m-auto w-full">
                  <div className="md:h-[1267px] h-[552px] m-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-evenly m-auto w-full">
                      <div className="md:h-[1029px] h-[552px] relative w-[86%] md:w-full">
                        <div className="md:h-[1029px] h-[552px] m-auto w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-evenly m-auto w-full">
                            <div className="h-[552px] md:h-[791px] relative w-[84%] md:w-full">
                              <div className="h-[552px] md:h-[791px] m-auto w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-evenly m-auto w-full">
                                  <div className="h-[552px] sm:h-[790px] relative w-4/5 md:w-full">
                                    <div className="h-[552px] sm:h-[790px] m-auto w-full">
                                      <div className="h-[552px] sm:h-[790px] m-auto w-full">
                                        <div className="absolute h-[552px] sm:h-[790px] inset-y-[0] left-[0] my-auto w-3/4 sm:w-full">
                                          <div className="h-[552px] sm:h-[790px] m-auto w-full">
                                            <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-start justify-evenly m-auto w-full">
                                              <div className="h-[552px] relative w-[67%] sm:w-full">
                                                <div className="h-[552px] m-auto w-full">
                                                  <div className="flex flex-row h-full items-start justify-evenly m-auto w-full">
                                                    <div className="flex flex-col relative w-1/2">
                                                      <div className="flex flex-col items-center justify-start mx-auto w-full">
                                                        <div className="flex flex-col relative w-full">
                                                          <div className="flex flex-col items-center justify-start mx-auto w-full">
                                                            <div className="flex flex-col items-center justify-start w-full">
                                                              <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                                                                <div
                                                                  className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group56.svg')",
                                                                  }}
                                                                >
                                                                  <Text
                                                                    className="mb-[59px] text-black-900 text-right text-xl"
                                                                    size="txtDMSansRegular20Black900"
                                                                  >
                                                                    1
                                                                  </Text>
                                                                </div>
                                                              </div>
                                                              <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                                                                <div
                                                                  className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group56.svg')",
                                                                  }}
                                                                >
                                                                  <Text
                                                                    className="mb-[59px] text-black-900 text-right text-xl"
                                                                    size="txtDMSansRegular20Black900"
                                                                  >
                                                                    8
                                                                  </Text>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="bg-gray-100_02 flex flex-col items-center justify-start mt-[-0.01px] mx-auto w-full z-[1]">
                                                            <div
                                                              className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group56.svg')",
                                                              }}
                                                            >
                                                              <Text
                                                                className="mb-[59px] text-black-900 text-right text-xl"
                                                                size="txtDMSansRegular20Black900"
                                                              >
                                                                15
                                                              </Text>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                                                          <div
                                                            className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group56.svg')",
                                                            }}
                                                          >
                                                            <Text
                                                              className="mb-[60px] text-black-900 text-right text-xl"
                                                              size="txtDMSansRegular20Black900"
                                                            >
                                                              22
                                                            </Text>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="bg-gray-100_02 flex flex-col items-center justify-start mt-[-0.01px] mx-auto w-full z-[1]">
                                                        <div
                                                          className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group56.svg')",
                                                          }}
                                                        >
                                                          <Text
                                                            className="mb-[59px] text-black-900 text-right text-xl"
                                                            size="txtDMSansRegular20Black900"
                                                          >
                                                            29
                                                          </Text>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="flex flex-col items-center justify-start w-1/2">
                                                      <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                                                        <div
                                                          className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group56.svg')",
                                                          }}
                                                        >
                                                          <Text
                                                            className="mb-[60px] text-black-900 text-right text-xl"
                                                            size="txtDMSansRegular20Black900"
                                                          >
                                                            2
                                                          </Text>
                                                        </div>
                                                      </div>
                                                      <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                                                        <div
                                                          className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group56.svg')",
                                                          }}
                                                        >
                                                          <Text
                                                            className="mb-[59px] text-black-900 text-right text-xl"
                                                            size="txtDMSansRegular20Black900"
                                                          >
                                                            9
                                                          </Text>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="absolute bg-gray-100_02 flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-1/2">
                                                    <div
                                                      className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group56.svg')",
                                                      }}
                                                    >
                                                      <Text
                                                        className="mb-[59px] text-black-900 text-right text-xl"
                                                        size="txtDMSansRegular20Black900"
                                                      >
                                                        16
                                                      </Text>
                                                    </div>
                                                  </div>
                                                  <div className="absolute bg-gray-100_02 bottom-[20%] flex flex-col items-center justify-start right-[0] w-1/2">
                                                    <div
                                                      className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group56.svg')",
                                                      }}
                                                    >
                                                      <Text
                                                        className="mb-[59px] text-black-900 text-right text-xl"
                                                        size="txtDMSansRegular20Black900"
                                                      >
                                                        23
                                                      </Text>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="absolute bg-gray-100_02 bottom-[0] flex flex-col items-center justify-start right-[0] w-1/2">
                                                  <div
                                                    className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group56.svg')",
                                                    }}
                                                  >
                                                    <Text
                                                      className="mb-[59px] text-black-900 text-right text-xl"
                                                      size="txtDMSansRegular20Black900"
                                                    >
                                                      30
                                                    </Text>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flex sm:flex-1 flex-col items-center justify-start w-[34%] sm:w-full">
                                                <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                                                  <div
                                                    className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group56.svg')",
                                                    }}
                                                  >
                                                    <Text
                                                      className="mb-[59px] text-black-900 text-right text-xl"
                                                      size="txtDMSansRegular20Black900"
                                                    >
                                                      3
                                                    </Text>
                                                  </div>
                                                </div>
                                                <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                                                  <div
                                                    className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group56.svg')",
                                                    }}
                                                  >
                                                    <Text
                                                      className="mb-[59px] text-black-900 text-right text-xl"
                                                      size="txtDMSansRegular20Black900"
                                                    >
                                                      10
                                                    </Text>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="absolute bg-gray-100_02 flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[34%]">
                                              <div
                                                className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group56.svg')",
                                                }}
                                              >
                                                <Text
                                                  className="mb-[59px] text-black-900 text-right text-xl"
                                                  size="txtDMSansRegular20Black900"
                                                >
                                                  17
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="absolute bg-gray-100_02 bottom-[20%] flex flex-col items-center justify-start right-[0] w-[34%]">
                                              <div
                                                className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group56.svg')",
                                                }}
                                              >
                                                <Text
                                                  className="mb-[60px] text-black-900 text-right text-xl"
                                                  size="txtDMSansRegular20Black900"
                                                >
                                                  24
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute bg-gray-100_02 bottom-[0] flex flex-col items-center justify-start right-[0] w-[34%]">
                                            <div
                                              className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group56.svg')",
                                              }}
                                            >
                                              <Text
                                                className="mb-[59px] text-black-900 text-right text-xl"
                                                size="txtDMSansRegular20Black900"
                                              >
                                                31
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute bg-gray-100_02 flex flex-col items-center justify-start right-[0] top-[0] w-1/4">
                                          <div
                                            className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group56.svg')",
                                            }}
                                          >
                                            <Text
                                              className="mb-[59px] text-black-900 text-right text-xl"
                                              size="txtDMSansRegular20Black900"
                                            >
                                              4
                                            </Text>
                                          </div>
                                        </div>
                                        <div className="absolute bg-gray-100_02 flex flex-col items-center justify-start right-[0] top-[20%] w-1/4">
                                          <div
                                            className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group56.svg')",
                                            }}
                                          >
                                            <Text
                                              className="mb-[59px] text-black-900 text-right text-xl"
                                              size="txtDMSansRegular20Black900"
                                            >
                                              11
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute bg-gray-100_02 flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-1/4">
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group56.svg')",
                                          }}
                                        >
                                          <Text
                                            className="mb-[59px] text-black-900 text-right text-xl"
                                            size="txtDMSansRegular20Black900"
                                          >
                                            18
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute bg-gray-100_02 bottom-[20%] flex flex-col items-center justify-start right-[0] w-1/4">
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group56.svg')",
                                          }}
                                        >
                                          <Text
                                            className="mb-[59px] text-black-900 text-right text-xl"
                                            size="txtDMSansRegular20Black900"
                                          >
                                            25
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-gray-100_02 bottom-[0] flex flex-col items-center justify-start right-[0] w-1/4">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group56.svg')",
                                        }}
                                      >
                                        <Text
                                          className="mb-[59px] text-black-900 text-right text-xl"
                                          size="txtDMSansRegular20Black900"
                                        >
                                          1
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex md:flex-1 flex-col items-center justify-start w-1/5 md:w-full">
                                    <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group56.svg')",
                                        }}
                                      >
                                        <Text
                                          className="mb-[59px] text-black-900 text-right text-xl"
                                          size="txtDMSansRegular20Black900"
                                        >
                                          5
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group56.svg')",
                                        }}
                                      >
                                        <Text
                                          className="mb-[60px] text-black-900 text-right text-xl"
                                          size="txtDMSansRegular20Black900"
                                        >
                                          12
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bg-gray-100_02 flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-1/5">
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group56.svg')",
                                    }}
                                  >
                                    <Text
                                      className="mb-[59px] text-black-900 text-right text-xl"
                                      size="txtDMSansRegular20Black900"
                                    >
                                      19
                                    </Text>
                                  </div>
                                </div>
                                <div className="absolute bg-gray-100_02 bottom-[20%] flex flex-col items-center justify-start right-[0] w-1/5">
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group56.svg')",
                                    }}
                                  >
                                    <Text
                                      className="mb-[59px] text-black-900 text-right text-xl"
                                      size="txtDMSansRegular20Black900"
                                    >
                                      26
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bg-gray-100_02 bottom-[0] flex flex-col items-center justify-start right-[0] w-1/5">
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group56.svg')",
                                  }}
                                >
                                  <Text
                                    className="mb-[60px] text-black-900 text-right text-xl"
                                    size="txtDMSansRegular20Black900"
                                  >
                                    2
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col items-center justify-start w-[17%] md:w-full">
                              <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group56.svg')",
                                  }}
                                >
                                  <Text
                                    className="mb-[59px] text-black-900 text-right text-xl"
                                    size="txtDMSansRegular20Black900"
                                  >
                                    6
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group56.svg')",
                                  }}
                                >
                                  <Text
                                    className="mb-[59px] text-black-900 text-right text-xl"
                                    size="txtDMSansRegular20Black900"
                                  >
                                    13
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-[20%] flex flex-col items-center justify-start right-[0] w-[17%]">
                            <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group56.svg')",
                                }}
                              >
                                <Text
                                  className="mb-[59px] text-black-900 text-right text-xl"
                                  size="txtDMSansRegular20Black900"
                                >
                                  20
                                </Text>
                              </div>
                            </div>
                            <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group56.svg')",
                                }}
                              >
                                <Text
                                  className="mb-[60px] text-black-900 text-right text-xl"
                                  size="txtDMSansRegular20Black900"
                                >
                                  27
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-gray-100_02 bottom-[0] flex flex-col items-center justify-start right-[0] w-[17%]">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group56.svg')",
                            }}
                          >
                            <Text
                              className="mb-[59px] text-black-900 text-right text-xl"
                              size="txtDMSansRegular20Black900"
                            >
                              3
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[15%] md:w-full">
                        <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group56.svg')",
                            }}
                          >
                            <Text
                              className="mb-[59px] text-black-900 text-right text-xl"
                              size="txtDMSansRegular20Black900"
                            >
                              7
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-100_02 flex flex-col items-center justify-start w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group56.svg')",
                            }}
                          >
                            <Text
                              className="mb-[59px] text-black-900 text-right text-xl"
                              size="txtDMSansRegular20Black900"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gray-100_02 flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[15%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group56.svg')",
                        }}
                      >
                        <Text
                          className="mb-[60px] text-black-900 text-right text-xl"
                          size="txtDMSansRegular20Black900"
                        >
                          21
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bg-gray-100_02 bottom-[20%] flex flex-col items-center justify-start right-[0] w-[15%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group56.svg')",
                        }}
                      >
                        <Text
                          className="mb-[59px] text-black-900 text-right text-xl"
                          size="txtDMSansRegular20Black900"
                        >
                          28
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gray-100_02 bottom-[0] flex flex-col items-center justify-start right-[0] w-[15%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[110px] items-end justify-start pb-[23px] sm:px-5 px-[23px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group56.svg')",
                      }}
                    >
                      <Text
                        className="mb-[59px] text-black-900 text-right text-xl"
                        size="txtDMSansRegular20Black900"
                      >
                        4
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[88px] h-max inset-y-[0] justify-start left-[1%] my-auto w-[92%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[22px] items-start justify-start md:ml-[0] ml-[154px] pt-1 px-1"
                    style={{ backgroundImage: "url('images/img_group.svg')" }}
                  >
                    <Text
                      className="ml-2 md:ml-[0] text-amber-600 text-sm"
                      size="txtDMSansRegular14Amber600"
                    >
                      The glossary of telescopes
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[22px] items-start justify-start md:ml-[0] ml-[464px] pt-1 px-1"
                    style={{
                      backgroundImage: "url('images/img_group_cyan_50.svg')",
                    }}
                  >
                    <Text
                      className="ml-2 md:ml-[0] text-light_blue-500 text-sm"
                      size="txtDMSansRegular14Lightblue500"
                    >
                      Space the final frontier
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[22px] items-start justify-start md:ml-[0] ml-[309px] pt-1 px-1"
                    style={{
                      backgroundImage: "url('images/img_group_green_50.svg')",
                    }}
                  >
                    <Text
                      className="ml-2 md:ml-[0] text-green-600 text-sm"
                      size="txtDMSansRegular14Green600"
                    >
                      The amazing hubble
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[22px] items-start justify-start md:ml-[0] ml-[774px] pt-1 px-1"
                    style={{
                      backgroundImage: "url('images/img_group_indigo_50.svg')",
                    }}
                  >
                    <Text
                      className="ml-2 md:ml-[0] text-indigo-A700 text-sm"
                      size="txtDMSansRegular14IndigoA700"
                    >
                      The basics of buying a telescope
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[22px] items-start justify-start mr-[774px] pt-1 px-1"
                    style={{
                      backgroundImage: "url('images/img_group_indigo_50.svg')",
                    }}
                  >
                    <Text
                      className="ml-2 md:ml-[0] text-indigo-A700 text-sm"
                      size="txtDMSansRegular14IndigoA700"
                    >
                      Dude you re getting a telescope
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleDashboardPage;
