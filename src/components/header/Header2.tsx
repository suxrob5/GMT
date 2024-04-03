"use client";
// next
import Image from "next/image";
import Link from "next/link";
// form event for fuction form submit
import { FormEvent } from "react";
// compoents
import HeaderSelect from "./HeaderSelect";
import HeaderNav from "./HeaderNav";
// images
import mainImg from "@/assets/icons/main.svg";
import Search from "@/assets/icons/search.svg";

const Header2 = () => {
  const handleSubmit: (e: FormEvent) => void = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto flex w-[90%] items-center justify-between py-5">
      <Link href="/">
        <Image src={mainImg} alt="main img" />
      </Link>
      <div className="flex h-[50px] w-[530px] items-center justify-between rounded-[25px] bg-[#D5D1E1FF]">
        {/* compoents Select */}
        <HeaderSelect />
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="search"
            placeholder="Поиск"
            className="h-[46px] rounded-r-[20px] px-5 text-[14px] focus:outline-none"
          />
          <button className="ml-[2px] rounded-[50%] p-3 hover:bg-white">
            <Image src={Search} alt="Search icon" width={15} />
          </button>
        </form>
      </div>
      <p className="hidden sm:flex">
        Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
      </p>
      {/* under the header  components Links user,like,Compare,Basket */}
      <HeaderNav />
    </div>
  );
};

export default Header2;
