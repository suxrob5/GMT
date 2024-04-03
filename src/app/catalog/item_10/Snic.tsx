import * as React from "react";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import Images10 from "@/assets/data/cata10.png";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("successfully added to basket", { variant });
  };

  const data = {
    id: 10,
    title: "Педиатрическое оборудование",
    img: Images10,
    alt: "data images 7",
    class: "cata10",
  };
  const clik = () => {
    localStorage.setItem(`likeData_10`, JSON.stringify(data));
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

export default function Snic10() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
