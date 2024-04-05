"use client";
import * as React from "react";
// MUI
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
// next images
import Image from "next/image";
// data
import { complexData, complexData2 } from "@/data/ComplexData";
//icon images
import { Left, Right } from "@/assets/images";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ComplexCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = complexData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const btn2 = "<-";

  return (
    <Box sx={{ maxWidth: "100%", margin: "0 auto", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {complexData2.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className="rounded-[10px] border">
                <div className="flex items-center justify-between">
                  <Image
                    src={step.img}
                    className="rounded-[10px]"
                    alt={step.alt}
                  />
                  <Image
                    src={step.iki.img}
                    className="rounded-[10px]"
                    alt={step.alt}
                  />
                  <Image
                    src={step.uch.img}
                    className="rounded-[10px]"
                    alt={step.alt}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="mx-5 p-5 text-[16px] font-[500]">
                    {step.title}
                  </p>
                  <p className="mx-5 p-5 text-[16px] font-[500]">
                    {step.iki.title}
                  </p>
                  <p className="mx-5 p-5 text-[16px] font-[500]">
                    {step.uch.title}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className="absolute mt-[30px] w-[30px] bg-[#F8F7F3FF]"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <Right />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <Left />
          </Button>
        }
      />
    </Box>
  );
}

export default ComplexCarousel;
