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
    id: 34,
    title: "Экспресс лаборатория",
    img: img1,
    alt: "labaratory",
  },
  {
    id: 35,
    title: "Лазерная терапия",
    img: img2,
    alt: "lazer terapy",
  },
  {
    id: 36,
    title: "Операционный блок",
    img: img3,
    alt: "opirativ block",
  },
];

interface ComplexDataType2 {
  id: number;
  title: string;
  img: StaticImageData;
  alt: string;
  iki: {
    id: number;
    title: string;
    img: StaticImageData;
    alt: string;
  };
  uch: {
    id: number;
    title: string;
    img: StaticImageData;
    alt: string;
  };
}

export const complexData2: ComplexDataType2[] = [
  {
    id: 1,
    title: "Экспресс лаборатория",
    img: img1,
    alt: "labaratory",
    iki: {
      id: 2,
      title: "Лазерная терапия",
      img: img2,
      alt: "lazer terapy",
    },
    uch: {
      id: 3,
      title: "Операционный блок",
      img: img3,
      alt: "opirativ block",
    },
  },
  {
    id: 2,
    title: "Лазерная терапияv",
    img: img2,
    alt: "labaratory",
    uch: {
      id: 4,
      title: "Экспресс лаборатория",
      img: img1,
      alt: "opirativ block",
    },
    iki: {
      id: 5,
      title: "Операционный блок",
      img: img3,
      alt: "lazer terapy",
    },
  },
  {
    id: 3,
    title: "Экспресс лаборатория",
    img: img1,
    alt: "labaratory",
    uch: {
      id: 4,
      title: "Операционный блок",
      img: img3,
      alt: "opirativ block",
    },
    iki: {
      id: 3,
      title: "Лазерная терапия",
      img: img2,
      alt: "lazer terapy",
    },
  },
];
