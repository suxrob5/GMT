import * as React from "react";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
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

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("successfully added to basket", { variant });
  };

  const clik = () => {
    localStorage.setItem(`likeData_${data.id}`, JSON.stringify(data));
  };
  return (
    <React.Fragment>
      <span
        onClick={clik}
        className="mb-5 mt-[30px] rounded-[25px] border border-gray-300 px-6 py-3 text-[14px] text-[#088269FF] hover:border-gray-300"
      >
        <button onClick={handleClickVariant("success")}>
          Добавить в корзину
        </button>
      </span>
    </React.Fragment>
  );
};

const CatalogHandleBusket: React.FC<Types> = ({ data }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp data={data} />
    </SnackbarProvider>
  );
};

export default CatalogHandleBusket;
