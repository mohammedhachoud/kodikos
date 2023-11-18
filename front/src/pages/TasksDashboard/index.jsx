import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import TasksDashboardCard from "components/TasksDashboardCard";
import TasksDashboardCollabcard from "components/TasksDashboardCollabcard";

const TasksDashboardPage = () => {
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
          className="h-6 mb-[3px] w-6"
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
          className="h-6 mb-1.5 w-6"
          src="images/img_folder.svg"
          alt="folder"
        />
      ),
      label: "Tasks",
      href: "/tasksdashboard",
      active: window.location.pathname === "/tasksdashboard",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[5px] w-6"
          src="images/img_user.svg"
          alt="user"
        />
      ),
      label: "Message",
      href: "/messagesdashboard",
      active: window.location.pathname === "/messagesdashboard",
    },
    {
      icon: (
        <Img
          className="h-5 mb-[7px] w-5"
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
          className="h-5 mb-[7px] w-5"
          src="images/img_music.svg"
          alt="music"
        />
      ),
      label: "Profile",
      href: "/profiledashboard",
      active: window.location.pathname === "/profiledashboard",
    },
  ];
  const tasksDashboardCardPropList = [
    {},
    {},
    { checkmarknumber1: "2/3", checkmarknumber: "2/3" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto sm:px-5 px-[35px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[205px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col items-start justify-start ml-12 md:ml-[0] md:mt-0 mt-[105px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01"
              size="txtManropeBold30"
            >
              Individual Tasks
            </Text>
            <div className="font-dmsans gap-10 sm:gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[47px] w-full">
              {tasksDashboardCardPropList.map((props, index) => (
                <React.Fragment key={`TasksDashboardCard${index}`}>
                  <TasksDashboardCard
                    className="bg-white-A700 flex flex-1 flex-col gap-4 items-start justify-start p-2.5 rounded-md shadow-bs w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
            <TasksDashboardCard className="bg-white-A700 flex flex-col font-dmsans gap-4 items-start justify-start mt-8 p-2.5 rounded-md shadow-bs w-[260px]" />
            <div className="flex flex-col font-manrope gap-[47px] items-start justify-start mt-4 w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01"
                size="txtManropeBold30"
              >
                Collaborative Tasks
              </Text>
              <List
                className="sm:flex-col flex-row font-dmsans gap-10 grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <TasksDashboardCollabcard className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-2.5 rounded-md shadow-bs w-[260px]" />
                <TasksDashboardCollabcard className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-2.5 rounded-md shadow-bs w-[260px]" />
              </List>
            </div>
            <TasksDashboardCollabcard className="bg-white-A700 flex flex-col font-dmsans gap-4 items-start justify-start mt-8 p-2.5 rounded-md shadow-bs w-[260px]" />
          </div>
          <Img
            className="h-[26px] max-h-[26px] md:ml-[0] ml-[215px] md:mt-0 mt-[46px] sm:w-[] md:w-[]"
            src="images/img_claritynotific.svg"
            alt="claritynotific"
          />
          <div className="bg-blue-400_63 flex flex-1 flex-col items-start justify-end mb-[932px] md:ml-[0] ml-[69px] md:mt-0 mt-8 p-[7px] rounded-[16px] w-full">
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

export default TasksDashboardPage;
