import React from "react";
import Subtitle from "../../../components/Lesson/Subtitle";
import { Image } from "primereact/image";

function Tema1_3_2() {
  return (
    <div>
      <Subtitle content="¿Que es una red M.A.N?" />
      <p>
        Este termino describe a una red que provee una conectividad digital de
        una área regional a una metropolitana. La MAN realiza el enlace entre
        las LANs Y WANs.
      </p>
      <p>
        Una red de área metropolitana es un sistema de interconexión de equipos
        informáticos distribuidos en una zona que abarca diversos edificios, por
        medios pertenecientes a la misma organización propietaria de los
        equipos.
      </p>
      <p>
        El concepto de red de área metropolitana representa una evolución del
        concepto de red de área local a un ámbito más amplio, cubriendo áreas de
        una cobertura superior que en algunos casos no se limitan a un entorno
        metropolitano sino que pueden llegar a una cobertura regional e incluso
        nacional mediante la interconexión de diferentes redes de área
        metropolitana.
      </p>
      <Image
        src="http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro27/MAN1.jpg"
        style={{ width: "100%", height: "auto" }}
        preview
      />
    </div>
  );
}

export default Tema1_3_2;
