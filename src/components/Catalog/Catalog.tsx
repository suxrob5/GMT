// next line
import Link from "next/link";
// components
import HorizontalCarousel from "./main";
import { ButtonLeft, ButtonRight } from "../RightLeftBtns";
import ButtonMy from "../Button";
import CatalogHandleFast from "./CatalogFast";

const Catalog = () => {
  return (
    <div className="mt-[100px]">
      <div className="flex w-[100%] justify-between">
        <div className="w-[30%]">
          <div className="mx-auto mt-[20px] w-[70%]">
            <h1 className="text-[36px] font-[500]">Каталог товаров</h1>
            <ul>
              <li className="grid grid-cols-1 font-[600] text-[#8C8B89FF]">
                <Link href="#">Хиты продаж</Link>
                <Link href="#">Новинки</Link>
                <Link href="#">Акции</Link>
              </li>
            </ul>
          </div>
        </div>
        <section className="flex w-[70%] max-w-[70%]">
          <HorizontalCarousel />
        </section>
      </div>
      <div className="relative mt-[50px] flex items-center justify-between">
        <div className="absolute right-0 w-[70%]">
          <div className="flex items-center justify-between">
            <div className="flex">
              <ButtonLeft />
              <ButtonRight />
            </div>
            <div>
              <button className="mx-3 rounded-[25px] border px-6 py-3 text-[#088269]">
                Бесплатная консультация
              </button>
              <ButtonMy>Все товары</ButtonMy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
