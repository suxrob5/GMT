import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";
import StarItem1 from "../item1/Star";
import { Like, Reyt } from "@/assets/images";
import Link from "next/link";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

interface Types {
  item: {
    id: number;
    title: string;
    alt: string;
    img: StaticImageData;
  };
}

const PopularCategoriesFast: React.FC<Types> = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="mx-5 text-[#088269]">
        Быстырй просмотр
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="mx-auto flex w-[90%] justify-between">
              <div className="relative flex h-[484px] w-[430px] items-center justify-center border">
                <Image
                  src={item.img}
                  alt={item.alt}
                  className="h-[265px] w-[265px]"
                />
                <div className=" absolute right-5 top-5 flex items-center justify-between">
                  <button className="mx-3">
                    <Reyt />
                  </button>
                  <button className="mx-3">
                    <Like />
                  </button>
                </div>
              </div>
              <div className="p-2">
                <h1 className="text-[24px] font-[500]">{item.title}</h1>
                <h1 className="flex items-center">
                  <span className="mx-3">
                    <StarItem1 />
                  </span>
                  4.0
                </h1>
                <p className="mt-5 text-[12px] font-[400] text-[#7A7687]">
                  Категория: Лабораторное оборудование
                </p>
                <p className="text-[12px] font-[400] text-[#7A7687]">
                  Артикул: 213134
                </p>
                <p className="text-[12px] font-[400] text-[#7A7687]">
                  В наличии
                </p>
                <p className="my-5 text-[24.59px] font-[600] text-[#202020]">
                  Цена по запросу
                </p>
                <hr />
                {/*  */}
                <p className="mt-5 text-[12px] text-[#202020]">
                  Но синтетическое тестирование, в своём классическом
                  <br />
                  представлении, допускает внедрение поэтапного и<br />
                  последовательного развития общества.
                  <br />
                </p>
                <nav className="mt-5">
                  <ul>
                    <li className="grid grid-cols-2 text-[14px] text-[#07745E]">
                      <Link href="#" className="hover:underline">
                        Оставить отзыв
                      </Link>
                      <Link href="#" className="hover:underline">
                        Как оформить заказ
                      </Link>
                      <Link href="#" className="hover:underline">
                        Задать вопрос
                      </Link>
                      <Link href="#" className="hover:underline">
                        Запросить КП
                      </Link>
                    </li>
                  </ul>
                </nav>
                <Link href={`/items/${item.id}`}>
                  <button className="mt-[40px] w-[100%] rounded-[30px] border px-5 py-3 text-[#07745E]">
                    Больше информации о товаре
                  </button>
                </Link>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PopularCategoriesFast;
