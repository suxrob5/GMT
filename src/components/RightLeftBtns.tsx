export const ButtonRight = () => {
  const btn1 = "->";
  return (
    <button className="m-3 rounded-[50%] border px-5 py-2 text-[30px] hover:bg-gray-100 active:scale-95">
      {btn1}
    </button>
  );
};

export const ButtonLeft = () => {
  const btn2 = "<-";

  return (
    <button className="m-3 rounded-[50%] border px-5 py-2 text-[30px] hover:bg-gray-100 active:scale-95">
      {btn2}
    </button>
  );
};
