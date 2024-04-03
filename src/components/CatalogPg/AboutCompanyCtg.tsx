// components
import AccordionUsage from "../About/Accordion";

const AboutCompanyCtg = () => {
  return (
    <div className="mt-[100px] bg-[#088269FF]">
      <div className="flex justify-between p-10">
        <div>
          <h1 className="m-[50px] text-[30px] font-[500] text-white">
            Часто задоваемые вопросы
          </h1>
        </div>
        <div className="w-[50%]">
          <AccordionUsage />
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyCtg;
