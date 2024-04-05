import Image from "next/image";
import { Card } from "@mui/material";
import { catalogData } from "@/data/CatalogData";
import CatalogHandleBusket from "./CatalogHandleBusket";
import CatalogHandleFast from "./CatalogFast";

const HorizontalCarousel = () => {
  return (
    <div className="h-200 bg-ec165e flex w-full items-center justify-center overflow-hidden">
      <div className="scrolling-touch scroll-snap-x-repeat-300 bg-ec165e flex overflow-x-auto scroll-smooth">
        {catalogData.map((item) => (
          <Card
            key={item.id}
            className="scroll-snap-start mr-50 rounded-10 m-5 flex-shrink-0 origin-center transform rounded-[10px] bg-[#EFEEEAFF] transition-transform duration-500"
          >
            <button className="absolute left-5 top-5 rounded-[20px] border border-[#088269FF] px-3 py-2 font-[600] text-[#088269FF]">
              Новинка
            </button>
            <div className="w-[300px] rounded-[10px]">
              <div className="flex items-center justify-center rounded-[10px] bg-white">
                <Image
                  src={item.img}
                  alt={item.alt}
                  className="m-5 rounded-[10px]"
                />
              </div>
              <div className="mx-[20px]">
                <p className="py-5 text-[16px] font-[600]">
                  {item.nameE} <br /> {item.nameL}
                </p>
                <p>Артикул: {item.aticul}</p>
                <p>{item.nalich}</p>
                <p className="text-[18px] font-[600]">{item.money}</p>
                <div className="mb-5 mt-5">
                  <CatalogHandleBusket data={item} />
                  <CatalogHandleFast item={item} />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default HorizontalCarousel;
