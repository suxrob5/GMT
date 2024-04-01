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
  const handleSubmit: (e:FormEvent) => void = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto flex w-[90%] items-center justify-between py-5">
      <Link href="/">
        <Image src={mainImg} alt="main img" />
      </Link>
      <div className="flex items-center rounded-[20px] border-2 border-[#D5D1E1FF] bg-[#D5D1E1FF]">
        {/* compoents Select */}
        <HeaderSelect />
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Поиск"
            className="rounded-r-[20px] px-5 py-3 text-[14px] focus:outline-none"
          />
          <button className="rounded-full px-4 py-2">
            <Image src={Search} alt="Search icon" width={15} />
          </button>
        </form>
      </div>
      <p>
        Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
      </p>
      {/* under the header  components Links user,like,Compare,Basket */}
      <HeaderNav />
    
    </div>
  );
};

export default Header2;
