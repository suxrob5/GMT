import { LinkIcon } from "@/assets/images";
import Link from "next/link";

const Contacts = () => {
  return (
    <>
      <ul className="grid grid-cols-1">
        <li>
          <Link href="#" className="font-[600]">
            Адрес:
          </Link>
        </li>
        <li>
          <Link href="#">г. Москва, ул. Московская, д. 35 </Link>
        </li>
        <li>
          <Link href="#" className="mt-5 flex items-center font-[600]">
            Карта проезда <LinkIcon />
          </Link>
        </li>
        <li>
          <Link href="#" className="mt-5">
            График работы: <br /> Пн-Пт с 09:00-19:00, <br />
            Сб-Вс - выходной <br />
          </Link>
        </li>
        <li>
          <Link href="#" className="mt-5">
            +7 000-000-00-00
          </Link>
        </li>
        <li>
          <Link href="#">+7 495-000-00-00</Link>
        </li>
        <li>
          <Link href="#">8 800-000-00-00</Link>
        </li>
        <li>
          <Link href="#">info@mail.ru</Link>
        </li>
      </ul>
    </>
  );
};

export default Contacts;
