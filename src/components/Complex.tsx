// components
import ComplexCarousel from "./ComplexCarousel/ComplexCarousel";

const Complex = () => {
  return (
    <div className="mt-[100px]">
      <div>
        <div className="mx-auto w-[90%]">
          <h1 className="text-[30px] font-[500]">
            Комплексное оснащение кабинетов
          </h1>
        </div>
        <section className="mx-auto mt-[50px] flex w-[90%] items-center justify-between">
          <ComplexCarousel />
        </section>

        <div className="mx-auto mt-[30px] flex w-[90%] items-center justify-between">
          .
          <div>
            <button className=" mx-3 rounded-[30px] border px-6 py-3 text-[14px] font-[500] text-[#088269FF] transition-all active:scale-95">
              Бесплатная консультация
            </button>
            <button className="mx-3 rounded-[30px] bg-[#088269FF] px-6 py-3 text-[14px] text-white transition-all active:scale-95">
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complex;
