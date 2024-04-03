"use client";
// compoents
import Header from "@/components/header/Header";
import Complex from "@/components/Complex";
import Catalog from "@/components/Catalog/Catalog";
import Brands from "@/components/Brands/Brands";
import News from "@/components/News/News";
import Map from "@/components/Map";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer/Footer";
import AboutCompanyCtg from "@/components/CatalogPg/AboutCompanyCtg";
import Categories from "@/components/CatalogPg/Categories/Categories";
import MainItem from "./mainItem";
import BreadcrumbItem1 from "@/components/item1/Breadcrumb";
import InfoItem1 from "@/components/item1/Info";

const ProductPage = () => {
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
        <BreadcrumbItem1 />
        {/* Main */}
        <main>
          {/* item info */}
          <MainItem />
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
