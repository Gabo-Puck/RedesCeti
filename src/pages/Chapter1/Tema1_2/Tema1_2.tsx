import React, { useState } from "react";

import { TabMenu } from "primereact/tabmenu";
import Tema1_2_1 from "./Tema1_2_1";
import Tema1_2_3 from "./Tema1_2_3";
import Tema1_2_2 from "./Tema1_2_2";
import ReactPlayer from "react-player";
import Title from "../../../components/Lesson/Title";

function ComponentesRedPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div>
      <Title content="1.2 Componentes en la red." />

      <ReactPlayer
        url={"https://www.youtube.com/embed/gK9t3btbnyA?si=Ine97zEdBHxxdSsN"}
        width="100%"
        height="80vh"
        loop
        playing={true}
      />
      <TabMenu
        activeIndex={activeIndex}
        model={[
          { label: "Dispositivos" },
          { label: "Medios" },
          { label: "Servicios" },
        ]}
        onTabChange={(e) => setActiveIndex(e.index)}
      />
      {activeIndex === 0 && <Tema1_2_1 />}
      {activeIndex === 1 && <Tema1_2_2 />}
      {activeIndex === 2 && <Tema1_2_3 />}
    </div>
  );
}

export default ComponentesRedPage;
