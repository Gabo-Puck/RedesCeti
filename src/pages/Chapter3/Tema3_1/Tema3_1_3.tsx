import { Image } from "primereact/image";
import React from "react";

function Tema3_1_3() {
  return (
    <div>
      <p>
        Un cable de fibra óptica consta de tres secciones concéntricas. La más
        interna, el núcleo, consiste en una o más hebras o fibras hechas de
        cristal o plástico. Cada una de ellas lleva un revestimiento de cristal
        o plástico con propiedades ópticas distintas a las del núcleo. La capa
        más exterior, que recubre una o más fibras, debe ser de un material
        opaco y resistente. Un sistema de transmisión por fibra óptica está
        formado por una fuente luminosa muy monocromática (generalmente un
        láser), la fibra encargada de transmitir la señal luminosa y un
        fotodiodo que reconstruye la señal eléctrica.
      </p>
      <Image
        src="https://media.fs.com/images/community/upload/kindEditor/202105/07/estructura-de-cable-fibra-1620380092-AgOajWMRrX.jpg"
        style={{ width: "100%", height: "auto" }}
        preview
      />
    </div>
  );
}

export default Tema3_1_3;
