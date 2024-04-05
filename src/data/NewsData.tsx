// images
import img1 from "@/assets/data/news1.png";
import img2 from "@/assets/data/news2.png";
import img3 from "@/assets/data/news3.png";
import { StaticImageData } from "next/image";

// next images for custom type
interface NewsDataType {
  id: number;
  title: string;
  name: string;
  datas: string;
  img: StaticImageData;
  alt: string;
}

export const newsData: NewsDataType[] = [
  {
    id: 44,
    title: "Допускает внедрение поэтапного и развития общества.",
    name: "Название новости",
    img: img1,
    datas: "07.11.2022",
    alt: "Допускает внедрение поэтапного и развития общества",
  },
  {
    id: 45,
    title: "Допускает внедрение поэтапного и развития общества.",
    name: "Название новости",
    img: img2,
    datas: "07.11.2022",
    alt: "Допускает внедрение поэтапного и развития общества",
  },
  {
    id: 46,
    title: "Допускает внедрение поэтапного и развития общества.",
    name: "Название новости",
    img: img3,
    datas: "07.11.2022",
    alt: "Допускает внедрение поэтапного и развития общества",
  },
  {
    id: 47,
    title: "Допускает внедрение поэтапного и развития общества.",
    name: "Название новости",
    img: img1,
    datas: "07.11.2022",
    alt: "Допускает внедрение поэтапного и развития общества",
  },
];
