import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const LoginPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-start justify-between md:pr-10 sm:pr-5 pr-[120px] w-full">
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[1024px] items-center justify-center p-[62px] md:px-5 w-[55%] md:w-full"
            style={{ backgroundImage: "url('images/img_frame1.png')" }}
          >
            <Img
              className="h-[726px] md:h-auto my-[87px] object-cover w-[96%]"
              src="images/img_pngtreefingerprint.png"
              alt="pngtreefingerpr"
            />
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[261px] w-[33%] md:w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtInterBold30"
            >
              Account Login
            </Text>
            <Text
              className="leading-[28.00px] mt-1.5 text-blue_gray-400 text-lg w-[97%] sm:w-full"
              size="txtInterRegular18"
            >
              If you are already a member you can login with your email address
              and password.
            </Text>
            <Line className="bg-gray-100_01 h-px mt-4 w-full" />
            <Text
              className="mt-[22px] text-base text-gray-600_01"
              size="txtInterMedium16"
            >
              Email address
            </Text>
            <Input
              name="rectangleTwentyEight"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="flex h-16 mt-[13px] rounded-md w-full"
              color="blue_gray_400"
              variant="outline"
            ></Input>
            <Text
              className="mt-[23px] text-base text-gray-600_01"
              size="txtInterMedium16"
            >
              Password
            </Text>
            <Input
              name="rectangleTwentyFive"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="flex h-16 mt-[13px] rounded-md w-full"
              color="blue_gray_400"
              variant="outline"
            ></Input>
            <Img
              className="h-5 mt-[23px] w-5"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[426px] sm:min-w-full mt-2.5 rounded-md text-base text-center"
              color="blue_400"
              size="xl"
              variant="fill"
            >
              Register Account
            </Button>
            <Text
              className="md:ml-[0] ml-[69px] mt-[61px] text-base text-gray-600_01"
              size="txtInterMedium16"
            >
              <span className="text-gray-600_01 font-inter text-left font-medium">
                Dont have an account ?{" "}
              </span>
              <span className="text-blue-400 font-inter text-left font-medium">
                Sign up here{" "}
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPagePage;
