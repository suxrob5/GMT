import Link from "next/link";
import HorizontalCarousel from "./main";

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
    </div>
  );
};

export default Catalog;
