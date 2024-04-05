//import img type
import type { StaticImageData } from "next/image";
// import images
import Images1 from "@/assets/data/client1.png";
import Images2 from "@/assets/data/client2.png";
import Images3 from "@/assets/data/client3.png";
import Images4 from "@/assets/data/client4.png";
import Images5 from "@/assets/data/client5.png";

// new type for data
interface ClientsDataType {
  id: number;
  title: string;
  img: StaticImageData; // typ img
  alt: string;
}

// data
export const clientsData: ClientsDataType[] = [
  {
    id: 29,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: Images1,
    alt: "data images",
  },
  {
    id: 30,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: Images2,
    alt: "data images 2",
  },
  {
    id: 31,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: Images3,
    alt: "data images 3",
  },
  {
    id: 32,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: Images4,
    alt: "data images 4",
  },
  {
    id: 33,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: Images5,
    alt: "data images 5",
  },
];
