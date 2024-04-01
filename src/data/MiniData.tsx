//import img type
import type { StaticImageData } from "next/image";
// import images
import Images1 from "@/assets/data/img1.png";
import Images2 from "@/assets/data/img2.png";
import Images3 from "@/assets/data/img3.png";
import Images4 from "@/assets/data/img4.png";
import Images5 from "@/assets/data/img5.png";
import Images6 from "@/assets/data/img6.png";
import Images7 from "@/assets/data/img7.png";

// new type
interface popularCatecorysType {
  id: number;
  title: string;
  aticul: number;
  money: string;
  nalich: string;
  nameL: string;
  nameE: string;
  img: StaticImageData; // typ img
  alt: string;
}

// data
export const popularCatecorys: popularCatecorysType[] = [
  {
    id: 1,
    title: "Дерматологическое оборудование",
    nameE: "Анализатор мочи",
    nameL:"MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images1,
    alt: "data images",
  },
  {
    id: 2,
    title: "Дерматологическое оборудование",
    nameE: "Анализатор мочи",
    nameL:"MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images2,
    alt: "data images 2",
  },
  {
    id: 3,
    title: "Оборудование для анастезиологии",
    nameE: "Анализатор мочи",
    nameL:"MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images3,
    alt: "data images 3",
  },
  {
    id: 4,
    title: "Мебель для медецинских целей",
    nameE: "Анализатор мочи",
    nameL:"MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images4,
    alt: "data images 4",
  },
  {
    id: 5,
    title: "Ветеринарное оборудование",
    nameE: "Анализатор мочи",
    nameL:"MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images5,
    alt: "data images 5",
  },
  {
    id: 6,
    title: "Оборудование для анастезиологии",
    nameE: "Анализатор мочи",
    nameL:"MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images6,
    alt: "data image 6",
  },
  {
    id: 7,
    title: "Дерматологическое оборудование",
    nameE: "Анализатор мочи",
    nameL:"MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images7,
    alt: "data images 7",
  },
];
