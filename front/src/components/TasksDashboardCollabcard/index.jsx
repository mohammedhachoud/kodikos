import React from "react";

import { Button, Img, Text } from "components";

const TasksDashboardCollabcard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-6 items-center justify-start w-full">
          <Text
            className="flex-1 text-gray-900 text-sm w-auto"
            size="txtDMSansRegular14Gray900"
          >
            {props?.username}
          </Text>
          <Img
            className="h-5 w-5"
            src="images/img_user_blue_gray_400_01.svg"
            alt="user"
          />
        </div>
        <div className="bg-blue-400 h-[5px] rounded-sm w-[19%]"></div>
        {!!props?.tagOne ? (
          <div className="bg-blue-400 h-[5px] rounded-sm w-[19%]"></div>
        ) : null}
        <div className="flex flex-row gap-5 items-start justify-start w-full">
          <div className="flex flex-row gap-1 items-center justify-center w-auto">
            <Text
              className="text-gray-500_01 text-xs"
              size="txtDMSansRegular12"
            >
              {props?.tasknumber}
            </Text>
            <Img
              className="h-4 w-4"
              src="images/img_message.svg"
              alt="message"
            />
          </div>
          <div className="flex flex-row gap-[5px] items-center justify-center w-auto">
            <Text
              className="text-gray-500_01 text-xs"
              size="txtDMSansRegular12"
            >
              {props?.locationnumber}
            </Text>
            <Img
              className="h-4 w-4"
              src="images/img_location.svg"
              alt="location"
            />
          </div>
          <div className="flex flex-row gap-[5px] items-center justify-center w-auto">
            <Text
              className="text-gray-500_01 text-xs"
              size="txtDMSansRegular12"
            >
              {props?.checkmarknumber}
            </Text>
            <Img
              className="h-4 w-4"
              src="images/img_checkmark_gray_500_01.svg"
              alt="checkmark"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex relative w-[30%]">
              <div className="flex my-auto w-[73%]">
                <Img
                  className="h-[26px] ml-[undefinedpx] my-auto rounded-[50%] w-[26px] z-[1]"
                  src="images/img_oval.png"
                  alt="oval"
                />
                <Img
                  className="h-[26px] ml-[-10px] my-auto rounded-[50%] w-[26px] z-[1]"
                  src="images/img_oval.png"
                  alt="oval_One"
                />
              </div>
              <Button
                className="border border-solid border-white-A700 flex h-[26px] items-center justify-center ml-[-10px] my-auto rounded-[50%] w-[26px] z-[1]"
                shape="circle"
                color="indigo_600"
                size="xs"
                variant="fill"
              >
                <Img className="h-3.5" src="images/img_plus.svg" alt="plus" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TasksDashboardCollabcard.defaultProps = {
  username: "Name of the task",
  tasknumber: "07",
  locationnumber: "02",
  checkmarknumber: "1/3",
};

export default TasksDashboardCollabcard;
