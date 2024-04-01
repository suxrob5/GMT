// next
import Link from "next/link";

// new type for props
interface HoverCompanyProps {
  isHoverCompany: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const HoverComapany: React.FC<HoverCompanyProps> = ({
  isHoverCompany,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      className={`${isHoverCompany !== true ? "hidden" : "block"} absolute top-5`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        <li className="rounded-[8px] border-2 bg-white p-3 text-[14px]">
          <Link href="#">Вакансии</Link>
          <br />
          <Link href="#">Отзывы</Link>
          <br />
          <Link href="#">Сертификаты</Link>
          <br />
          <Link href="#">Партнерские программы</Link>
          <br />
          <Link href="#">Оптовые продажи</Link>
          <br />
          <Link href="#">Лизинг</Link>
        </li>
      </ul>
    </div>
  );
};

export default HoverComapany;
