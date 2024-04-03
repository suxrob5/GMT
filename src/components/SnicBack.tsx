import * as React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import Images1 from "@/assets/data/cata1.png";
import ButtonMy from "./Button";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("successfully added to basket", { variant });
  };

  const data = {
    id: 1,
    title: "Ветеринарное оборудование",
    img: Images1,
    alt: "data images",
    class: "cata1",
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
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
