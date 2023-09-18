import { Image } from "primereact/image";
import React from "react";

function Tema3_1_2() {
  return (
    <div>
      <p>
        Este consiste en dos alambres de cobre aislados, en general de 1mm de
        espesor. Los alambres se entrelazan en forma helicoidal, como en una
        molécula de DNA. La forma trenzada del cable se utiliza para reducir la
        interferencia eléctrica con respecto a los pares cercanos que se
        encuentran a su alrededor. Los pares trenzados se pueden utilizar tanto
        para transmisión analógica como digital, y su ancho de banda depende del
        calibre del alambre y de la distancia que recorre; en muchos casos
        pueden obtenerse transmisiones de varios megabits, en distancias de
        pocos kilómetros. Debido a su adecuado comportamiento y bajo costo, los
        pares trenzados se utilizan ampliamente y es probable que se presencia
        permanezca por muchos años.
      </p>
      <Image
        src="https://media.fs.com/images/community/upload/kindEditor/202105/07/estructura-decable-par-trenzado-1620380163-xtfwJPJ85e.jpg"
        style={{ width: "100%", height: "auto" }}
        preview
      />
    </div>
  );
}

export default Tema3_1_2;
