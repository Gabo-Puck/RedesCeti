import { Fieldset } from "primereact/fieldset";
import { Image } from "primereact/image";
import React from "react";

function Tema3_2_5() {
  return (
    <div>
      <p>
        El uso de la luz infrarroja se puede considerar muy similar a la
        transmisión digital con microondas. El has infrarrojo puede ser
        producido por un láser o un LED. Los dispositivos emisores y receptores
        deben ser ubicados “ala vista” uno del otro. Su velocidad de transmisión
        de hasta 100 Kbps puede ser soportadas a distancias hasta de 16 km.
        Reduciendo la distancia a 1.6 Km. Se puede alcanzar 1.5 Mbps
      </p>
      <p>
        La conexión es de punto a punto (a nivel experimental se practican otras
        posibilidades). El uso de esta técnica tiene ciertas desventajas . El
        haz infrarrojo es afectado por el clima , interferencia atmosférica y
        por obstáculos físicos. Como contrapartida, tiene inmunidad contra el
        ruido magnético o sea la interferencia eléctrica. Existen varias ofertas
        comerciales de esta técnica, su utilización no esta difundida en redes
        locales, tal vez por sus limitaciones en la capacidad de establecer
        ramificaciones en el enlace, entre otras razones.
      </p>
      <Image
        src="https://lozanne.files.wordpress.com/2014/07/topologia-de-red-inalambrica-wi-fi.jpg"
        style={{ width: "100%", height: "auto" }}
        preview
      />
      <div className="card">
        <Fieldset legend="Caracteristicas">
          <p className="m-0">
            <ul
              style={{ listStyle: "initial", marginLeft: "40px" }}
              className="m-0"
            >
              <li>
                Son una forma de radiación electromagnética que está fuera del
                espectro visible (no podemos verla a simple vista).
              </li>
              <li>
                Sus longitudes de onda varían entre los 0,7 y los 1000
                micrómetros y sus valores de frecuencia están comprendidos entre
                los 3 x 1011 y los 3,84 x 1014
              </li>
              <li>
                Es emitida por todos los cuerpos cuya temperatura esté por
                encima del cero absoluto, en particular, por los seres
                vivientes, y es percibida como una forma de calor superficial.
              </li>
            </ul>
          </p>
        </Fieldset>
      </div>
    </div>
  );
}

export default Tema3_2_5;
