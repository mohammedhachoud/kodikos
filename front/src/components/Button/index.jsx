import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[10px]" };
const variants = {
  fill: {
    blue_100: "bg-blue-100 text-blue-400",
    blue_gray_50: "bg-blue_gray-50 text-gray-900",
    red_400: "bg-red-400",
    black_900_4c_01: "bg-black-900_4c_01 text-white-A700",
    indigo_600: "bg-indigo-600",
    blue_gray_400_01: "bg-blue_gray-400_01 text-white-A700",
    blue_A700: "bg-blue-A700",
    blue_400: "bg-blue-400 text-white-A700",
  },
  outline: { blue_400: "border border-blue-400 border-solid" },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-[9px]",
  md: "p-[13px]",
  lg: "p-[19px]",
  xl: "p-[22px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_100",
    "blue_gray_50",
    "red_400",
    "black_900_4c_01",
    "indigo_600",
    "blue_gray_400_01",
    "blue_A700",
    "blue_400",
  ]),
};

export { Button };
