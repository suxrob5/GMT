"use client";
// my data
import { popularCatecorys } from "@/data/MiniData";
// next images
import Image from "next/image";

const PopularCategories = () => {
  return (
    <div className="mt-[100px]">
      <div>
        <div className="mx-auto flex w-[90%] items-center justify-between">
          <h1 className="text-[36px] font-[500]">Популярные категории</h1>
          <button className="rounded-[20px] bg-[#088269FF] px-5 py-3 text-white">
            Все категории
          </button>
        </div>
        <section className="parent mx-auto mt-[50px] grid w-[90%] grid-cols-4">
          {popularCatecorys.map((item) => (
            <div
              key={item.id}
              className={`w-[300px] rounded-[10px] border ${item.div} mt-5`}
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
