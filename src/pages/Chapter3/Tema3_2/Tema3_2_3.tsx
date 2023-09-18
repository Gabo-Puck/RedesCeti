import { Fieldset } from "primereact/fieldset";
import { Image } from "primereact/image";
import React from "react";

function Tema3_2_3() {
  return (
    <div>
      <p>
        Es un dispositivo que actúa como “reflector” de las emisiones terrenas.
        Es decir que es la extensión al espacio del concepto de “torre de
        microondas”. Los satélites “reflejan” un haz de microondas que
        transportan información codificada. La función de “reflexión” se compone
        de un receptor y un emisor que operan a diferentes frecuencias a 6 Ghz.
        Y envía (refleja) a 4 Ghz. Por ejemplo. Los satélites giran alrededor de
        la tierra en forma sincronizada con esta a una altura de 35,680 km. En
        un arco directamente ubicado sobre el ecuador. Esta es la distancia
        requerida para que el satélite gire alrededor de la tierra en 24 horas.
        , Coincidiendo que da la vuelta completa de un punto en el Ecuador.
      </p>
      <p>
        El espaciamiento o separación entre dos satélites de comunicaciones es
        de 2,880kms. Equivalente a un ángulo de 4° , visto desde la tierra . La
        consecuencia inmediata es de que el numero de satélites posibles a
        conectar de esta forma es infinito (y bastante reducido si se saben
        aprovechar).
      </p>
      <Image
        src="https://i.blogs.es/7b5747/int-sat/1366_521.jpg"
        style={{ width: "100%", height: "auto" }}
        preview
      />
    </div>
  );
}

export default Tema3_2_3;
