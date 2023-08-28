import React, { useState } from "react";
import NavBar from "../../../components/NavBar";
import FooterBar from "../../../components/FooterBar";
import { TabMenu } from "primereact/tabmenu";

function ComponentesRedPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div>
      <NavBar />
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
      {activeIndex === 0}

      <FooterBar />
    </div>
  );
}

export default ComponentesRedPage;
