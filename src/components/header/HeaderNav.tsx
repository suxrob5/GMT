// next 
import Image from 'next/image';
import Link from 'next/link';
// images
import User from "@/assets/icons/user.svg";
import Like from "@/assets/icons/like.svg";
import Compare from "@/assets/icons/compare.svg";
import Basket from "@/assets/icons/basket.svg";

const HeaderNav = () => {
  return (
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
  );
}

export default HeaderNav