import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const Sidebar1 = (props) => {
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

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
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
              gap: "31px",
              paddingLeft: "18px",
              color: "#697076",
              fontWeight: 500,
              fontSize: "14px",
              fontFamily: "Manrope",
              paddingTop: "18px",
              paddingBottom: "18px",
              [`&:hover, &.ps-active`]: { color: "#369eff" },
            },
          }}
          className="flex flex-col items-center justify-end mb-[500px] mt-[182px] pt-[3px] w-[58%]"
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
              <Img src="images/img_group51.svg" alt="groupNinetyNine" />
            </Button>
          </div>
        )}
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
