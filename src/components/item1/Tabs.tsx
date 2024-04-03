import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsItem1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "90%", margin: "0 auto", marginTop: "50px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Описание оборудования" {...a11yProps(0)} />
          <Tab label="Характеристики и документы" {...a11yProps(1)} />
          <Tab label="Услуги и сервис" {...a11yProps(2)} />
          <Tab label="Оптовым покупателям" {...a11yProps(3)} />
          <Tab label="Отзывы  4" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <span className="text-[18px] font-[500]">Описание оборудования</span>
        <br />
        <span className="text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Mollitia, consequuntur. Beatae sed voluptates quas repellat
          <br /> a qui eveniet sequi, dignissimos quaerat laborum neque, unde
          odio. <br /> Aliquid vero doloribus modi? Porro!
        </span>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <span>Вес оборудования . . . . . . . . . . . 90 кг</span>
        <br />
        <span>
          Детектор . . . . . . . . . . . . . . . . . CsI - на основе аморфного
          кремния
        </span>
        <br />
        <span>Время сканирования . . . . . . . . . PAN стандарт - 12 сек</span>
        <br />
        <span>Размер фокусного пятна . . . . . . 0.6</span>
        <br />
        <span>
          Динамический диапазон . . . . . . 16 бит (65 536 градации серого)
        </span>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <span className="text-[18px] font-[500]">Услуги и сервис</span>
        <br />
        <span className="text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Mollitia, consequuntur. Beatae sed voluptates quas repellat
          <br /> a qui eveniet sequi, dignissimos quaerat laborum neque, unde
          odio. <br /> Aliquid vero doloribus modi? Porro!
        </span>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <span className="text-[18px] font-[500]">Оптовым покупателям</span>
        <br />
        <span className="text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Mollitia, consequuntur. Beatae sed voluptates quas repellat
          <br /> a qui eveniet sequi, dignissimos quaerat laborum neque, unde
          odio. <br /> Aliquid vero doloribus modi? Porro!
        </span>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <span className="text-[18px] font-[500]">Отзывы 4</span>
        <br />
        <span className="text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Mollitia, consequuntur. Beatae sed voluptates quas repellat
          <br /> a qui eveniet sequi, dignissimos quaerat laborum neque, unde
          odio. <br /> Aliquid vero doloribus modi? Porro!
        </span>
      </CustomTabPanel>
    </Box>
  );
}
