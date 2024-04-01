import { popularCatecorys } from "@/data/MiniData";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className="mt-[100px] bg-[#E5E4EDFF]">
      <h1>.</h1>
      <div>
        <div className="mx-auto mt-[60px] flex w-[90%] items-center justify-between">
          <h1 className="text-[36px] font-[500]">Наши клиенты</h1>
          <h1 className="text-[48px] font-[500]">
            БОЛЕЕ <span className="text-[#088269]">5000</span> <br /> УСПЕШНЫХ
            ПРОЕКТОВ
          </h1>
        </div>
        <Marquee>
          {popularCatecorys.map((item) => (
            <div
              key={item.id}
              className="m-5 h-[300px] w-[300px] rounded-[10px] border bg-[#F8F7F3FF]"
            >
              <div className="flex items-center justify-center rounded-[10px] bg-white">
                <Image
                  src={item.img}
                  alt={item.alt}
                  className="m-5 rounded-[10px]"
                />
              </div>
              <p className="py-5 text-center text-[14px]">{item.title}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
