"use client";
// compoents
import Header from "@/components/header/Header";
import PopularCategories from "@/components/PopularCategories";
import Complex from "@/components/Complex";
import ChooseUs from "@/components/ChooseUs";
import Catalog from "@/components/Catalog/Catalog";
// <<<<<<< HEAD
// =======
import Clients from "@/components/Clients";
// >>>>>>> 14c798d236cb17e6771cfb947f56ee0f08cbb1f7
import Brands from "@/components/Brands/Brands";
import AboutCompany from "@/components/About/AboutCompany";
import News from "@/components/News/News";
import Map from "@/components/Map";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/*  */}
      <div className="bg-[#F8F7F3FF]">
        {/* Header */}
        <header>
          {/* Components Header */}
          <Header />
        </header>
        {/* Main */}
        <main>
          {/* components banner */}

          {/* components Popular categories */}
          <PopularCategories />

          {/* Complex components */}
          <Complex />

          {/* Choose us compoents  */}
          <ChooseUs />

          {/* Catalog components */}
          <Catalog />

          {/* Brads components */}

          <Brands />

          {/* About company componets */}

          <AboutCompany />

          {/* News components */}

          <News />

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

export default Home;
