import Link from "next/link";

interface CatalogHoverType {
  isHoverCatalog: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}
const CatalogHover: React.FC<CatalogHoverType> = ({
  isHoverCatalog,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      className={`${isHoverCatalog !== true ? "hidden" : "grid"} absolute rounded-xl border bg-white mt-6`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <nav className="p-5">
        <ul>
          <li className="grid grid-cols-1 text-[14px]">
            <Link className="hover:underline hover:decoration-slice" href="#">Реанимация</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Хирургия</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Офтальмология</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Лабораторная диагностика</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Акушерство</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Гинекология</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Гистология</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Косметология</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Оториноларингология</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Рентгенология и томография</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Стерилизация</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Физиотерапия и реабилитация</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Функциональная диагностика</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Эндоскопия</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Новинки</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Распродажи</Link>
            <Link className="hover:underline hover:decoration-slice" href="#">Кабинеты под ключ</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CatalogHover;
