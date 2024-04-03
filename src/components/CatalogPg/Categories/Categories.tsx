// next line
import Link from "next/link";
// btn components
// components
import ButtonMy from "@/components/Button";
import CategoriesCarousel from "./CategoriesCarousel";
import { ButtonLeft, ButtonRight } from "@/components/RightLeftBtns";
import { useRef } from "react";

const Categories = () => {
  return (
    <div className="mt-[150px]">
      <div className="flex w-[100%] justify-between">
        <div className="w-[30%]">
          <div className="mx-auto mt-[20px] w-[70%]">
            <h1 className="text-[36px] font-[500]">
              Популярные <br /> категории
            </h1>
          </div>
        </div>
        <section className="flex w-[70%] max-w-[70%]">
          <CategoriesCarousel />
        </section>
      </div>
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <div>
          <ButtonLeft />
          <ButtonRight />
        </div>
        <ButtonMy>Все категории</ButtonMy>
      </div>
    </div>
  );
};

export default Categories;
