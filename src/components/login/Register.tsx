// shadc UI
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image, { StaticImageData } from "next/image";

interface Type {
  handleClik: () => void;
  User: StaticImageData;
  inptVal1: string;
  inptVal2: string;
  handleSave: () => void;
  setinptVal2: (value: string) => void;
  setinptVal1: (value: string) => void;
}

const Register: React.FC<Type> = ({
  handleClik,
  User,
  inptVal1,
  setinptVal1,
  handleSave,
  inptVal2,
  setinptVal2,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={handleClik}
          className="mx-3 w-[45px] border-none bg-[#F8F7F3FF] bg-none hover:bg-[#F8F7F3FF]"
        >
          <span className="mx-3 rounded-md p-2 hover:bg-gray-300 hover:bg-opacity-30">
            <span className="flex items-center justify-center">
              <Image src={User} alt="user icon" />
            </span>
            <p className="text-center">Войти</p>
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Регистрация</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you`re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Ваш email*
            </Label>
            <Input
              id="name"
              type="email"
              className="col-span-3 focus:outline-[#088269FF]"
              value={inptVal1}
              onChange={(e) => setinptVal1(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Пароль*
            </Label>
            <Input
              id="username"
              className="col-span-3 focus:outline-[#088269FF]"
              type="password"
              value={inptVal2}
              onChange={(e) => setinptVal2(e.target.value)}
            />
          </div>
        </div>
        <DialogClose asChild>
          <Button
            type="submit"
            onClick={handleSave}
            className=" rounded-[20px] bg-[#088269FF] hover:bg-[#08826ad2]"
          >
            Регистрация
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
