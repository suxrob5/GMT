"use client";
// compoents
import Header from "@/components/header/Header";
import Complex from "@/components/Complex";
import Catalog from "@/components/Catalog/Catalog";
import Brands from "@/components/Brands/Brands";
import Map from "@/components/Map";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer/Footer";
import AboutCompanyCtg from "@/components/CatalogPg/AboutCompanyCtg";
import Categories from "@/components/CatalogPg/Categories/Categories";
import InfoItem1 from "@/components/item1/Info";
import { popularCatecorys } from "@/data/MiniData";
import { useEffect, useState } from "react";
import MainItem from "./main";
import { StaticImageData } from "next/image";
import BreadcrumbItem1 from "./Bredcumb";

interface Types {
  params: {
    id: number;
  };
}

interface Type {
  id: number;
  title: string;
  img: StaticImageData;
}

const ProductPage: React.FC<Types> = ({ params: { id } }) => {
  const [data, setdata] = useState<Type>([]);
  console.log(data);

  useEffect(() => {
    popularCatecorys.filter((item) => (item.id == id ? setdata(item) : ""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/*  */}
      <div className="bg-[#F8F7F3FF]">
        {/* Header */}
        <header>
          {/* Components Header */}
          <Header />
        </header>
        {/* breadcrumb */}
        <BreadcrumbItem1 title={data.title} />
        {/* Main */}
        <main>
          {/* item info */}
          <MainItem data={data} />
          
          <InfoItem1 />

          {/* Catalog components */}

          <Catalog />

          {/* Complex components */}
          <Complex />

          {/*components Categories  */}
          <Categories />

          {/* Brads components */}

          <Brands />

          {/* About company componets */}

          <AboutCompanyCtg />

          {/* Map and questions */}

          <Map />

          {/* SunScribe componets */}

          <Subscribe />
        </main>
        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default ProductPage;
