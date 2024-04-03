"use client"
import Image from "next/image";
import { FormEvent } from "react";
import Pochta from "@/assets/icons/pochta.svg";
import ButtonMy from "./Button";

const Subscribe = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    input.value = "";
  };
  return (
    <div className="mt-[200px] bg-[#E5E4EDFF]">
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <div>
          <Image src={Pochta} alt="pocha" />
        </div>
        <div>
          <h1 className="text-[30px] font-[500]">
            Подпишитесь и будьте в курсе!
          </h1>
          <p className="text-[16px] font-[500] text-[#7A7687]">
            Акции, скидки, распродажи ждут!
          </p>
          <form
            onSubmit={handleSubmit}
            className="m-5 mt-[30px] flex items-center justify-between rounded-[24px] bg-white"
          >
            <input
              type="email"
              placeholder="Введите email"
              className="w-[80%] rounded-3xl px-5 py-3 text-[14px] focus:outline-none"
            />
            <ButtonMy>Подписаться</ButtonMy>
          </form>
          <div className="mt-5 flex items-center justify-center">
            <input type="checkbox" className="mx-3" id="cheks" />
            <label htmlFor="cheks">
              Я даю согласие на обработку своих персональных данных.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
