"use client";

interface BtnComp {
  children: string;
}
const ButtonMy: React.FC<BtnComp> = ({ children }) => {
  return (
    <button
      className={`rounded-3xl bg-[#088269FF] px-6 py-3 text-white active:scale-95`}
    >
      {children}
    </button>
  );
};

export default ButtonMy;
