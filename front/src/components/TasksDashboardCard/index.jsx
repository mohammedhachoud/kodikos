import React from "react";

import { Button, Img, Text } from "components";

const TasksDashboardCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[280px] h-full items-center justify-start m-auto w-[97%] md:w-full">
          <div className="flex flex-row gap-6 items-center justify-start w-full">
            <Text
              className="flex-1 text-gray-900 text-sm w-auto"
              size="txtDMSansBold14Gray900"
            >
              {props?.taskname1}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_user_blue_gray_400_01.svg"
              alt="user_Two"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-center w-auto">
                <Text
                  className="text-gray-500_01 text-xs"
                  size="txtDMSansRegular12"
                >
                  {props?.tasknumber1}
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_message.svg"
                  alt="message_Two"
                />
              </div>
              <div className="flex flex-row gap-[5px] items-center justify-center w-auto">
                <Text
                  className="text-gray-500_01 text-xs"
                  size="txtDMSansRegular12"
                >
                  {props?.locationnumber1}
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_location.svg"
                  alt="location_One"
                />
              </div>
              <div className="flex flex-row gap-[5px] items-center justify-center w-auto">
                <Text
                  className="text-gray-500_01 text-xs"
                  size="txtDMSansRegular12"
                >
                  {props?.checkmarknumber1}
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_checkmark_gray_500_01.svg"
                  alt="checkmark_One"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-md w-full">
          <div className="bg-white-A700 flex flex-col md:gap-10 gap-[280px] h-[345px] md:h-auto items-start justify-start p-2.5 rounded-md shadow-bs w-[532px] md:w-full">
            <div className="flex flex-row gap-6 items-center justify-start w-full">
              <Text
                className="flex-1 text-gray-900 text-sm w-auto"
                size="txtDMSansBold14Gray900"
              >
                {props?.taskname1}
              </Text>
              <Img
                className="h-5 w-5"
                src="images/img_user_blue_gray_400_01.svg"
                alt="user_Two"
              />
            </div>
            {!!props?.description ? (
              <Text
                className="text-gray-900 text-sm"
                size="txtDMSansRegular14Gray900"
              >
                {props?.description}
              </Text>
            ) : null}
            {!!props?.deadline ? (
              <Text
                className="text-[10px] text-gray-900"
                size="txtDMSansRegular10"
              >
                {props?.deadline}
              </Text>
            ) : null}
            {!!props?.description1 ? (
              <Text
                className="max-w-[470px] md:max-w-full text-[10px] text-gray-900"
                size="txtDMSansRegular10"
              >
                {props?.description1}
              </Text>
            ) : null}
            <div className="flex flex-col items-center justify-start w-[27%] md:w-full">
              {!!props?.uploadbutton ? (
                <Button
                  className="cursor-pointer font-dmsans min-w-[134px] text-center text-sm"
                  shape="round"
                  color="blue_400"
                  size="sm"
                  variant="fill"
                >
                  {props?.uploadbutton}
                </Button>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row gap-5 items-start justify-start w-full">
                <div className="flex flex-row gap-1 items-center justify-center w-auto">
                  <Text
                    className="text-gray-500_01 text-xs"
                    size="txtDMSansRegular12"
                  >
                    {props?.tasknumber1}
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_message.svg"
                    alt="message_Two"
                  />
                </div>
                <div className="flex flex-row gap-[5px] items-center justify-center w-auto">
                  <Text
                    className="text-gray-500_01 text-xs"
                    size="txtDMSansRegular12"
                  >
                    {props?.locationnumber1}
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_location.svg"
                    alt="location_One"
                  />
                </div>
                <div className="flex flex-row gap-[5px] items-center justify-center w-auto">
                  <Text
                    className="text-gray-500_01 text-xs"
                    size="txtDMSansRegular12"
                  >
                    {props?.checkmarknumber1}
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_checkmark_gray_500_01.svg"
                    alt="checkmark_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TasksDashboardCard.defaultProps = {
  taskname: "Name of the task",
  tasknumber: "07",
  locationnumber: "02",
  checkmarknumber: "1/3",
  taskname1: "Name of the task",
  tasknumber1: "07",
  locationnumber1: "02",
  checkmarknumber1: "1/3",
};

export default TasksDashboardCard;
