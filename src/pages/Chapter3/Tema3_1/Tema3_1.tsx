import React, { useState } from "react";
import Title from "../../../components/Lesson/Title";
import { Card } from "primereact/card";
import { TabMenu } from "primereact/tabmenu";
import Tema3_1_1 from "./Tema3_1_1";
import Tema3_1_2 from "./Tema3_1_2";
import Tema3_1_3 from "./Tema3_1_3";
import Subtitle from "../../../components/Lesson/Subtitle";
import { Image } from "primereact/image";

function Tema3_1() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div>
      <Title content="3.1 Medios de transmisión terrestres o guiados" />
      <div className="card">
        <Card title="Medios de Transmisión">
          <p className="m-0">
            El medio de transmisión constituye el soporte físico a través del
            cual emisor y receptor pueden comunicarse en un sistema de
            transmisión de datos. Distinguimos dos tipos de medios: guiados y no
            guiados. En ambos casos la transmisión se realiza por medio de ondas
            electromagnéticas. Los medios guiados conducen (guían) las ondas a
            través de un camino físico, ejemplos de estos medios son el cable
            coaxial, la fibra óptica y el par trenzado. Los medios no guiados
            proporcionan un soporte para que las ondas se transmitan, pero no
            las dirigen; como ejemplo de ellos tenemos el aire y el vacío.
          </p>
        </Card>
      </div>

      <Subtitle content=" Espectro de Frecuencias" />
      <Image
        src="https://neo.lcc.uma.es/evirtual/cdd/graficos/espectro.gif"
        style={{ width: "100%", height: "auto" }}
        preview
      />

      <TabMenu
        activeIndex={activeIndex}
        model={[
          { label: "Cable coaxial" },
          { label: "Par trenzado" },
          { label: "Fibra óptica" },
        ]}
        onTabChange={(e) => setActiveIndex(e.index)}
      />

      {activeIndex === 0 && <Tema3_1_1 />}
      {activeIndex === 1 && <Tema3_1_2 />}
      {activeIndex === 2 && <Tema3_1_3 />}
    </div>
  );
}

export default Tema3_1;
