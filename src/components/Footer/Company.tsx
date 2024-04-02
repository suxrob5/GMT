import Link from "next/link";

const Company = () => {
  return (
    <>
      <ul className="grid grid-cols-1">
        <li>
          <Link href="#">О компании</Link>
        </li>
        <li>
          <Link href="#">Сертификаты</Link>
        </li>
        <li>
          <Link href="#">Вакансии</Link>
        </li>
        <li>
          <Link href="#">Гарантии</Link>
        </li>
        <li>
          <Link href="#">Услуги</Link>
        </li>
        <li>
          <Link href="#">Акции</Link>
        </li>
        <li>
          <Link href="#">Доставка</Link>
        </li>
      </ul>
      <ul className="grid grid-cols-1">
          <li>
            <Link href="#">Оплата</Link>
          </li>
          <li>
            <Link href="#">Возврат</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
          <li>
            <Link href="#">Лизинг</Link>
          </li>
          <li>
            <Link href="#">Отзывы</Link>
          </li>
          <li>
            <Link href="#">Блог</Link>
          </li>
      </ul>
    </>
  );
};

export default Company;
