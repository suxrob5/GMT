"use client";
// next
import Link from "next/link";
// react hooks
import { useState } from "react";
// components
import HoverComapany from "./HoverComapany";
import HoverBlog from "./HoverBlog";
import Header2 from "./Header2";
import HeaderCatalog from "./HeaderCatalog";

const Header = () => {
  const [isHoverCompany, setisHoverCompany] = useState(false);
  const [isHoverBlog, setisHoverBlog] = useState(false);

  const handleMouseEnter: () => void = () => {
    setisHoverCompany(true);
  };
  const handleMouseLeave: () => void = () => {
    setisHoverCompany(false);
  };

  const handleMouseEnterBlog: () => void = () => {
    setisHoverBlog(true);
  };
  const handleMouseLeaveBlog: () => void = () => {
    setisHoverBlog(false);
  };

  return (
    <header className="mx-auto w-[100%]">
      <div className="mx-auto flex w-[90%] items-center justify-between py-3">
        <nav className="relative">
          {/* components hover liks */}
          <HoverComapany
            isHoverCompany={isHoverCompany}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
          {/*  */}

          <HoverBlog
            isHoverBlog={isHoverBlog}
            handleMouseEnterBlog={handleMouseEnterBlog}
            handleMouseLeaveBlog={handleMouseLeaveBlog}
          />
          <ul>
            <li className="hidden text-[#7A7687FF] sm:flex">
              <Link
                href="#"
                className="mr-3 hover:decoration-slice hover:text-[#07745E] hover:underline"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                О компании
              </Link>

              <Link href="#" className="mx-3">
                Доставка
              </Link>
              <Link href="#" className="mx-3">
                Оплата
              </Link>
              <Link href="#" className="mx-3">
                Гарантии
              </Link>
              <Link
                href="#"
                className="mx-3 hover:decoration-slice hover:text-[#07745E] hover:underline"
                onMouseEnter={handleMouseEnterBlog}
                onMouseLeave={handleMouseLeaveBlog}
              >
                Блог
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden text-[#7A7687FF] sm:flex">
          <p className="mx-3">info@mail.ru</p>
          <p className="mx-3">г. Москва, ул. Московская, д. 35</p>
        </div>
      </div>
      <hr />
      {/*compoents header-2 */}

      <Header2 />

      <hr />

      {/* components Catalogn  */}
      <HeaderCatalog />
    </header>
  );
};

export default Header;
