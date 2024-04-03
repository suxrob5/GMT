"use client";
// my data
import { catalogDataPg } from "@/data/CatalogPgData";
// next images
import Image from "next/image";
// components
import Link from "next/link";
import BreadcrumbP from "../Breadcrumb";
import { Card, CardActionArea } from "@mui/material";

const Main = () => {
  const left = ">";
  return (
    <div className="mt-[30px]">
      <div className="mx-auto w-[90%]">
        <BreadcrumbP />
      </div>
      <div>
        <div className="mx-auto mt-10 flex w-[90%] justify-between">
          <div className="mt-5 h-[500px] rounded-[20px]  border">
            <div className="p-5">
              <h1 className="mx-1 pb-3 text-[16px] font-[500]">Направления</h1>
              <hr />
              <nav className="mt-5">
                <ul className="text-[14px]">
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Реанимация</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Хирургия</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Офтальмология</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Лабораторная диагностика</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Акушерство и Гинекология</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Гистология</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Косметология</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Оториноларингология</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Рентгенология и томография</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Стерилизация</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Физиотерапия и реабилитация</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Функциональная диагностика</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Эндоскопия</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Новинки</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Распродажи</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                  <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                    <Link href="#"> Кабинеты под ключ</Link>
                    <span className="mx-2">{left}</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <section className="calogPg w-[70%]">
            {catalogDataPg.map((item) => (
              <Link
                href={`/catalog/item_${item.id}`}
                key={item.id}
                className={item.class}
              >
                <div
                  className={`w-[300px] rounded-[10px] border ${item.class} mt-5`}
                >
                  <Card>
                    <CardActionArea>
                      <div className="flex items-center justify-center rounded-[10px] bg-white">
                        <Image
                          src={item.img}
                          alt={item.alt}
                          className="m-5 rounded-[10px]"
                        />
                      </div>
                      <p className="mx-5 py-5 text-[15px]">{item.title}</p>
                    </CardActionArea>
                  </Card>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Main;
