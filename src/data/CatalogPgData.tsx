//import img type
import type { StaticImageData } from "next/image";
// import images
import Images1 from "@/assets/data/cata1.png";
import Images2 from "@/assets/data/cata2.png";
import Images3 from "@/assets/data/cata3.png";
import Images4 from "@/assets/data/cata4.png";
import Images5 from "@/assets/data/cata5.png";
import Images6 from "@/assets/data/cata6.png";
import Images7 from "@/assets/data/cata7.png";
import Images8 from "@/assets/data/cata8.png";
import Images9 from "@/assets/data/cata9.png";
import Images10 from "@/assets/data/cata10.png";

// new type
interface CatalogDataType {
  id: number;
  title: string;
  img: StaticImageData; // typ img
  alt: string;
  class:string;
}

// data
export const catalogDataPg: CatalogDataType[] = [
  {
    id: 1,
    title: "Ветеринарное оборудование",
    img: Images1,
    alt: "data images",
    class: "cata1",
  },
  {
    id: 2,
    title: "Анестезиология",
    img: Images2,
    alt: "data images 2",
    class: "cata2",
  },
  {
    id: 3,
    title: "Хирургические инструменты",
    img: Images3,
    alt: "data images 3",
    class: "cata3",
  },
  {
    id: 4,
    title: "Физиотерапевтическое оборудование",
    img: Images4,
    alt: "data images 4",
    class: "cata4",
  },
  {
    id: 5,
    title: "Стоматологическое оборудование",
    img: Images5,
    alt: "data images 5",
    class: "cata5",
  },
  {
    id: 6,
    title: "Проктологическое оборудование",
    img: Images6,
    alt: "data image 6",
    class: "cata6",
  },
  {
    id: 7,
    title: "Оборудование для медицинской метрологии",
    img: Images7,
    alt: "data images 7",
    class: "cata7",
  },
  {
    id: 8,
    title: "Оборудование для мониторинга пациента",
    img: Images8,
    alt: "data i7mages 7",
    class: "cata8",
  },
  {
    id: 9,
    title: "Оборудование для радиационной терапии",
    img: Images9,
    alt: "data mages 7",
    class: "cata9",
  },
  {
    id: 10,
    title: "Педиатрическое оборудование",
    img: Images10,
    alt: "data images 7",
    class: "cata10",
  },
];
