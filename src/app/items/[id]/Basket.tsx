import * as React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import Images1 from "@/assets/data/cata1.png";
import { StaticImageData } from "next/image";

interface Types {
  data: {
    id: number;
    title: string;
    img: StaticImageData;
  };
}

const MyApp: React.FC<Types> = ({ data }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("successfully added to basket", { variant });
  };

  const clik = () => {
    localStorage.setItem(`likeData_1`, JSON.stringify(data));
  };
  return (
    <React.Fragment>
      <span
        onClick={clik}
        className="cursor-pointer rounded-3xl bg-[#088269FF] px-6 py-3 text-white active:scale-95"
      >
        <button onClick={handleClickVariant("success")}>
          Добавить в корзину
        </button>
      </span>
    </React.Fragment>
  );
};

const IntegrationNotistack: React.FC<Types> = ({ data }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp data={data} />
    </SnackbarProvider>
  );
};

export default IntegrationNotistack;
