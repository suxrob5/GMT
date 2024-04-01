// next
import Image from "next/image";
import Link from "next/link";
// images
import User from "@/assets/icons/user.svg";
import Like from "@/assets/icons/like.svg";
import Compare from "@/assets/icons/compare.svg";
import Basket from "@/assets/icons/basket.svg";
// shadc UI
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HeaderNav = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Регистрация</Button>
        </DialogTrigger>
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
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Пароль*
              </Label>
              <Input id="username" className="col-span-3" type="password" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <nav>
        <ul>
          <li className="flex items-center justify-between">
            <Link
              href="#"
              className="mx-3 rounded-md p-2 hover:bg-gray-300 hover:bg-opacity-30"
            >
              <span className="flex items-center justify-center">
                <Image src={User} alt="user icon" />
              </span>
              <p className="text-center">Войти</p>
            </Link>
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
              href="#"
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
    </>
  );
};

export default HeaderNav;
