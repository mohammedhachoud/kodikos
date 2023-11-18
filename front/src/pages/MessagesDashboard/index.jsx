import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const MessagesDashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_home_gray_600.svg"
          alt="home"
        />
      ),
      label: "Home",
      href: "/",
      active: window.location.pathname === "/",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_calendar.svg"
          alt="calendar"
        />
      ),
      label: "Schedule",
      href: "/scheduledashboard",
      active: window.location.pathname === "/scheduledashboard",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_iconlylightoutlinefolder.svg"
          alt="iconlylightoutl"
        />
      ),
      label: "Tasks",
      href: "/tasksdashboard",
      active: window.location.pathname === "/tasksdashboard",
    },
    {
      icon: (
        <Img className="h-6 mb-[3px] w-6" src="images/img_car.svg" alt="car" />
      ),
      label: "Messages",
      href: "/messagesdashboard",
      active: window.location.pathname === "/messagesdashboard",
    },
    {
      icon: (
        <Img
          className="h-5 mb-[5px] w-5"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: "Meetings",
      href: "/meetingsdashboard",
      active: window.location.pathname === "/meetingsdashboard",
    },
    {
      icon: (
        <Img
          className="h-5 mb-1.5 w-5"
          src="images/img_music.svg"
          alt="music"
        />
      ),
      label: "Profile",
      href: "/profiledashboard",
      active: window.location.pathname === "/profiledashboard",
    },
  ];
  const [group1000004110value, setGroup1000004110value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto sm:px-5 px-[35px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[205px] flex h-screen md:hidden justify-start overflow-auto top-[0]"
          >
            <Line className="bg-gray-200 h-[1024px] ml-[203px] w-0.5" />
            <Img
              className="h-9 md:h-auto mb-[942px] mt-[45px] object-cover w-[14%]"
              src="images/img_5charmslogo1.png"
              alt="5charmslogoOne"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  paddingLeft: "18px",
                  gap: "31px",
                  color: "#697076",
                  fontWeight: 500,
                  fontSize: "14px",
                  paddingTop: "18px",
                  paddingBottom: "18px",
                  [`&:hover, &.ps-active`]: { color: "#369eff" },
                },
              }}
              className="flex flex-col items-center justify-end mb-[500px] mt-[183px] pt-[3px] w-3/5"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
            {!collapsed && (
              <Text
                className="mb-[108px] mt-[895px] text-blue_gray-900_01 text-sm"
                size="txtManropeBold14"
              >
                Need any help?
              </Text>
            )}
            {!collapsed && (
              <div className="flex flex-row gap-[13px] items-center justify-start mb-[60px] mr-[57px] mt-[934px] w-[63%]">
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
                  <Img src="images/img_group51.svg" alt="groupFifteen" />
                </Button>
              </div>
            )}
          </Sidebar>
          <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start md:ml-[0] ml-[27px] md:mt-0 mt-[77px] p-[31px] sm:px-5 w-full">
            <Text
              className="mt-0.5 text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
              size="txtManropeBold30Gray900"
            >
              Messages
            </Text>
            <Input
              name="group1000004110"
              placeholder="Search..."
              value={group1000004110value}
              onChange={(e) => setGroup1000004110value(e)}
              className="!placeholder:text-gray-500_02 !text-gray-500_02 font-dmsans leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="flex mt-[18px] rounded-lg w-[97%]"
              prefix={
                <div className="h-4 mt-[3px] mb-px mr-2 w-4 bg-gray-500_02">
                  <Img
                    className="cursor-pointer h-4 my-auto"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
              }
              suffix={
                <CloseSVG
                  fillColor="#a9abad"
                  className="cursor-pointer h-4 my-auto"
                  onClick={() => setGroup1000004110value("")}
                  style={{
                    visibility:
                      group1000004110value?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={16}
                  width={16}
                  viewBox="0 0 16 16"
                />
              }
              color="blue_100"
              size="xs"
            ></Input>
            <div className="flex flex-col font-dmsans gap-[30px] items-center justify-start mt-10 w-[99%] md:w-full">
              <div className="flex flex-row items-center justify-start w-[99%] md:w-full">
                <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                  <div className="h-[50px] relative w-[50px]">
                    <Img
                      className="h-[50px] m-auto rounded-[50%] w-[50px]"
                      src="images/img_indoorpicture.png"
                      alt="indoorpicture"
                    />
                    <div className="absolute bg-white-A700_01 bottom-[6%] flex flex-col h-3 items-center justify-start p-0.5 right-[0] rounded-[50%] w-3">
                      <div className="bg-green-400 h-2 rounded-[50%] w-2"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[15px]">
                  <Text
                    className="text-base text-gray-600"
                    size="txtDMSansBold16"
                  >
                    Killan James
                  </Text>
                  <Text
                    className="mt-1 text-blue-400 text-sm"
                    size="txtDMSansRegular14Blue400"
                  >
                    Typing...
                  </Text>
                </div>
                <div className="flex flex-col items-end justify-start ml-[51px] w-1/5">
                  <Text
                    className="text-[13px] text-blue_gray-400_01"
                    size="txtDMSansMedium13"
                  >
                    4:30 PM
                  </Text>
                  <div className="h-[19px] md:h-[23px] mt-1 relative w-[32%]">
                    <div className="absolute bg-red-600 h-4 inset-[0] justify-center m-auto rounded-[50%] w-4"></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-sm text-white-A700 w-max"
                      size="txtDMSansBold14"
                    >
                      2
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start w-full">
                <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                  <div className="h-[50px] relative w-[50px]">
                    <Img
                      className="h-[50px] m-auto rounded-[50%] w-[50px]"
                      src="images/img_indoorpicture.png"
                      alt="indoorpicture_One"
                    />
                    <Img
                      className="absolute h-[50px] inset-[0] justify-center m-auto rounded-[50%] w-[50px]"
                      src="images/img_seriouslooking.png"
                      alt="seriouslooking"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start ml-[15px] mt-1">
                  <Text
                    className="text-base text-gray-600"
                    size="txtDMSansBold16"
                  >
                    Design Team
                  </Text>
                  <Text
                    className="mt-0.5 text-blue_gray-400_01 text-sm"
                    size="txtDMSansRegular14Bluegray40001"
                  >
                    Hello! Everyone
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-end justify-start ml-[52px] mt-1 w-1/5">
                  <Text
                    className="text-[13px] text-blue_gray-400_01"
                    size="txtDMSansMedium13"
                  >
                    9:36 AM
                  </Text>
                  <Img
                    className="h-2"
                    src="images/img_checkmark_green_400.svg"
                    alt="checkmark"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                  <div className="h-[50px] relative w-[50px]">
                    <Img
                      className="h-[50px] m-auto rounded-[50%] w-[50px]"
                      src="images/img_indoorpicture.png"
                      alt="indoorpicture_Two"
                    />
                    <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                      <Img
                        className="h-[50px] m-auto rounded-[50%] w-[50px]"
                        src="images/img_seriouslooking.png"
                        alt="seriouslooking_One"
                      />
                      <Img
                        className="absolute h-[50px] inset-[0] justify-center m-auto rounded-[50%] w-[50px]"
                        src="images/img_portaithandsom.png"
                        alt="portaithandsom"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-[3px]">
                  <Text
                    className="text-base text-gray-600"
                    size="txtDMSansBold16"
                  >
                    Ahmed Medi
                  </Text>
                  <Text
                    className="mt-0.5 text-blue_gray-400_01 text-sm"
                    size="txtDMSansRegular14Bluegray40001"
                  >
                    Wow really Cool 🔥
                  </Text>
                </div>
                <Text
                  className="mt-1.5 text-[13px] text-blue_gray-400_01"
                  size="txtDMSansMedium13"
                >
                  1:15 AM
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-dmsans gap-[13px] items-start justify-start mb-[7px] mt-[35px] w-full">
              <div className="flex flex-row gap-[9px] items-start justify-start w-[37%] md:w-full">
                <Img
                  className="h-3 w-3"
                  src="images/img_car_gray_900.svg"
                  alt="car_One"
                />
                <Text
                  className="text-gray-900 text-sm"
                  size="txtDMSansRegular14Gray900"
                >
                  All Message
                </Text>
              </div>
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <List
                  className="flex flex-col gap-[30px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-start justify-start my-0 w-full">
                    <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                      <div className="h-[50px] relative w-[50px]">
                        <Img
                          className="h-[50px] m-auto rounded-[50%] w-[50px]"
                          src="images/img_indoorpicture.png"
                          alt="indoorpicture"
                        />
                        <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                          <Img
                            className="h-[50px] m-auto rounded-[50%] w-[50px]"
                            src="images/img_seriouslooking.png"
                            alt="seriouslooking"
                          />
                          <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                            <Img
                              className="h-[50px] m-auto rounded-[50%] w-[50px]"
                              src="images/img_portaithandsom.png"
                              alt="portaithandsom"
                            />
                            <Img
                              className="absolute h-[50px] inset-[0] justify-center m-auto rounded-[50%] w-[50px]"
                              src="images/img_horizontalshot.png"
                              alt="horizontalshot"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-[15px] mt-[3px]">
                      <Text
                        className="text-base text-gray-600"
                        size="txtDMSansBold16"
                      >
                        Claudia Maudi
                      </Text>
                      <Text
                        className="mt-1 text-green-500 text-sm"
                        size="txtDMSansRegular14Green500"
                      >
                        Typing...
                      </Text>
                    </div>
                    <Text
                      className="ml-11 mt-[5px] text-[13px] text-blue_gray-400_01"
                      size="txtDMSansMedium13"
                    >
                      4:30 PM
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start mr-1.5 my-0 w-[98%] md:w-full">
                    <div className="flex flex-row items-start justify-start w-full">
                      <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                        <div className="h-[50px] relative w-[50px]">
                          <Img
                            className="h-[50px] m-auto rounded-[50%] w-[50px]"
                            src="images/img_indoorpicture.png"
                            alt="indoorpicture"
                          />
                          <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                            <Img
                              className="h-[50px] m-auto rounded-[50%] w-[50px]"
                              src="images/img_seriouslooking.png"
                              alt="seriouslooking"
                            />
                            <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                              <Img
                                className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                src="images/img_portaithandsom.png"
                                alt="portaithandsom"
                              />
                              <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                                <Img
                                  className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                  src="images/img_portraithandso.png"
                                  alt="portraithandso"
                                />
                                <div className="absolute bg-white-A700_01 bottom-[6%] flex flex-col h-3 items-center justify-start p-0.5 right-[0] rounded-[50%] w-3">
                                  <div className="bg-green-400 h-2 rounded-[50%] w-2"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start ml-[15px] mt-[3px]">
                        <Text
                          className="text-base text-gray-600"
                          size="txtDMSansBold16"
                        >
                          Novita
                        </Text>
                        <Text
                          className="mt-1 text-blue_gray-400_01 text-sm"
                          size="txtDMSansRegular14Bluegray40001"
                        >
                          yah, nice design
                        </Text>
                      </div>
                      <div className="flex flex-col items-end justify-start ml-[46px] mt-[5px] w-[19%]">
                        <Text
                          className="text-[13px] text-blue_gray-400_01"
                          size="txtDMSansMedium13"
                        >
                          4:30 PM
                        </Text>
                        <div className="h-[19px] md:h-[23px] mt-1 relative w-[33%]">
                          <div className="absolute bg-red-600 h-4 inset-[0] justify-center m-auto rounded-[50%] w-4"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-sm text-white-A700 w-max"
                            size="txtDMSansBold14"
                          >
                            2
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start mr-[5px] my-0 w-[99%] md:w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-[56%]">
                        <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                          <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                            <div className="h-[50px] relative w-[50px]">
                              <Img
                                className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                src="images/img_indoorpicture.png"
                                alt="indoorpicture"
                              />
                              <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                                <Img
                                  className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                  src="images/img_seriouslooking.png"
                                  alt="seriouslooking"
                                />
                                <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                                  <Img
                                    className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                    src="images/img_portaithandsom.png"
                                    alt="portaithandsom"
                                  />
                                  <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                                    <Img
                                      className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                      src="images/img_portraithandso.png"
                                      alt="portraithandso"
                                    />
                                    <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                                      <Img
                                        className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                        src="images/img_portraithandso_50x50.png"
                                        alt="portraithandso_One"
                                      />
                                      <div className="absolute bg-white-A700_01 bottom-[0] flex flex-col h-3 items-center justify-start p-0.5 right-[0] rounded-[50%] w-3">
                                        <div className="bg-green-400 h-2 rounded-[50%] w-2"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-gray-600"
                            size="txtDMSansBold16"
                          >
                            Milie Nose
                          </Text>
                          <Text
                            className="text-blue_gray-400_01 text-sm"
                            size="txtDMSansRegular14Bluegray40001"
                          >
                            Awesome 🔥
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start my-1 w-[19%]">
                        <Text
                          className="text-[13px] text-blue_gray-400_01"
                          size="txtDMSansMedium13"
                        >
                          8:20 PM
                        </Text>
                        <div className="h-[19px] md:h-[23px] mt-1 relative w-[32%]">
                          <div className="absolute bg-red-600 h-4 inset-[0] justify-center m-auto rounded-[50%] w-4"></div>
                          <Text
                            className="absolute h-full inset-y-[0] left-[31%] my-auto text-sm text-white-A700"
                            size="txtDMSansBold14"
                          >
                            1
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row items-start justify-between my-0 w-full">
                    <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                      <div className="h-[50px] relative w-[50px]">
                        <Img
                          className="h-[50px] m-auto rounded-[50%] w-[50px]"
                          src="images/img_indoorpicture.png"
                          alt="indoorpicture"
                        />
                        <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                          <Img
                            className="h-[50px] m-auto rounded-[50%] w-[50px]"
                            src="images/img_seriouslooking.png"
                            alt="seriouslooking"
                          />
                          <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                            <Img
                              className="h-[50px] m-auto rounded-[50%] w-[50px]"
                              src="images/img_portaithandsom.png"
                              alt="portaithandsom"
                            />
                            <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                              <Img
                                className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                src="images/img_portraithandso.png"
                                alt="portraithandso"
                              />
                              <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                                <Img
                                  className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                  src="images/img_portraithandso_50x50.png"
                                  alt="portraithandso_One"
                                />
                                <Img
                                  className="absolute h-[50px] inset-[0] justify-center m-auto rounded-[50%] w-[50px]"
                                  src="images/img_benparkerohke.png"
                                  alt="benparkerohke"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-11 md:h-[47px] mt-[3px] relative w-[44%]">
                      <div className="absolute flex flex-col h-full inset-[0] justify-center m-auto w-full">
                        <Text
                          className="text-base text-gray-600"
                          size="txtDMSansBold16"
                        >
                          Ikhsan SD
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[17px] mt-1 text-blue_gray-400_01 text-sm"
                          size="txtDMSansRegular14Bluegray40001"
                        >
                          Voice message
                        </Text>
                      </div>
                      <Img
                        className="absolute bottom-[5%] h-[17px] left-[0]"
                        src="images/img_microphone.svg"
                        alt="microphone"
                      />
                    </div>
                    <Text
                      className="mt-[7px] text-[13px] text-blue_gray-400_01"
                      size="txtDMSansMedium13"
                    >
                      yesterday
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[54%]">
                        <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                          <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                            <div className="h-[50px] relative w-[50px]">
                              <Img
                                className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                src="images/img_indoorpicture.png"
                                alt="indoorpicture"
                              />
                              <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                                <Img
                                  className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                  src="images/img_seriouslooking.png"
                                  alt="seriouslooking"
                                />
                                <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                                  <Img
                                    className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                    src="images/img_portaithandsom.png"
                                    alt="portaithandsom"
                                  />
                                  <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                                    <Img
                                      className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                      src="images/img_portraithandso.png"
                                      alt="portraithandso"
                                    />
                                    <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                                      <Img
                                        className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                        src="images/img_portraithandso_50x50.png"
                                        alt="portraithandso_One"
                                      />
                                      <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                                        <Img
                                          className="h-[50px] m-auto rounded-[50%] w-[50px]"
                                          src="images/img_younghandsome.png"
                                          alt="younghandsome"
                                        />
                                        <div className="absolute bg-white-A700_01 bottom-[0] flex flex-col h-3 items-center justify-start p-0.5 right-[0] rounded-[50%] w-3">
                                          <div className="bg-green-400 h-2 rounded-[50%] w-2"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start mb-0.5 mt-[5px]">
                          <Text
                            className="text-base text-gray-600"
                            size="txtDMSansBold16"
                          >
                            Aditya
                          </Text>
                          <Text
                            className="mt-0.5 text-blue_gray-400_01 text-sm"
                            size="txtDMSansRegular14Bluegray40001"
                          >
                            publish now
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-end justify-start w-[24%]">
                        <Text
                          className="text-[13px] text-blue_gray-400_01"
                          size="txtDMSansMedium13"
                        >
                          yesterday
                        </Text>
                        <Img
                          className="h-2"
                          src="images/img_checkmark_green_400.svg"
                          alt="checkmark"
                        />
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                  <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                    <div className="h-[50px] relative w-[50px]">
                      <Img
                        className="h-[50px] m-auto rounded-[50%] w-[50px]"
                        src="images/img_indoorpicture.png"
                        alt="indoorpicture_Three"
                      />
                      <div className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]">
                        <Img
                          className="h-[50px] m-auto rounded-[50%] w-[50px]"
                          src="images/img_seriouslooking.png"
                          alt="seriouslooking_Two"
                        />
                        <Img
                          className="absolute h-[50px] inset-[0] justify-center m-auto rounded-[50%] w-[50px]"
                          src="images/img_portaithandsom.png"
                          alt="portaithandsom_One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[3px]">
                    <Text
                      className="text-base text-gray-600"
                      size="txtDMSansBold16"
                    >
                      Ahmed Medi
                    </Text>
                    <Text
                      className="mt-0.5 text-blue_gray-400_01 text-sm"
                      size="txtDMSansRegular14Bluegray40001"
                    >
                      Wow really Cool 🔥
                    </Text>
                  </div>
                  <Text
                    className="mt-1.5 text-[13px] text-blue_gray-400_01"
                    size="txtDMSansMedium13"
                  >
                    1:15 AM
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[15px] justify-start mb-[38px] md:ml-[0] ml-[31px] md:mt-0 mt-8 w-full">
            <div className="flex flex-row gap-[82px] items-center justify-end md:ml-[0] ml-[419px] w-[46%] md:w-full">
              <Img
                className="h-[26px] w-[25px]"
                src="images/img_claritynotific.svg"
                alt="claritynotific"
              />
              <div className="bg-blue-400_63 flex flex-col items-start justify-end p-[7px] rounded-[16px] w-[70%]">
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
            <div className="flex flex-col font-dmsans items-center justify-start mr-[139px] w-[82%] md:w-full">
              <div className="flex flex-col gap-10 items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-row gap-[18px] items-center justify-between w-[56%] sm:w-full">
                      <div className="flex flex-col h-[60px] items-center justify-start w-[60px]">
                        <div className="h-[60px] relative w-[60px]">
                          <Img
                            className="h-[60px] m-auto rounded-[50%] w-[60px]"
                            src="images/img_indoorpicture_60x60.png"
                            alt="indoorpicture_Four"
                          />
                          <div className="absolute h-[60px] inset-[0] justify-center m-auto w-[60px]">
                            <Img
                              className="h-[60px] m-auto rounded-[50%] w-[60px]"
                              src="images/img_seriouslooking_60x60.png"
                              alt="seriouslooking_Three"
                            />
                            <div className="absolute h-[60px] inset-[0] justify-center m-auto w-[60px]">
                              <Img
                                className="h-[60px] m-auto rounded-[50%] w-[60px]"
                                src="images/img_portaithandsom_60x60.png"
                                alt="portaithandsom_Two"
                              />
                              <Img
                                className="absolute h-[60px] inset-[0] justify-center m-auto rounded-[50%] w-[60px]"
                                src="images/img_portraithandso_60x60.png"
                                alt="portraithandso"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                          size="txtDMSansMedium30"
                        >
                          Development Team
                        </Text>
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtDMSansMedium14"
                        >
                          60 member, 10 online
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-row gap-3 items-center justify-between w-1/5 sm:w-full">
                      <div className="flex relative w-[64%]">
                        <div className="md:h-[27px] h-[29px] my-auto w-[70%]">
                          <div className="absolute bottom-[0] h-[27px] left-[0] w-[27px]">
                            <Img
                              className="h-[27px] m-auto rounded-[50%] w-[27px]"
                              src="images/img_derickmckinney.png"
                              alt="derickmckinney"
                            />
                            <div className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]">
                              <Img
                                className="h-[27px] m-auto rounded-[50%] w-[27px]"
                                src="images/img_confidentathle.png"
                                alt="confidentathle"
                              />
                              <div className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]">
                                <Img
                                  className="h-[27px] m-auto rounded-[50%] w-[27px]"
                                  src="images/img_halflengthsho.png"
                                  alt="halflengthsho"
                                />
                                <div className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]">
                                  <Img
                                    className="h-[27px] m-auto rounded-[50%] w-[27px]"
                                    src="images/img_horizontalshot_27x27.png"
                                    alt="horizontalshot"
                                  />
                                  <div className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]">
                                    <Img
                                      className="h-[27px] m-auto rounded-[50%] w-[27px]"
                                      src="images/img_indoorpicture_27x27.png"
                                      alt="indoorpicture_Five"
                                    />
                                    <Img
                                      className="absolute h-[27px] inset-[0] justify-center m-auto rounded-[50%] w-[27px]"
                                      src="images/img_portaithandsom_27x27.png"
                                      alt="portaithandsom_Three"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-gray-900_01 flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] rounded-[14px] w-[29px]">
                            <div className="h-[27px] relative w-[27px]">
                              <Img
                                className="h-[27px] m-auto rounded-[50%] w-[27px]"
                                src="images/img_derickmckinney.png"
                                alt="derickmckinney_One"
                              />
                              <div className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]">
                                <Img
                                  className="h-[27px] m-auto rounded-[50%] w-[27px]"
                                  src="images/img_confidentathle.png"
                                  alt="confidentathle_One"
                                />
                                <div className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]">
                                  <Img
                                    className="h-[27px] m-auto rounded-[50%] w-[27px]"
                                    src="images/img_halflengthsho.png"
                                    alt="halflengthsho_One"
                                  />
                                  <div className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]">
                                    <Img
                                      className="h-[27px] m-auto rounded-[50%] w-[27px]"
                                      src="images/img_horizontalshot_27x27.png"
                                      alt="horizontalshot_One"
                                    />
                                    <div className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]">
                                      <Img
                                        className="h-[27px] m-auto rounded-[50%] w-[27px]"
                                        src="images/img_indoorpicture_27x27.png"
                                        alt="indoorpicture_Six"
                                      />
                                      <Img
                                        className="absolute h-[27px] inset-[0] justify-center m-auto rounded-[50%] w-[27px]"
                                        src="images/img_portraithandso_27x27.png"
                                        alt="portraithandso_One"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-900_01 flex flex-col h-[29px] items-center justify-start ml-[-6.93px] my-auto rounded-[14px] w-[29px] z-[1]">
                          <div className="h-[27px] relative w-[27px]">
                            <Img
                              className="h-[27px] m-auto rounded-[50%] w-[27px]"
                              src="images/img_derickmckinney.png"
                              alt="derickmckinney_Two"
                            />
                            <div className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]">
                              <Img
                                className="h-[27px] m-auto rounded-[50%] w-[27px]"
                                src="images/img_confidentathle.png"
                                alt="confidentathle_Two"
                              />
                              <div className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]">
                                <Img
                                  className="h-[27px] m-auto rounded-[50%] w-[27px]"
                                  src="images/img_halflengthsho.png"
                                  alt="halflengthsho_Two"
                                />
                                <div className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]">
                                  <Img
                                    className="h-[27px] m-auto rounded-[50%] w-[27px]"
                                    src="images/img_horizontalshot_27x27.png"
                                    alt="horizontalshot_Two"
                                  />
                                  <Img
                                    className="absolute h-[27px] inset-[0] justify-center m-auto rounded-[50%] w-[27px]"
                                    src="images/img_indoorpicture_27x27.png"
                                    alt="indoorpicture_Seven"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col h-8 items-center justify-start w-8">
                        <div className="bg-blue-100 border border-dashed border-gray-900 flex flex-col h-8 items-center justify-start p-[3px] rounded-[50%] w-8">
                          <Text
                            className="text-gray-900 text-lg"
                            size="txtDMSansMedium18"
                          >
                            +
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[3px] mt-[58px] w-[54%] md:w-full">
                    <div className="flex flex-col h-[34px] items-center justify-start mt-1 w-[34px]">
                      <Img
                        className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                        src="images/img_indoorpicture_34x34.png"
                        alt="indoorpicture_Eight"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[87%]">
                      <div className="flex flex-row gap-[30px] items-center justify-start w-[61%] md:w-full">
                        <Text
                          className="text-base text-gray-600"
                          size="txtDMSansBold16"
                        >
                          Killan James
                        </Text>
                        <Text
                          className="text-[13px] text-blue_gray-400_02"
                          size="txtDMSansRegular13"
                        >
                          10:12 AM
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-between mt-1 w-full">
                        <Input
                          name="group1000004146"
                          placeholder="Hi, Are you still Web Designer."
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                          wrapClassName="rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px]"
                          color="blue_gray_400_01"
                          size="sm"
                        ></Input>
                        <Img
                          className="h-3.5"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start ml-12 md:ml-[0] mt-2 w-[44%] md:w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[260px] text-center text-sm"
                      shape="round"
                      color="blue_gray_400_01"
                      size="sm"
                      variant="fill"
                    >
                      would love to see some Design 😁
                    </Button>
                    <Img
                      className="h-3.5"
                      src="images/img_vector.svg"
                      alt="vector_One"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-8 w-[97%] md:w-full">
                    <Line className="bg-gray-900_02 h-px mb-[9px] sm:mt-0 mt-1.5 w-[38%]" />
                    <Text
                      className="text-[13px] text-blue_gray-500"
                      size="txtDMSansMedium13Bluegray500"
                    >
                      Today, March 24
                    </Text>
                    <Line className="bg-gray-900_02 h-px mb-[9px] sm:mt-0 mt-1.5 w-[38%]" />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-[23px] w-[97%] md:w-full">
                    <div className="flex flex-col h-[34px] items-center justify-start sm:mt-0 mt-1 w-[34px]">
                      <Img
                        className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                        src="images/img_horizontalshot_34x34.png"
                        alt="horizontalshot_Three"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[86%] sm:w-full">
                      <div className="flex flex-row gap-[9px] items-center justify-start w-[34%] md:w-full">
                        <Text
                          className="text-base text-gray-600"
                          size="txtDMSansBold16"
                        >
                          Claudia Maudi
                        </Text>
                        <Text
                          className="text-[13px] text-blue_gray-400_02"
                          size="txtDMSansRegular13"
                        >
                          10:30 AM
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3.5 items-center justify-start mt-[3px] w-[70%] md:w-full">
                        <div className="bg-blue_gray-400_01 flex flex-col items-center justify-start p-2.5 rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px]">
                          <Text
                            className="my-[3px] text-sm text-white-A700"
                            size="txtDMSansMedium14WhiteA700"
                          >
                            <>
                              Hey, happy to hear from you. Yes, I will be back
                              in
                              <br />a couple fo days.
                            </>
                          </Text>
                        </div>
                        <Img
                          className="h-3.5"
                          src="images/img_vector.svg"
                          alt="vector_Two"
                        />
                      </div>
                      <div className="flex flex-row gap-3.5 items-center justify-start mt-2 w-[61%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[300px] text-center text-sm"
                          shape="round"
                          color="blue_gray_400_01"
                          size="sm"
                          variant="fill"
                        >
                          Here are some Design i took earlier today.
                        </Button>
                        <Img
                          className="h-3.5"
                          src="images/img_vector.svg"
                          alt="vector_Three"
                        />
                      </div>
                      <div className="flex flex-row gap-[11px] items-center justify-start mt-[11px] w-[59%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[51%]">
                          <Img
                            className="h-52 md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                            src="images/img_uh378dbwjvte9poo.png"
                            alt="uh378dbwjvte9po"
                          />
                        </div>
                        <div className="h-52 relative w-[46%]">
                          <Img
                            className="h-52 m-auto object-cover rounded-[10px] w-full"
                            src="images/img_imageprocessin.png"
                            alt="imageprocessin"
                          />
                          <Img
                            className="absolute h-52 inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
                            src="images/img_uh181kvtfxhflqyr.png"
                            alt="uh181kvtfxhflqy"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-[7px] items-center justify-end md:ml-[0] ml-[365px] mt-[55px] w-[30%] md:w-full">
                        <Text
                          className="text-[13px] text-blue_gray-400_02"
                          size="txtDMSansRegular13"
                        >
                          10:30 AM
                        </Text>
                        <Text
                          className="text-[13px] text-gray-600"
                          size="txtDMSansBold13"
                        >
                          Dristin Watson
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-center justify-end md:ml-[0] ml-[217px] mt-[7px] w-[59%] md:w-full">
                        <Img
                          className="h-3.5"
                          src="images/img_vector.svg"
                          alt="vector_Four"
                        />
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[285px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] text-[13px] text-center"
                          color="blue_400"
                          size="md"
                          variant="fill"
                        >
                          Great 🔥 That’s a nice design Idea. 😍👏
                        </Button>
                      </div>
                    </div>
                    <div className="h-[34px] md:h-[445px] sm:mt-0 mt-[411px] relative w-[34px]">
                      <Img
                        className="h-[34px] m-auto rounded-[50%] w-[34px]"
                        src="images/img_horizontalshot_34x34.png"
                        alt="horizontalshot_Four"
                      />
                      <Img
                        className="absolute h-[34px] inset-[0] justify-center m-auto rounded-[50%] w-[34px]"
                        src="images/img_benparkerohke_34x34.png"
                        alt="benparkerohke"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                  <div className="bg-blue-100 flex flex-row sm:gap-10 items-center justify-between p-3.5 rounded-[25px] w-full">
                    <div className="flex flex-row gap-[15px] items-center justify-center ml-2.5">
                      <Img
                        className="h-[18px]"
                        src="images/img_microphone_blue_gray_500.svg"
                        alt="microphone"
                      />
                      <Text
                        className="text-blue_gray-300_01 text-sm"
                        size="txtDMSansMedium14Bluegray30001"
                      >
                        Add a comment...
                      </Text>
                    </div>
                    <Img
                      className="h-[21px] mr-2.5"
                      src="images/img_group1000004153.svg"
                      alt="group1000004153"
                    />
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

export default MessagesDashboardPage;
