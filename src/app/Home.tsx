"use client";
// compoents
import Header from "@/components/header/Header";
import BannerHeader from "@/components/BannerHeader";
import PopularCategories from "@/components/PopularCategories";
import Complex from "@/components/Complex";
import ChooseUs from "@/components/ChooseUs";
import Catalog from "@/components/Catalog/Catalog";
import Clients from "@/components/Clients";
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
      <div>
        {/* Header */}
        <header>
          {/* Components Header */}
          <Header />
        </header>
        {/* Main */}
        <main>
          {/* components banner */}
          <BannerHeader />

          {/* components Popular categories */}
          <PopularCategories />

          {/* Complex components */}
          <Complex />

          {/* Choose us compoents  */}
          <ChooseUs />

          {/* Catalog components */}
          <Catalog />

          {/* Client components */}
          <Clients />

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
