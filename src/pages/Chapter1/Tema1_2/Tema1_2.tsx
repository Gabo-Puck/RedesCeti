import React, { useState } from "react";

import { TabMenu } from "primereact/tabmenu";
import Tema1_2_1 from "./Tema1_2_1";
import Tema1_2_3 from "./Tema1_2_3";
import Tema1_2_2 from "./Tema1_2_2";

function ComponentesRedPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div>
      <h1 style={{ fontWeight: "bold", textAlign: "center", fontSize: "20px" }}>
        Componentes en la red.
      </h1>
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
