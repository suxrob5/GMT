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
interface PopularCatecorysType {
  id: number;
  title: string;
  aticul: number;
  money: string;
  nalich: string;
  nameL: string;
  nameE: string;
  img: StaticImageData; // typ img
  alt: string;
  div: string;
}

// data
export const popularCatecorys: PopularCatecorysType[] = [
  {
    id: 37,
    title: "Дерматологическое оборудование",
    nameE: "Анализатор мочи",
    nameL: "MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images1,
    alt: "data images",
    div: "div1",
  },
  {
    id: 38,
    title: "Дерматологическое оборудование",
    nameE: "Анализатор мочи",
    nameL: "MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images2,
    alt: "data images 2",
    div: "div2",
  },
  {
    id: 39,
    title: "Оборудование для анастезиологии",
    nameE: "Анализатор мочи",
    nameL: "MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images3,
    alt: "data images 3",
    div: "div3",
  },
  {
    id: 40,
    title: "Мебель для медецинских целей",
    nameE: "Анализатор мочи",
    nameL: "MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images4,
    alt: "data images 4",
    div: "div4",
  },
  {
    id: 41,
    title: "Ветеринарное оборудование",
    nameE: "Анализатор мочи",
    nameL: "MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images5,
    alt: "data images 5",
    div: "div5",
  },
  {
    id: 42,
    title: "Оборудование для анастезиологии",
    nameE: "Анализатор мочи",
    nameL: "MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images6,
    alt: "data image 6",
    div: "div6",
  },
  {
    id: 43,
    title: "Дерматологическое оборудование",
    nameE: "Анализатор мочи",
    nameL: "MIND UA-66",
    aticul: 213134,
    money: "300 000 руб",
    nalich: "В наличии",
    img: Images7,
    alt: "data images 7",
    div: "div7",
  },
];
