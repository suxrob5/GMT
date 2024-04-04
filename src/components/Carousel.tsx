"use client";

import * as React from "react";
// MUI
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
// images
import img1 from "@/assets/images/Banner.png";
import Image from "next/image";
import Link from "next/link";
//

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    h1: "Заголовок баннера в пару строк",
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: img1,
  },
  {
    h1: "Заголовок баннера в пару строк",
    label: "Bird",
    imgPath: img1,
  },
  {
    h1: "Заголовок баннера в пару строк",
    label: "Bali, Indonesia",
    imgPath: img1,
  },
  {
    h1: "Заголовок баннера в пару строк",
    label: "Goč, Serbia",
    imgPath: img1,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", margin: "0 auto", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} className="">
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <div className="flex items-center justify-between rounded-[8px]">
                  <div>
                    <h1 className="text-[48px] font-[500]">
                      Заголовок баннера <br /> в пару строк
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                      elit, sed do eiusmod tempor
                    </p>
                    <div className="mt-5">
                      <button className="rounded-[30px] bg-[#088269FF] px-5 py-3 text-[14px] text-white">
                        Запросить цену
                      </button>
                      <Link href="/catalog">
                        <button className="mx-5 rounded-[30px] border border-gray-500 px-5 py-3 text-[14px]">
                          В каталог
                        </button>
                      </Link>
                    </div>
                  </div>
                  <Image src={step.imgPath} alt={step.label} />
                </div>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className="bg-[#E5E4EDFF]"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
