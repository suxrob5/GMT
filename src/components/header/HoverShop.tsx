// next
import Link from "next/link";

// new type
interface HoverShopType {
  isHoverShop: boolean;
  handleMouseLeaveShop: () => void;
  handleMouseEnterShop: () => void;
}

const HoverShop:React.FC<HoverShopType> = ({
  isHoverShop,
  handleMouseEnterShop,
  handleMouseLeaveShop,
}) => {
  return (
    <div
      className={`${isHoverShop !== true ? "hidden" : "grid"} absolute right-[30px] z-10 mt-[20px] rounded-[12px] border bg-white`}
      onMouseEnter={handleMouseEnterShop}
      onMouseLeave={handleMouseLeaveShop}
    >
      <nav className="p-3">
        <ul>
          <li className="grid grid-cols-1">
            <Link href="#">Как сделать заказ</Link>
            <Link href="#">Возврат</Link>
            <Link href="#">Прайс-лист (скачать)</Link>
            <Link href="#">Каталоги оборудования PDF</Link>
            <Link href="#">Оформить претензию</Link>
            <Link href="#">FAQ</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HoverShop;
