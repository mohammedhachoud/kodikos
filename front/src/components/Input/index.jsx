import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    blue_100: "bg-blue-100",
    blue_gray_400_01: "bg-blue_gray-400_01 text-white-A700",
    blue_gray_50: "bg-blue_gray-50 text-gray-600_02",
  },
  outline: { blue_gray_400: "border border-blue_gray-400 border-solid" },
};
const shapes = { round: "rounded-[15px]" };
const sizes = {
  xs: "pb-3.5 pt-3 px-3",
  sm: "pb-[9px] pt-[13px] px-[9px]",
  md: "pb-[21px] pt-[19px] px-[19px]",
  lg: "pb-[18px] pt-[22px] px-[18px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "fill",
      color = "blue_gray_50",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_100",
    "blue_gray_400_01",
    "blue_gray_50",
    "blue_gray_400",
  ]),
};

export { Input };
