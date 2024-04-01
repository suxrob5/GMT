import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#088169FF] text-[#F8F7F3]">
      <div className="p-10">
        <ul>
          <li>
            <Link href="#">Покупателям</Link>
            <Link href="#">О компании</Link>
            <Link href="#">Сертификаты</Link>
            <Link href="#">Вакансии</Link>
            <Link href="#">Гарантии</Link>
            <Link href="#">Услуги</Link>
            <Link href="#">Акции</Link>
            <Link href="#">Доставка</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
