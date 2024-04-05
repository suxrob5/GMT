"use client";
// next
import Image from "next/image";
import Link from "next/link";
// images
import User from "@/assets/icons/user.svg";
import Like from "@/assets/icons/like.svg";
import Compare from "@/assets/icons/compare.svg";
import Basket from "@/assets/icons/basket.svg";

import { useState } from "react";
import Register from "../login/Register";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const HeaderNav = () => {
  const [inptVal1, setinptVal1] = useState("");
  const [inptVal2, setinptVal2] = useState("");

  const handleSave = () => {
    const data = {
      inptVal1: inptVal1,
      inptVal2: inptVal2,
    };

    localStorage.setItem("register", JSON.stringify(data));
    setinptVal1("");
    setinptVal2("");
  };
  return (
    <div className="hidden sm:grid">
      <Dialog>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Регистрация</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you`re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Ваш email*
              </Label>
              <Input
                id="name"
                type="email"
                className="col-span-3 focus:outline-[#088269FF]"
                value={inptVal1}
                onChange={(e) => setinptVal1(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Пароль*
              </Label>
              <Input
                id="username"
                className="col-span-3 focus:outline-[#088269FF]"
                type="password"
                value={inptVal2}
                onChange={(e) => setinptVal2(e.target.value)}
              />
            </div>
          </div>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={handleSave}
              className=" rounded-[20px] bg-[#088269FF] hover:bg-[#08826ad2]"
            >
              Регистрация
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
      {/*  */}
      <nav>
        <ul>
          <li className="hidden items-center justify-between sm:flex">
            <Register
              User={User}
              inptVal1={inptVal1}
              setinptVal1={setinptVal1}
              handleSave={handleSave}
              inptVal2={inptVal2}
              setinptVal2={setinptVal2}
            />
            <Link
              href="#"
              className="mx-3 rounded-md p-2 hover:bg-gray-300 hover:bg-opacity-30"
            >
              <span className="flex items-center justify-center">
                <Image src={Like} alt="like icon" />
              </span>
              <p className="text-center">Избранное</p>
            </Link>
            <Link
              href="#"
              className="mx-3 rounded-md p-2 hover:bg-gray-300 hover:bg-opacity-30"
            >
              <span className="flex items-center justify-center">
                <Image src={Compare} alt="compare icon" />
              </span>
              <p className="text-center">Сравнить</p>
            </Link>
            <Link
              href="/basket"
              className="ml-3 rounded-md p-2 hover:bg-gray-300 hover:bg-opacity-30"
            >
              <span className="flex items-center justify-center">
                <Image src={Basket} alt="basket icon" />
              </span>
              <p className="text-center">Корзина</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;