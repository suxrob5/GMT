import Image from "next/image";
import { Card, CardActionArea } from "@mui/material";
import { brandsData } from "@/data/BrandsData";
import { popularCatecorys } from "@/data/MiniData";
import { catalogData } from "@/data/CatalogData";

const CategoriesCarousel = () => {
  return (
    <div className="h-200 bg-ec165e flex w-full items-center justify-center overflow-hidden">
      <div className="scrolling-touch scroll-snap-x-repeat-300 bg-ec165e flex overflow-x-auto scroll-smooth">
        {catalogData.map((item) => (
          <Card
            key={item.id}
            className="scroll-snap-start mr-50 rounded-10 m-5 w-[1519] flex-shrink-0 origin-center transform rounded-[10px] bg-[#EFEEEAFF] transition-transform duration-500"
          >
            <CardActionArea>
              <div className="w-[300px] rounded-[10px]">
                <div className="flex h-[200px] w-[300px] items-center justify-center rounded-[10px] bg-white">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    className="m-5 rounded-[10px]"
                  />
                </div>

                <div className="mx-[20px]">
                  <p className="py-5 text-[16px] font-[600]">{item.title}</p>
                </div>
              </div>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default CategoriesCarousel;
