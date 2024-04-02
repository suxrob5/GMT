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
      className={`${isHoverCatalog !== true ? "hidden" : "grid"} absolute z-10 mt-6 rounded-xl border bg-white`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <nav className="p-5">
        <ul>
          <li className="grid grid-cols-1 text-[14px]">
            <Link className="hover:decoration-slice hover:underline" href="#">
              Реанимация
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Хирургия
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Офтальмология
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Лабораторная диагностика
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Акушерство
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Гинекология
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Гистология
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Косметология
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Оториноларингология
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Рентгенология и томография
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Стерилизация
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Физиотерапия и реабилитация
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Функциональная диагностика
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Эндоскопия
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Новинки
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Распродажи
            </Link>
            <Link className="hover:decoration-slice hover:underline" href="#">
              Кабинеты под ключ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CatalogHover;
