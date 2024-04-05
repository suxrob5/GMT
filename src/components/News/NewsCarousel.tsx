import Image from "next/image";
// M UI
import { Card, CardActionArea } from "@mui/material";
// Data
import { newsData } from "@/data/NewsData";

const NewsCarousel = () => {
  return (
    <div className="h-200 bg-ec165e flex w-full items-center justify-center overflow-hidden">
      <div className="scrolling-touch scroll-snap-x-repeat-300 bg-ec165e flex overflow-x-auto scroll-smooth">
        {newsData.map((item) => (
          <Card
            key={item.id}
            className="scroll-snap-start mr-50 rounded-10 m-5 w-[1519] flex-shrink-0 origin-center transform rounded-[10px] bg-[#EFEEEAFF] transition-transform duration-500"
          >
            <CardActionArea>
              <div className="h-[470px] w-[300px] rounded-[10px]">
                <div className="flex h-[300px] w-[300px] items-center justify-center rounded-[10px]">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    className="m-5 rounded-[10px]"
                  />
                </div>
                <p className="m-6 text-[#7A7687]">{item.datas}</p>
                <h1 className="mx-6 -mt-5 text-[18px] font-[600]">
                  {item.name}
                </h1>
                <div className="mx-[20px]">
                  <p className="mb-5 py-5 text-[15px] font-[500] text-[#7A7687]">
                    {item.title}
                  </p>
                </div>
              </div>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default NewsCarousel;
