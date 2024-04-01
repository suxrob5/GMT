import Link from "next/link";

const Company = () => {
  return (
    <>
      <ul>
        <li className="grid grid-cols-1">
          <Link href="#">О компании</Link>
          <Link href="#">Сертификаты</Link>
          <Link href="#">Вакансии</Link>
          <Link href="#">Гарантии</Link>
          <Link href="#">Услуги</Link>
          <Link href="#">Акции</Link>
          <Link href="#">Доставка</Link>
        </li>
      </ul>
      <ul>
        <li className="grid grid-cols-1">
          <Link href="#">Оплата</Link>
          <Link href="#">Возврат</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Лизинг</Link>
          <Link href="#">Отзывы</Link>
          <Link href="#">Блог</Link>
        </li>
      </ul>
    </>
  );
}

export default Company