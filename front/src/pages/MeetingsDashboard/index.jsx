import React from "react";

import { Button, Img, Line, List, Text } from "components";

const MeetingsDashboardPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto sm:px-5 px-[35px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1365px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[45px] w-[13%] md:w-full">
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
                    src="images/img_alarm.svg"
                    alt="alarm"
                  />
                  <Text
                    className="text-blue-400 text-sm"
                    size="txtManropeMedium14Blue400"
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
                    <Img src="images/img_group51.svg" alt="groupNinetyEight" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-200 md:h-0.5 h-[1024px] md:ml-[0] ml-[35px] w-0.5 md:w-full" />
          <div className="flex md:flex-1 flex-col gap-14 items-center justify-start md:ml-[0] ml-[35px] md:mt-0 mt-[109px] w-[52%] md:w-full">
            <div className="flex flex-col gap-[34px] items-start justify-start w-[99%] md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01"
                size="txtManropeBold30"
              >
                Coming Meetings
              </Text>
              <List
                className="sm:flex-col flex-row font-dmsans gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col h-80 items-start justify-start p-[30px] sm:px-5 shadow-bs w-full"
                  style={{ backgroundImage: "url('images/img_chrono.svg')" }}
                >
                  <div className="flex flex-col items-start justify-start mb-[50px] w-[82%] md:w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-[70%] md:w-full">
                      <div className="flex flex-col h-11 items-center justify-start w-11">
                        <Img
                          className="h-11 md:h-auto rounded-[50%] w-11"
                          src="images/img_photo.png"
                          alt="photo"
                        />
                      </div>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtDMSansRegular14"
                      >
                        Albert Wong
                      </Text>
                    </div>
                    <Text
                      className="mt-[21px] text-black-900 text-xl"
                      size="txtDMSansMedium20"
                    >
                      Week Recap
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-[10px] text-gray-900 w-[42%] sm:w-full"
                      size="txtDMSansRegular10"
                    >
                      17/11/2023 12 pm
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-[15px] w-[93%] md:w-full">
                      <Button
                        className="cursor-pointer min-w-[108px] text-center text-sm"
                        shape="round"
                        color="blue_400"
                        size="sm"
                        variant="fill"
                      >
                        Join Meeting
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col h-80 items-start justify-start p-[30px] sm:px-5 shadow-bs w-full"
                  style={{ backgroundImage: "url('images/img_chrono.svg')" }}
                >
                  <div className="flex flex-col items-start justify-start mb-12 w-[82%] md:w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[96%] md:w-full">
                      <div className="flex flex-col h-11 items-center justify-start w-11">
                        <Img
                          className="h-11 md:h-auto rounded-[50%] w-11"
                          src="images/img_photo_44x44.png"
                          alt="photo"
                        />
                      </div>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtDMSansRegular14"
                      >
                        Theodore Walton
                      </Text>
                    </div>
                    <Text
                      className="mt-[23px] text-black-900 text-xl"
                      size="txtDMSansMedium20"
                    >
                      Week Recap
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-[10px] text-gray-900"
                      size="txtDMSansRegular10"
                    >
                      <>
                        23/11/2023
                        <br />2 pm
                      </>
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-[15px] w-[93%] md:w-full">
                      <Button
                        className="cursor-pointer min-w-[108px] text-center text-sm"
                        shape="round"
                        color="blue_400"
                        size="sm"
                        variant="fill"
                      >
                        Join Meeting
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-1 flex-col h-80 items-start justify-start p-[30px] sm:px-5 shadow-bs w-full"
                  style={{ backgroundImage: "url('images/img_card.svg')" }}
                >
                  <div className="flex flex-col items-start justify-start mb-[50px] w-[82%] md:w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-4/5 md:w-full">
                      <div className="flex flex-col h-11 items-center justify-start w-11">
                        <Img
                          className="h-11 md:h-auto rounded-[50%] w-11"
                          src="images/img_photo_1.png"
                          alt="photo"
                        />
                      </div>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtDMSansRegular14"
                      >
                        Bobby Jacobs
                      </Text>
                    </div>
                    <Text
                      className="mt-[21px] text-black-900 text-xl"
                      size="txtDMSansMedium20"
                    >
                      Week Recap
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-[10px] text-gray-900 w-[42%] sm:w-full"
                      size="txtDMSansRegular10"
                    >
                      27/11/2023 10 am
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-[15px] w-[93%] md:w-full">
                      <Button
                        className="cursor-pointer min-w-[108px] text-center text-sm"
                        shape="round"
                        color="blue_400"
                        size="sm"
                        variant="fill"
                      >
                        Join Meeting
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="sm:h-[322px] h-[375px] md:h-[759px] relative w-[99%] md:w-full">
              <Text
                className="absolute left-[2%] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01 top-[0]"
                size="txtManropeBold30"
              >
                Past Meetings
              </Text>
              <div className="absolute flex font-dmsans sm:h-[322px] h-[368px] md:h-[759px] inset-[0] justify-end m-auto pt-[46px] w-full">
                <Img
                  className="h-[322px] mt-auto mx-auto"
                  src="images/img_chrono.svg"
                  alt="elementsbg"
                />
                <div className="absolute bottom-[5%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[92%]">
                  <List
                    className="flex flex-col gap-5 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col gap-5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                          <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-start w-[27%] md:w-full">
                            <div className="flex flex-col h-10 items-center justify-start w-10">
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                src="images/img_photo_40x40.png"
                                alt="photo"
                              />
                            </div>
                            <Text
                              className="text-black-900 text-sm"
                              size="txtDMSansRegular14"
                            >
                              Chinmay Sarasvati
                            </Text>
                          </div>
                          <Text
                            className="ml-11 md:ml-[0] text-black-900_7e text-sm"
                            size="txtDMSansRegular14Black9007e"
                          >
                            23 Sep 2019
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[71px] text-black-900_7e text-sm"
                            size="txtDMSansRegular14Black9007e"
                          >
                            02:52PM
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[143px] text-base text-blue-400 text-right"
                            size="txtDMSansMedium16Blue400"
                          >
                            Message
                          </Text>
                        </div>
                        <Img
                          className="h-px"
                          src="images/img_elementsline.svg"
                          alt="elementsline"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col gap-5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                          <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-start w-1/5 md:w-full">
                            <div className="flex flex-col h-10 items-center justify-start w-10">
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                src="images/img_photo_2.png"
                                alt="photo"
                              />
                            </div>
                            <Text
                              className="text-black-900 text-sm"
                              size="txtDMSansRegular14"
                            >
                              Dina Glenn
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[93px] text-black-900_7e text-sm"
                            size="txtDMSansRegular14Black9007e"
                          >
                            22 Sep 2019
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[72px] text-black-900_7e text-sm"
                            size="txtDMSansRegular14Black9007e"
                          >
                            01:36AM
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[145px] text-base text-blue-400 text-right"
                            size="txtDMSansMedium16Blue400"
                          >
                            Message
                          </Text>
                        </div>
                        <Img
                          className="h-px"
                          src="images/img_elementsline.svg"
                          alt="elementsline"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col gap-5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                          <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-start pr-0.5 w-[26%] md:w-full">
                            <div className="flex flex-col h-10 items-center justify-start w-10">
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                src="images/img_photo_3.png"
                                alt="photo"
                              />
                            </div>
                            <Text
                              className="text-black-900 text-sm"
                              size="txtDMSansRegular14"
                            >
                              Izabella Tabakova
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[50px] text-black-900_7e text-sm"
                            size="txtDMSansRegular14Black9007e"
                          >
                            29 Oct 2019
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[72px] text-black-900_7e text-sm"
                            size="txtDMSansRegular14Black9007e"
                          >
                            06:58PM
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[141px] text-base text-blue-400 text-right"
                            size="txtDMSansMedium16Blue400"
                          >
                            Message
                          </Text>
                        </div>
                        <Img
                          className="h-px"
                          src="images/img_elementsline.svg"
                          alt="elementsline"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                      <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-start w-[22%] md:w-full">
                        <div className="flex flex-col h-10 items-center justify-start w-10">
                          <Img
                            className="h-10 md:h-auto rounded-[50%] w-10"
                            src="images/img_photo_4.png"
                            alt="photo"
                          />
                        </div>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtDMSansRegular14"
                        >
                          Opi Watihana
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[76px] text-black-900_7e text-sm"
                        size="txtDMSansRegular14Black9007e"
                      >
                        16 May 2019
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[72px] text-black-900_7e text-sm"
                        size="txtDMSansRegular14Black9007e"
                      >
                        02:41PM
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[147px] text-base text-blue-400 text-right"
                        size="txtDMSansMedium16Blue400"
                      >
                        Message
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="h-[26px] md:ml-[0] ml-[61px] md:mt-0 mt-11 w-[25px]"
            src="images/img_claritynotific.svg"
            alt="claritynotific"
          />
          <div className="bg-blue-400_63 flex md:flex-1 flex-col items-start justify-end mb-[932px] md:ml-[0] ml-[91px] md:mt-0 mt-8 p-[7px] rounded-[16px] w-[18%] md:w-full">
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
      </div>
    </>
  );
};

export default MeetingsDashboardPage;
