// next img
import Image from "next/image";
// next
import Link from "next/link";
// components
import Company from "./Company";
import Catalog from "./Catalog";
import Contacts from "./Contacts";
// img
import { MasterCard, Mip, Tg, Vik, Visa, WhatSub } from "@/assets/images";
// images
import FooterCoreImg from "@/assets/icons/footerCoreImg.svg";
const Footer = () => {
  return (
    <div className="bg-[#088169FF] text-[#F8F7F3]">
      <div className="mx-auto flex w-[90%] p-10 text-[14px]">
        <div>
          <Link href="#" className="text-[18px] font-[600]">
            Покупателям
          </Link>
          <div className="mt-5 h-[2px] w-[250px] bg-white"></div>
          <div className="mt-5 flex w-[210px] justify-between">
            <Company />
          </div>
        </div>

        {/* catalog */}

        <div className="ml-[50px]">
          <Link href="#" className="text-[18px] font-[600]">
            Каталог
          </Link>
          <div className="mt-5 h-[2px] w-[650px] bg-white"></div>
          <div className="mt-5 flex w-[650px] justify-between">
            <Catalog />
          </div>
        </div>

        {/* contact */}

        <div className="ml-[50px]">
          <Link href="#" className="text-[18px] font-[600]">
            Контакты
          </Link>
          <div className="mt-5 h-[2px] w-[200px] bg-white"></div>
          <div className="mt-5 flex w-[210px] justify-between">
            <Contacts />
          </div>
        </div>
      </div>

      {/* next-footer */}
      <div className="mx-auto w-[90%] text-[#F8F7F3]">
        <div className="h-[2px] w-[100%] bg-white"></div>
        <div className="mt-[30px] flex justify-between">
          <Image src={FooterCoreImg} alt="slam" />
          <div>
            <p>Мы в соцсетях</p>
            <div className="mt-5 flex items-center justify-between">
              <Vik />
              <Tg />
              <WhatSub />
            </div>
          </div>
          {/*  */}
          <ul className="grid grid-cols-1">
            <li>
              <Link href="#">Партнерская программа</Link>
            </li>
            <li>
              <Link href="#">Оптовые продажи</Link>
            </li>
            <li>
              <Link href="#">Реквизиты</Link>
            </li>
          </ul>
          {/*  */}
          <ul className="grid grid-cols-1">
            <li>
              <Link href="#">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link href="#">Условия соглашения</Link>
            </li>
            <li>
              <Link href="#">Карта сайта</Link>
            </li>
          </ul>
          <div>
            <Link href="#">Способы оплаты</Link>
            <div className="mt-5 flex items-center justify-between">
              <div className="mx-3">
                <MasterCard />
              </div>
              <div className="mx-3">
                <Visa />
              </div>
              <div className="mx-3">
                <Mip />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end footer */}

      <div className="mx-auto mt-[30px] flex w-[90%] items-center justify-between">
        <h1>
          © 2022 Медоборудование <br /> Все права защищены
        </h1>
        <h1 className="text-[12px] text-[#83ACA1FF]">
          Информация на данном сайте носит справочный характер и не является
          публичной офертой, определяемой положениями Статьи 437 Гражданского
          кодекса Российской Федерации
        </h1>
      </div>
    </div>
  );
};

export default Footer;
