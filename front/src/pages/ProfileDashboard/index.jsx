import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const ProfileDashboardPage = () => {
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
                    src="images/img_user_gray_600.svg"
                    alt="user_One"
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
                    src="images/img_usercirlceadd.svg"
                    alt="usercirlceadd"
                  />
                  <Text
                    className="text-blue-400 text-sm"
                    size="txtManropeMedium14Blue400"
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
                    <Img src="images/img_group51.svg" alt="groupNinetyOne" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-200 md:h-0.5 h-[1024px] w-0.5 md:w-full" />
          <div className="flex flex-col gap-[13px] justify-start">
            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[735px] w-[34%] md:w-full">
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
            <div className="flex flex-col gap-[31px] items-start justify-start mr-[233px] w-4/5 md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01"
                size="txtManropeBold30"
              >
                Edit Your Profile
              </Text>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900_03"
                        size="txtDMSansMedium26"
                      >
                        First Name
                      </Text>
                      <Input
                        name="groupNinetyTwo"
                        placeholder="Mehrab"
                        className="font-medium font-roboto leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_02 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="mt-1 w-full"
                        shape="round"
                        size="md"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900_03"
                        size="txtDMSansMedium26"
                      >
                        Last Name
                      </Text>
                      <Input
                        name="groupNinetySeven"
                        placeholder="Bozorgi"
                        className="font-medium font-roboto leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_02 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="mt-[3px] w-full"
                        shape="round"
                        size="lg"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[17px] w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900_03"
                      size="txtDMSansMedium26"
                    >
                      Email
                    </Text>
                    <Input
                      name="email_One"
                      placeholder="Mehrabbozorgi.business@gmail.com"
                      className="font-medium font-roboto leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_02 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="mt-1 w-full"
                      type="email"
                      shape="round"
                      size="lg"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[21px] w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900_03"
                      size="txtDMSansMedium26"
                    >
                      Address
                    </Text>
                    <Input
                      name="groupNinetyFive"
                      placeholder="33062 Zboncak isle"
                      className="font-medium font-roboto leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_02 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="w-full"
                      shape="round"
                      size="md"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[17px] w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900_03"
                      size="txtDMSansMedium26"
                    >
                      Contact Number
                    </Text>
                    <Input
                      name="groupNinetySix"
                      placeholder="58077.79"
                      className="font-medium font-roboto leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_02 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="mt-1 w-full"
                      shape="round"
                      size="md"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[25px] w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900_03"
                      size="txtDMSansMedium26"
                    >
                      Password
                    </Text>
                    <Input
                      name="groupNinetyFour"
                      placeholder="sbdfbnd65sfdvb s"
                      className="font-medium font-roboto leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_02 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="mt-1 w-full"
                      shape="round"
                      size="md"
                    ></Input>
                  </div>
                  <div className="flex flex-row gap-[39px] items-center justify-center mt-[45px] w-[39%] md:w-full">
                    <Button
                      className="cursor-pointer font-roboto leading-[normal] min-w-[150px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                      color="blue_gray_50"
                      size="sm"
                      variant="fill"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="cursor-pointer font-dmsans font-medium leading-[normal] min-w-[150px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                      color="blue_400"
                      size="sm"
                      variant="fill"
                    >
                      Save
                    </Button>
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

export default ProfileDashboardPage;
