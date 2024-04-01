"use client";
// my data
import { popularCatecorys } from "@/data/MiniData";
// next images
import Image from "next/image";

const PopularCategories = () => {

  return (
    <div className="mt-[100px]">
      <div>
        <div className="flex items-center justify-between mx-auto w-[90%]">
          <h1 className="text-[36px] font-[500]">Популярные категории</h1>
          <button className="rounded-[20px] bg-[#088269FF] px-5 py-3 text-white">
            Все категории
          </button>
        </div>
        <section className="mx-auto grid w-[90%] grid-cols-4 gap-4 mt-[50px]">
          {popularCatecorys.map((item) => (
            <div
              key={item.id}
              className="h-[300px] w-[300px] rounded-[10px] border"
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
        </section>
      </div>
    </div>
  );
};

export default PopularCategories;
