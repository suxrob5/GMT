// type for img
import type { StaticImageData } from "next/image";
// images
import img1 from "@/assets/icons/img1.svg";
import img2 from "@/assets/icons/img2.svg";
import img3 from "@/assets/icons/img3.svg";
import img4 from "@/assets/icons/img4.svg";

// type for data
interface DataType {
  id: number;
  title: string;
  img: StaticImageData;
  alt: string;
}

export const ChooseUsData: DataType[] = [
  {
    id: 25,
    title: "Быстрая доставка",
    img: img1,
    alt: "Быстрая доставка",
  },
  {
    id: 26,
    title: "Весь товар сертифицирован",
    img: img2,
    alt: "Весь товар сертифицирован",
  },
  {
    id: 27,
    title: "Гибкая система скидок",
    img: img3,
    alt: "Гибкая система скидок",
  },
  {
    id: 28,
    title: "Лет на рынке",
    img: img4,
    alt: "Лет на рынке",
  },
];
