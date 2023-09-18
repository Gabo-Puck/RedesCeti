import React, { useState } from "react";
import Title from "../../../components/Lesson/Title";
import { Card } from "primereact/card";
import Subtitle from "../../../components/Lesson/Subtitle";
import { TabMenu } from "primereact/tabmenu";
import Tema3_2_5 from "./Tema3_2_5";
import Tema3_2_4 from "./Tema3_2_4";
import Tema3_2_3 from "./Tema3_2_3";
import Tema3_2_2 from "./Tema3_2_2";
import Tema3_2_1 from "./Tema3_2_1";

function Tema3_2() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div>
      <Title content="3.2 Medios de transmisión aéreos o no guiados" />
      <div className="card">
        <Card title="Medios de Transmisión no guiados">
          <p className="m-0">
            Los medios de transmisión no guiados son los que no confinan las
            señales mediante ningún tipo de cable, sino que las señales se
            propagan libremente a través del medio. Entre los medios más
            importantes se encuentran el aire y el vacío. Tanto la transmisión
            como la recepción de información se lleva a cabo mediante antenas. A
            la hora de transmitir, la antena irradia energía electromagnética en
            el medio. Por el contrario en la recepción la antena capta las ondas
            electromagnéticas del medio que la rodea. La configuración para las
            transmisiones no guiadas puede ser direccional y omnidireccional. En
            la direccional, la antena transmisora emite la energía
            electromagnética concentrándola en un haz, por lo que las antenas
            emisora y receptora deben estar alineadas.
          </p>
        </Card>
      </div>

      <TabMenu
        activeIndex={activeIndex}
        model={[
          { label: "Redes inalámbricas" },
          { label: "Microondas" },
          { label: "Enlaces satelitales" },
          { label: "Rayo láser" },
          { label: "Infrarrojo" },
        ]}
        onTabChange={(e) => setActiveIndex(e.index)}
      />

      {activeIndex === 0 && <Tema3_2_1 />}
      {activeIndex === 1 && <Tema3_2_2 />}
      {activeIndex === 2 && <Tema3_2_3 />}
      {activeIndex === 3 && <Tema3_2_4 />}
      {activeIndex === 4 && <Tema3_2_5 />}
    </div>
  );
}

export default Tema3_2;
