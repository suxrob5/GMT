"use client";
// img
import { Like, Reyt } from "@/assets/images";
// components
import IntegrationNotistack from "./Basket";
import StarItem1 from "@/components/item1/Star";
// next
import Image, { StaticImageData } from "next/image";
// react
import React, { useState } from "react";

interface Types {
  data: {
    id: number;
    title: string;
    img: StaticImageData;
  };
}

const MainItem: React.FC<Types> = ({ data }) => {
  const [count, setCount] = useState(1);
  return (
    <div className="mt-10">
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <div className="relative">
          <Image
            src={data.img}
            alt="wif"
            width={560}
            height={309}
            className="rounded-[10px] border"
          />
          <button className="absolute left-5 top-5 rounded-3xl border border-[#088269] bg-[#E1EFE6] px-5 py-2 text-[14px] font-[600] text-[#088269]">
            Новинка
          </button>
          <div className="absolute right-5 top-5 flex">
            <button className="mx-1">
              <Reyt />
            </button>
            <button className="mx-1 active:border active:bg-gray-100">
              <Like />
            </button>
          </div>
        </div>
        <div className="p-2">
          <h1 className="text-[36px] font-[500]">{data.title}</h1>
          <h1 className="flex items-center">
            <span className="mx-3">
              <StarItem1 />
            </span>
            4.0
          </h1>
          <p className="mt-5 text-[12px] font-[400] text-[#7A7687]">
            Категория: Лабораторное оборудование
          </p>
          <p className="text-[12px] font-[400] text-[#7A7687]">
            Артикул: 213134
          </p>
          <p className="text-[12px] font-[400] text-[#7A7687]">В наличии</p>
          <p className="my-5 text-[24.59px] font-[600] text-[#202020]">
            300 000 руб.
          </p>
          {/* btns */}
          <div className="flex items-center">
            <div className="flex items-center justify-between rounded-[30px] border px-3">
              <button
                onClick={() => setCount(count - 1)}
                className="p-3 text-[#07745E]"
              >
                -
              </button>
              <h1>{count}</h1>
              <button
                onClick={() => setCount(count + 1)}
                className="p-3 text-[#07745E]"
              >
                +
              </button>
            </div>
            <button className="mx-5 rounded-[30px] border px-6 py-3">
              Задать вопрос
            </button>

            <IntegrationNotistack data={data} />
          </div>
          <h1 className="mt-5 text-[16px] font-[500]">О товаре</h1>
          <p className="text-[12px] text-[#202020]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Dolores, recusandae aliquid voluptates vel neque repellat enim!
            <br />
            Error, illo rerum vel eligendi nostrum dignissimos dolorum
            <br />
            praesentium odio? Quas magnam quia eaque. <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainItem;
