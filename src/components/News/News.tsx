// btn components
import { ButtonLeft, ButtonRight } from "../RightLeftBtns";
import ButtonMy from "../Button";
// components
import NewsCarousel from "./NewsCarousel";

const News = () => {
  return (
    <div className="mt-[100px]">
      <div className="flex w-[100%] justify-between">
        <div className="w-[30%]">
          <div className="mx-auto mt-[20px] w-[70%]">
            <h1 className="text-[36px] font-[500]">
              Новости <br /> компании
            </h1>
          </div>
        </div>
        <section className="flex w-[70%] max-w-[70%]">
          <NewsCarousel />
        </section>
      </div>
      <div className="mx-auto mt-5 flex w-[90%] items-center justify-between">
        <div>
          <ButtonLeft />
          <ButtonRight />
        </div>
        <ButtonMy>Все новости</ButtonMy>
      </div>
    </div>
  );
};

export default News;
