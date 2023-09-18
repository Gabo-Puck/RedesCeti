import { Image } from "primereact/image";
import React from "react";

function Tema3_1_1() {
  return (
    <div>
      <p>
        El cable coaxial consta de un alambre de cobre duro en su parte central,
        es decir, que constituye el núcleo, el cual se encuentra rodeado por un
        material aislante. Este material aislante está rodeado por un conductor
        cilíndrico que frecuentemente se presenta como una malla de tejido
        trenzado. El conductor externo está cubierto por una capa de plástico
        protector. La construcción del cable coaxial produce una buena
        combinación y un gran ancho de banda y una excelente inmunidad al ruido.
        El ancho de banda que se puede obtener depende de la longitud del cable;
        para cables de 1km, por ejemplo, es factible obtener velocidades de
        datos de hasta 10Mbps, y en cables de longitudes menores, es posible
        obtener velocidades superiores. Se pueden utilizar cables con mayor
        longitud, pero se obtienen velocidades muy bajas. Los cables coaxiales
        se emplean ampliamente en redes de área local y para transmisiones de
        largas distancia del sistema telefónico.
      </p>
      <Image
        src="https://neo.lcc.uma.es/evirtual/cdd/graficos/coaxial.gif"
        style={{ width: "100%", height: "auto" }}
        preview
      />
    </div>
  );
}

export default Tema3_1_1;
