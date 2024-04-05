// breadcrumb
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// next link
import Link from "next/link";

type MainType = any;

const BreadcrumbItem1: React.FC<MainType> = ({ title }) => {
  return (
    <div className="mx-auto mt-8 w-[90%]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Главная</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbItem1;
