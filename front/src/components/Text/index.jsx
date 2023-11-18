import React from "react";

const sizeClasses = {
  txtManropeMedium14Blue400: "font-manrope font-medium",
  txtDMSansRegular20: "font-dmsans font-normal",
  txtDMSansMedium30: "font-dmsans font-medium",
  txtManropeBold40: "font-bold font-manrope",
  txtDMSansMedium16Blue400: "font-dmsans font-medium",
  txtDMSansMedium26: "font-dmsans font-medium",
  txtDMSansRegular14Green600: "font-dmsans font-normal",
  txtDMSansRegular14Amber600: "font-dmsans font-normal",
  txtDMSansMedium22: "font-dmsans font-medium",
  txtRobotoMedium22: "font-medium font-roboto",
  txtManropeSemiBold14Gray600: "font-manrope font-semibold",
  txtDMSansBold14: "font-bold font-dmsans",
  txtDMSansBold16: "font-bold font-dmsans",
  txtDMSansBold14Gray900: "font-bold font-dmsans",
  txtDMSansBold13: "font-bold font-dmsans",
  txtDMSansRegular20Black900: "font-dmsans font-normal",
  txtDMSansRegular14Lightblue500: "font-dmsans font-normal",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium20: "font-inter font-medium",
  txtRobotoMedium13: "font-medium font-roboto",
  txtInterRegular18: "font-inter font-normal",
  txtManropeSemiBold14Bluegray90001: "font-manrope font-semibold",
  txtDMSansMedium14WhiteA700: "font-dmsans font-medium",
  txtDMSansRegular14IndigoA700: "font-dmsans font-normal",
  txtDMSansRegular14Black9007e: "font-dmsans font-normal",
  txtDMSansMedium14Bluegray30001: "font-dmsans font-medium",
  txtDMSansRegular14Blue400: "font-dmsans font-normal",
  txtManropeBold14: "font-bold font-manrope",
  txtManropeBold30Gray900: "font-bold font-manrope",
  txtManropeSemiBold14: "font-manrope font-semibold",
  txtDMSansRegular14Green500: "font-dmsans font-normal",
  txtDMSansRegular14Gray900: "font-dmsans font-normal",
  txtDMSansRegular10: "font-dmsans font-normal",
  txtDMSansRegular14Bluegray40001: "font-dmsans font-normal",
  txtDMSansMedium13Bluegray500: "font-dmsans font-medium",
  txtDMSansMedium20: "font-dmsans font-medium",
  txtManropeBold30: "font-bold font-manrope",
  txtDMSansMedium16: "font-dmsans font-medium",
  txtInterBold30: "font-bold font-inter",
  txtRobotoRegular14: "font-normal font-roboto",
  txtManropeMedium12: "font-manrope font-medium",
  txtDMSansMedium14: "font-dmsans font-medium",
  txtManropeBold24: "font-bold font-manrope",
  txtDMSansMedium13: "font-dmsans font-medium",
  txtManropeMedium14: "font-manrope font-medium",
  txtDMSansRegular12: "font-dmsans font-normal",
  txtManropeMedium18: "font-manrope font-medium",
  txtDMSansRegular14: "font-dmsans font-normal",
  txtRobotoRegular14Gray600: "font-normal font-roboto",
  txtDMSansRegular13: "font-dmsans font-normal",
  txtDMSansMedium18: "font-dmsans font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
