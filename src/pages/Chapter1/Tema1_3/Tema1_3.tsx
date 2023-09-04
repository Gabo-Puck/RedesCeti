import React, { useState } from "react";
import Title from "../../../components/Lesson/Title";
import ReactPlayer from "react-player";
import { TabMenu } from "primereact/tabmenu";
import Tema1_3_1 from "./Tema1_3_1";
import Tema1_3_2 from "./Tema1_3_2";
import Tema1_3_3 from "./Tema1_3_3";

function Tema1_3() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div>
      <Title content="Topología de Redes " />
      <ReactPlayer
        url={"https://www.youtube.com/embed/04jfARpozAc?si=syer1rOMMFnegM-E"}
        width="100%"
        height="80vh"
        loop
        playing={true}
      />
      <TabMenu
        activeIndex={activeIndex}
        model={[{ label: "L.A.N" }, { label: "M.A.N" }, { label: "W.A.N" }]}
        onTabChange={(e) => setActiveIndex(e.index)}
      />

      {activeIndex === 0 && <Tema1_3_1 />}
      {activeIndex === 1 && <Tema1_3_2 />}
      {activeIndex === 2 && <Tema1_3_3 />}
    </div>
  );
}

export default Tema1_3;
