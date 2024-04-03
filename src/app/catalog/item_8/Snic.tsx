import * as React from "react";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import Images8 from "@/assets/data/cata8.png";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("successfully added to basket", { variant });
  };

  const data = {
    id: 8,
    title: "Оборудование для мониторинга пациента",
    img: Images8,
    alt: "data i7mages 7",
    class: "cata8",
  };
  const clik = () => {
    localStorage.setItem(`likeData_8`, JSON.stringify(data));
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

export default function Snic8() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
