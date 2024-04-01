//import img type
import type { StaticImageData } from "next/image";
// import images
import img1 from "@/assets/data/labaratory.png";
import img2 from "@/assets/data/lazer.png";
import img3 from "@/assets/data/operativBlock.png";

// type fot datas
interface ComplexDataType {
  id: number;
  title: string;
  img: StaticImageData;
  alt: string;
}

// data
export const complexData: ComplexDataType[] = [
  {
    id: 1,
    title: "Экспресс лаборатория",
    img: img1,
    alt: "labaratory",
  },
  {
    id: 2,
    title: "Лазерная терапия",
    img: img2,
    alt: "lazer terapy",
  },
  {
    id: 3,
    title: "Операционный блок",
    img: img3,
    alt: "opirativ block",
  },
];
