import Link from "next/link";

const Catalog = () => {
  return (
    <>
      <ul>
        <li className="grid grid-cols-1">
          <Link href="#">Реанимация</Link>
          <Link href="#">Хирургия</Link>
          <Link href="#">Офтальмология</Link>
          <Link href="#">Лабораторная диагностика</Link>
          <Link href="#">Акушерство и Гинекология</Link>
          <Link href="#">Гистология</Link>
          <Link href="#">Косметология</Link>
        </li>
      </ul>
      <ul>
        <li className="grid grid-cols-1">
          <Link href="#">Орториноларингология</Link>
          <Link href="#">Рентгенология и томография</Link>
          <Link href="#">Стрерилизация</Link>
          <Link href="#">Физиотерапия и реабилитация</Link>
          <Link href="#">Функциональная диагностика</Link>
          <Link href="#">Эндоскопия</Link>
        </li>
      </ul>
      <ul>
        <li className="grid grid-cols-1">
          <Link href="#">Новинки</Link>
          <Link href="#">Распродажи</Link>
          <Link href="#">Кабинеты под ключ</Link>
          <Link href="#">Скачать каталог</Link>
        </li>
      </ul>
    </>
  );
}

export default Catalog