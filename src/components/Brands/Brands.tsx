// next line
import Link from "next/link";
// btn components
import { ButtonLeft, ButtonRight } from "../RightLeftBtns";
import ButtonMy from "../Button";
// components
import BrandsCarousel from "./BrandsCarousel";

const Brands = () => {
  return (
    <div className="mt-[150px]">
      <div className="flex w-[100%] justify-between">
        <div className="w-[30%]">
          <div className="mx-auto mt-[20px] w-[70%]">
            <h1 className="text-[36px] font-[500]">Бренды</h1>
            <ul>
              <li className="grid grid-cols-1 font-[600] text-[#8C8B89FF]">
                <Link href="#">Эксклюзивные поставщики</Link>
              </li>
            </ul>
          </div>
        </div>
        <section className="flex w-[70%] max-w-[70%]">
          <BrandsCarousel />
        </section>
      </div>
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <div>
          <ButtonLeft />
          <ButtonRight />
        </div>
        <ButtonMy>Сертификаты</ButtonMy>
      </div>
    </div>
  );
};

export default Brands;
