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
interface ClientsDataType {
  id: number;
  title: string;
  img: StaticImageData; // typ img
  alt: string;
}

// data
export const cientsData: ClientsDataType[] = [
  {
    id: 1,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: Images1,
    alt: "data images",
  },
  {
    id: 2,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: Images2,
    alt: "data images 2",
  },
  {
    id: 3,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: Images3,
    alt: "data images 3",
  },
  {
    id: 4,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: Images4,
    alt: "data images 4",
  },
  {
    id: 5,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: Images5,
    alt: "data images 5",
  },
  {
    id: 6,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: Images6,
    alt: "data image 6",
  },
  {
    id: 7,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: Images7,
    alt: "data images 7",
  },
];
