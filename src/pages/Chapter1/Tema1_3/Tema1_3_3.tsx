import React from "react";
import Subtitle from "../../../components/Lesson/Subtitle";
import { Image } from "primereact/image";

function Tema1_3_3() {
  return (
    <div>
      <Subtitle content="¿Que es una red W.A.N?" />
      <p>
        Por lo general, las organizaciones individuales alquilan las conexiones
        a través de una red de proveedores de servicios de telecomunicaciones.
        Estas redes que conectan las LAN en ubicaciones separadas
        geográficamente se conocen como Redes de área amplia (WAN). Aunque la
        organización mantiene todas las políticas y la administración de las LAN
        en ambos extremos de la conexión, las políticas dentro de la red del
        proveedor del servicio de comunicaciones las controlada el TSP.
      </p>
      <p>
        Las WAN utilizan dispositivos de red diseñados específicamente para
        realizar las interconexiones entre las LAN. Dada la importancia de estos
        dispositivos para la red, la configuración, la instalación y el
        mantenimiento de los mismos son aptitudes complementarias de la función
        de la red de una organización.
      </p>
      <p>
        Las LAN y las WAN son muy útiles para las organizaciones individuales.
        Conectan a los usuarios dentro de la organización. Permiten gran
        cantidad de formas de comunicación que incluyen intercambio de correos
        electrónicos, capacitación corporativa y acceso a recursos.
      </p>
      <Image
        src="http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro27/man.jpg"
        style={{ width: "100%", height: "auto" }}
        preview
      />
    </div>
  );
}

export default Tema1_3_3;
