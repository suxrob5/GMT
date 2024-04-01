// compoents
"use client";
import Header from "@/components/header/Header";
import BannerHeader from "@/components/BannerHeader";
import PopularCategories from "@/components/PopularCategories";
import Complex from "@/components/Complex";
import ChooseUs from "@/components/ChooseUs";
import Catalog from "@/components/Catalog/Catalog";
import Clients from "@/components/Clients";
import Brands from "@/components/Brands/Brands";

const Home = () => {
  const url =
    "https://myhealthbox.p.rapidapi.com/search/updatedDocuments?sd=2020-06-01&c=us&l=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5e472508d3msh4376f0158a735e4p1be904jsnc3bd651bcfd2",
      "X-RapidAPI-Host": "myhealthbox.p.rapidapi.com",
    },
  };

  async function main() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  main();

  return (
    <>
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
        </main>
        {/* Footer */}
        <footer></footer>
      </div>
    </>
  );
};

export default Home;
