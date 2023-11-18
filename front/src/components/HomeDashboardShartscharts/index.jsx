import React from "react";

import { Img, Text } from "components";

const HomeDashboardShartscharts = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[194px] m-auto w-[194px]"
          src="images/img_fill1.svg"
          alt="fillOne"
        />
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[54px] md:px-10 sm:px-5 w-[194px]"
          style={{ backgroundImage: "url('images/img_group53.svg')" }}
        >
          <Text
            className="bg-blue-400 flex h-[86px] items-center justify-center sm:px-5 rounded-[50%] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-[86px]"
            size="txtDMSansMedium22"
          >
            {props?.groupfiftytwo}
          </Text>
        </div>
      </div>
    </>
  );
};

HomeDashboardShartscharts.defaultProps = { groupfiftytwo: "0%" };

export default HomeDashboardShartscharts;
