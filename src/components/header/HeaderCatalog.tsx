// next
import Link from "next/link";
import Image from "next/image";
// images
import Map from "@/assets/icons/map.svg";
import CatalogImg from "@/assets/icons/catalog.svg";

// react-hooks
import { useState } from "react";
// compoents
import CatalogHover from "./CatalogHover";
import HoverManufacturers from "./HoverManufacturers";
import HoverShop from "./HoverShop";

const HeaderCatalog = () => {
  const [isHoverCatalog, setisHoverCatalog] = useState(false);
  const [isHoverManufacturers, setisHoverManufacturers] = useState(false);
  const [isHoverShop, setisHoverShop] = useState(false);

  const handleMouseEnter: () => void = () => {
    setisHoverCatalog(true);
  };
  const handleMouseLeave: () => void = () => {
    setisHoverCatalog(false);
  };

  // Manufacturers
  const handleMouseEnterManufacturers: () => void = () => {
    setisHoverManufacturers(true);
  };
  const handleMouseLeaveManufacturers: () => void = () => {
    setisHoverManufacturers(false);
  };

  // Shop
  const handleMouseEnterShop: () => void = () => {
    setisHoverShop(true);
  };
  const handleMouseLeaveShop: () => void = () => {
    setisHoverShop(false);
  };

  return (
    <div className="w-[100%] border-b-2 py-5 hidden sm:grid">
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <nav>
          <ul className="absolute">
            <CatalogHover
              isHoverCatalog={isHoverCatalog}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
            <HoverManufacturers
              isHoverManufacturers={isHoverManufacturers}
              handleMouseEnterManufacturers={handleMouseEnterManufacturers}
              handleMouseLeaveManufacturers={handleMouseLeaveManufacturers}
            />
            <HoverShop
              isHoverShop={isHoverShop}
              handleMouseEnterShop={handleMouseEnterShop}
              handleMouseLeaveShop={handleMouseLeaveShop}
            />
            <li className="flex items-center justify-between">
              <Link
                // className="mx-3 flex items-center text-[14px] hover:text-[#07745E] "
                className="mx-3 text-[14px] hover:text-[#07745E] flex items-center "
                href="catalog"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span>
                  <Image src={CatalogImg} alt="catalog img" className="" />
                </span>
                Каталог
              </Link>
              <Link
                className="mx-3 text-[14px] hover:text-[#07745E]"
                href="#"
                onMouseEnter={handleMouseEnterManufacturers}
                onMouseLeave={handleMouseLeaveManufacturers}
              >
                Производители
              </Link>
              <Link className="mx-3 text-[14px] hover:text-[#07745E]" href="#">
                Кабинеты под ключ
              </Link>
              <Link className="mx-3 text-[14px] hover:text-[#07745E]" href="#">
                Услуги
              </Link>
              <Link className="mx-3 text-[14px] hover:text-[#07745E]" href="#">
                Акции
              </Link>
              <Link
                className="mx-3 text-[14px] hover:text-[#07745E]"
                href="#"
                onMouseEnter={handleMouseEnterShop}
                onMouseLeave={handleMouseLeaveShop}
              >
                Покупателям
              </Link>
              <Link className="mx-3 text-[14px] hover:text-[#07745E]" href="#">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-between">
          <div className="mx-3 flex">
            <p>Москва</p>
            <Image src={Map} alt="map icon" />
          </div>
          <button className="mx-3 rounded-[20px] border px-5 py-3 text-[14px]">
            +7(495)000-00-00
          </button>
          <button className="mx-3 rounded-[25px] bg-[#088269] px-5 py-3 text-white">
            Заказать звонок
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCatalog;
