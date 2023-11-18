import React from "react";

import { Button, Img, Line, List, Text } from "components";

const InMeetingDashboardPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-inter h-[1024px] mx-auto sm:pl-5 pl-[35px] relative w-full">
        <div className="absolute h-[1024px] inset-y-[0] my-auto md:px-5 right-[0] w-[91%] md:w-full">
          <Line className="bg-gray-200 h-[1024px] mb-[-140px] ml-[101px] mt-auto w-0.5 z-[1]" />
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[239px] items-center justify-end mt-auto mx-auto outline outline-[1px] outline-blue_gray-50_01 p-[38px] sm:px-5 w-full">
            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-center w-[38%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[59px] items-center justify-start p-[15px] w-[59px]"
                style={{ backgroundImage: "url('images/img_group40.svg')" }}
              >
                <Img
                  className="h-[27px] w-[27px]"
                  src="images/img_microphone_white_a700.svg"
                  alt="microphone"
                />
              </div>
              <div className="flex flex-col h-[59px] items-center justify-start sm:ml-[0] ml-[19px] w-[59px]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[59px] items-center justify-start p-[15px] w-[59px]"
                  style={{ backgroundImage: "url('images/img_group40.svg')" }}
                >
                  <Img
                    className="h-[27px] w-[27px]"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[59px] items-center justify-start sm:ml-[0] ml-[19px] p-[15px] w-[59px]"
                style={{ backgroundImage: "url('images/img_group237555.svg')" }}
              >
                <Img
                  className="h-[27px] w-[27px]"
                  src="images/img_music_blue_a700.svg"
                  alt="music"
                />
              </div>
              <div className="flex flex-col h-[59px] items-center justify-start ml-6 sm:ml-[0] w-[59px]">
                <div className="flex flex-col h-[59px] items-center justify-start w-[59px]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[59px] items-center justify-start p-[15px] w-[59px]"
                    style={{ backgroundImage: "url('images/img_group33.svg')" }}
                  >
                    <Img
                      className="h-[27px] w-[27px]"
                      src="images/img_instagram.svg"
                      alt="instagram"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[59px] items-center justify-start ml-6 sm:ml-[0] w-[59px]">
                <div className="h-[59px] relative w-[59px]">
                  <Img
                    className="h-[59px] m-auto rounded-[50%] w-[59px]"
                    src="images/img_group237555.svg"
                    alt="iconmic"
                  />
                  <Img
                    className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]"
                    src="images/img_location_blue_a700.svg"
                    alt="location"
                  />
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[59px] items-center justify-start sm:ml-[0] ml-[19px] p-[15px] w-[59px]"
                style={{ backgroundImage: "url('images/img_group237555.svg')" }}
              >
                <Img
                  className="h-[27px] w-[27px]"
                  src="images/img_bxdotshorizontalrounded.svg"
                  alt="bxdotshorizonta"
                />
              </div>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-semibold min-w-[145px] mr-[3px] rounded-[30px] text-center text-lg"
              color="red_400"
              size="lg"
              variant="fill"
            >
              End Call
            </Button>
          </div>
        </div>
        <div className="absolute flex flex-col font-manrope gap-[17px] items-end justify-start md:px-5 right-[1%] top-[3%] w-[84%]">
          <div className="flex flex-row items-center justify-between w-[32%] md:w-full">
            <Img
              className="h-[26px] w-[25px]"
              src="images/img_claritynotific.svg"
              alt="claritynotific"
            />
            <div className="bg-blue-400_63 flex flex-col items-start justify-end p-[7px] rounded-[16px]">
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
          <div className="flex flex-col gap-[46px] items-start justify-start w-[94%] md:w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01"
              size="txtManropeBold30"
            >
              In Meeting
            </Text>
            <div className="flex font-inter h-[500px] justify-end relative w-full">
              <div className="bg-blue_gray-100 h-[53px] mb-[30px] ml-auto mr-[33px] mt-auto rounded-[5px] w-[53px]"></div>
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="h-[500px] relative w-full">
                  <Img
                    className="h-[500px] m-auto object-cover rounded-[15px] w-full"
                    src="images/img_womanwithheadsetvideocall.png"
                    alt="womanwithheadse"
                  />
                  <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] items-center justify-center m-auto w-[96%]">
                    <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                      <div className="h-[45px] md:h-[46px] mt-0.5 relative w-[14%]">
                        <div className="bg-black-900_4c flex flex-col h-full items-start justify-end m-auto p-[9px] rounded-[22px] w-full">
                          <div className="bg-white-A700_a0 flex flex-col h-[27px] items-center justify-start p-2 rounded-[13px] w-[27px]">
                            <div className="bg-red-400 h-2.5 rounded-[50%] w-2.5"></div>
                          </div>
                        </div>
                        <Text
                          className="absolute bottom-[16%] inset-x-[0] mx-auto text-white-A700 text-xl w-max"
                          size="txtInterMedium20"
                        >
                          24:01
                        </Text>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[52px] items-center justify-start p-3.5 w-[52px]"
                        style={{
                          backgroundImage: "url('images/img_group41.svg')",
                        }}
                      >
                        <Img
                          className="h-6 w-6"
                          src="images/img_settings_white_a700.svg"
                          alt="settings"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex flex-col h-[49px] md:h-auto items-start justify-start mt-[18px] w-[189px]">
                        <Button
                          className="cursor-pointer font-medium min-w-[189px] rounded-[24px] text-center text-xl"
                          color="black_900_4c_01"
                          size="md"
                          variant="fill"
                        >
                          Adam Joseph
                        </Button>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[52px] items-end justify-start mb-[15px] pt-2 px-2 w-[52px]"
                        style={{
                          backgroundImage: "url('images/img_group41.svg')",
                        }}
                      >
                        <Img
                          className="h-[34px] mt-2.5 w-[34px]"
                          src="images/img_settings_white_a700_34x34.svg"
                          alt="settings_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter items-center justify-start w-full">
            <div className="flex flex-col gap-[18px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-3.5 items-center justify-between w-full">
                <div className="flex relative w-[51%] md:w-full">
                  <div className="flex flex-col items-center justify-start my-auto w-[51%]">
                    <div className="h-[172px] relative w-full">
                      <div className="absolute h-[172px] inset-y-[0] my-auto right-[0] w-[93%]">
                        <Img
                          className="h-[172px] m-auto object-cover rounded-[11px] w-full"
                          src="images/img_closeupyoung.png"
                          alt="closeupyoung"
                        />
                        <div className="absolute h-[172px] inset-[0] justify-center m-auto w-full">
                          <Img
                            className="h-[172px] m-auto object-cover rounded-[11px] w-full"
                            src="images/img_manwithheadsetvideocall.png"
                            alt="manwithheadsetv"
                          />
                          <div className="absolute bg-gradient  bottom-[0] flex flex-col inset-x-[0] items-end justify-end mx-auto p-[11px] w-full">
                            <Button
                              className="flex h-[38px] items-center justify-center mt-[26px] w-[38px]"
                              shape="circle"
                              color="red_400"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                className="h-[22px]"
                                src="images/img_alarm_white_a700.svg"
                                alt="alarm"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[5%] flex flex-col items-center justify-start left-[0] w-auto">
                        <Button
                          className="cursor-pointer font-medium min-w-[133px] rounded-[17px] text-base text-center"
                          color="black_900_4c_01"
                          size="sm"
                          variant="fill"
                        >
                          Cassie Jung
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-[-10.09px] my-auto w-[51%] z-[1]">
                    <div className="h-[172px] relative w-full">
                      <div className="absolute h-[172px] inset-y-[0] my-auto right-[0] w-[92%]">
                        <div className="absolute h-[172px] inset-[0] justify-center m-auto w-full">
                          <Img
                            className="h-[172px] m-auto object-cover rounded-[11px] w-full"
                            src="images/img_closeupyoung_172x282.png"
                            alt="closeupyoung_One"
                          />
                          <div className="absolute h-[172px] inset-[0] justify-center m-auto w-full">
                            <Img
                              className="h-[172px] m-auto object-cover rounded-[11px] w-full"
                              src="images/img_colleagueshavi.png"
                              alt="colleagueshavi"
                            />
                            <Img
                              className="absolute h-[172px] inset-[0] justify-center m-auto object-cover rounded-[11px] w-full"
                              src="images/img_118059258happy.png"
                              alt="118059258happy"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-gradient  bottom-[0] flex flex-col inset-x-[0] items-end justify-end mx-auto p-2.5 w-full">
                          <Button
                            className="flex h-[38px] items-center justify-center mt-[25px] w-[38px]"
                            shape="circle"
                            color="blue_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-[22px]"
                              src="images/img_microphone_white_a700_38x38.svg"
                              alt="microphone_One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="absolute bottom-[4%] flex flex-col items-center justify-start left-[0] w-auto">
                        <Button
                          className="cursor-pointer font-medium min-w-[125px] rounded-[17px] text-base text-center"
                          color="black_900_4c_01"
                          size="sm"
                          variant="fill"
                        >
                          Alice Wong
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-3.5 grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[172px] relative w-full">
                        <div className="absolute h-[172px] inset-[0] justify-center m-auto w-full">
                          <Img
                            className="h-[172px] m-auto object-cover rounded-[11px] w-full"
                            src="images/img_closeupyoung_172x282.png"
                            alt="closeupyoung"
                          />
                          <div className="absolute h-[172px] inset-[0] justify-center m-auto w-full">
                            <Img
                              className="h-[172px] m-auto object-cover rounded-[11px] w-full"
                              src="images/img_colleagueshavi_172x282.png"
                              alt="colleagueshavi"
                            />
                            <div className="absolute h-[172px] inset-[0] justify-center m-auto w-full">
                              <Img
                                className="h-[172px] m-auto object-cover rounded-[11px] w-full"
                                src="images/img_womanwithheadsetvideocall_172x282.png"
                                alt="womanwithheadse"
                              />
                              <Img
                                className="absolute h-[172px] inset-[0] justify-center m-auto object-cover rounded-[11px] w-full"
                                src="images/img_portraityoung.png"
                                alt="portraityoung"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-gradient  bottom-[0] flex flex-row inset-x-[0] items-end justify-between mx-auto p-[3px] w-full">
                          <div className="flex flex-col items-start justify-start mb-1 mt-10 w-auto">
                            <Button
                              className="cursor-pointer font-medium min-w-[150px] rounded-[17px] text-base text-center"
                              color="black_900_4c_01"
                              size="sm"
                              variant="fill"
                            >
                              Theresa Webb
                            </Button>
                          </div>
                          <Button
                            className="flex h-[38px] items-center justify-center mb-2 mr-2 mt-8 w-[38px]"
                            shape="circle"
                            color="blue_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-[22px]"
                              src="images/img_microphone_white_a700_38x38.svg"
                              alt="microphone"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="h-[172px] relative w-full">
                          <div className="absolute h-[172px] inset-[0] justify-center m-auto w-full">
                            <Img
                              className="h-[172px] m-auto object-cover rounded-[11px] w-full"
                              src="images/img_closeupyoung_172x282.png"
                              alt="closeupyoung"
                            />
                            <div className="absolute h-[172px] inset-[0] justify-center m-auto w-full">
                              <Img
                                className="h-[172px] m-auto object-cover rounded-[11px] w-full"
                                src="images/img_istockphoto131.png"
                                alt="istockphoto131"
                              />
                              <Img
                                className="absolute h-[172px] inset-[0] justify-center m-auto object-cover rounded-[11px] w-full"
                                src="images/img_image15.png"
                                alt="imageFifteen"
                              />
                            </div>
                          </div>
                          <div className="absolute bg-gradient  bottom-[0] flex flex-row inset-x-[0] items-end justify-between mx-auto p-0.5 w-full">
                            <div className="flex flex-col items-start justify-start mb-1.5 mt-[39px] w-auto">
                              <Button
                                className="cursor-pointer font-medium min-w-[156px] rounded-[17px] text-base text-center"
                                color="black_900_4c_01"
                                size="sm"
                                variant="fill"
                              >
                                Christian Wong
                              </Button>
                            </div>
                            <Button
                              className="flex h-[38px] items-center justify-center mb-[9px] mr-[9px] mt-[33px] w-[38px]"
                              shape="circle"
                              color="red_400"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                className="h-[22px]"
                                src="images/img_alarm_white_a700.svg"
                                alt="alarm"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="h-[3px] overflow-hidden relative w-[35%]">
                <div className="w-full h-full absolute bg-gray_300 rounded-[1px]"></div>
                <div
                  className="h-full absolute bg-blue_A700  rounded-[1px]"
                  style={{ width: "49%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue-400_63 bottom-[4%] flex flex-col font-manrope items-center justify-start left-[3%] p-[17px] md:px-5 rounded-[18px] w-[12%]">
          <div className="flex flex-col gap-[18px] items-start justify-start mb-0.5 w-[96%] md:w-full">
            <Text
              className="text-blue_gray-900_01 text-sm"
              size="txtManropeBold14"
            >
              Need any help?
            </Text>
            <div className="flex flex-row gap-[13px] items-center justify-between w-full">
              <Text className="text-blue-400 text-xs" size="txtManropeMedium12">
                Contact Admin
              </Text>
              <Button
                className="flex h-[30px] items-center justify-center w-[30px]"
                shape="round"
                color="blue_400"
                size="sm"
                variant="outline"
              >
                <Img src="images/img_group51.svg" alt="groupTwo" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col font-manrope items-center justify-start left-[3%] md:px-5 top-[20%] w-[9%]">
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
              <Text className="text-gray-600 text-sm" size="txtManropeMedium14">
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
              <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />
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
                alt="alarm_One"
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
                alt="music_One"
              />
              <Text className="text-gray-600 text-sm" size="txtManropeMedium14">
                Profile
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="absolute h-9 left-[7%] object-cover top-[4%] w-[2%]"
          src="images/img_5charmslogo1.png"
          alt="5charmslogoOne"
        />
      </div>
    </>
  );
};

export default InMeetingDashboardPage;
