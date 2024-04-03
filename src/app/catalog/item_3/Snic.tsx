import * as React from "react";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import Images1 from "@/assets/data/cata3.png";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("successfully added to basket", { variant });
  };

  const data = {
    id: 3,
    title: "Хирургические инструменты",
    img: Images1,
    alt: "data images 3",
    class: "cata3",
  };
  const clik = () => {
    localStorage.setItem(`likeData_3`, JSON.stringify(data));
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

export default function Snic3() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
