// images
import img1 from "@/assets/data/image1.png";
import img2 from "@/assets/data/image2.png";
import img3 from "@/assets/data/image3.png";
import img4 from "@/assets/data/image1.png";
// for type
import { StaticImageData } from "next/image";

interface BrandsDataType {
  id: number;
  title: string;
  img: StaticImageData; // type img
  alt: string;
}

// data
export const brandsData: BrandsDataType[] = [
  {
    id: 11,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: img1,
    alt: "НМИЦ онкологии им. Н.Н. Блохина",
  },
  {
    id: 12,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: img2,
    alt: "НМИЦ онкологии им. Н.Н. Блохина",
  },
  {
    id: 13,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: img3,
    alt: "НМИЦ онкологии им. Н.Н. Блохина",
  },
  {
    id: 14,
    title: "НМИЦ онкологии им. Н.Н. Блохина",
    img: img4,
    alt: "НМИЦ онкологии им. Н.Н. Блохина",
  },
];
