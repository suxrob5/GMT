import React from "react";
import SwipeableTextMobileStepper from "./Carousel";

 const BannerHeader = () => {
  return (
    <div className="mx-auto mt-[50px] w-[90%] rounded-[20px] bg-[#E5E4EDFF]">
      <div className="p-5">
        <SwipeableTextMobileStepper />
      </div>
    </div>
  );
};

export default BannerHeader;
