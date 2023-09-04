import React from "react";
import Subtitle from "../../../components/Lesson/Subtitle";
import { Image } from "primereact/image";

function Tema1_3_1() {
  return (
    <div>
      <Subtitle content="¿Que es una red L.A.N?" />
      <div>
        <p>
          Una red de área local (LAN) es un grupo de computadoras y dispositivos
          periféricos que comparten una línea de comunicaciones común o un
          enlace inalámbrico a un servidor dentro de un área geográfica
          específica. Una red de área local puede servir a tan solo dos o tres
          usuarios en una oficina en casa o miles de usuarios en la oficina
          central de una corporación. Los propietarios de viviendas y los
          administradores de tecnología de la información (TI) configuran una
          LAN para que los nodos de la red puedan comunicarse y compartir
          recursos como impresoras o almacenamiento en red.
        </p>
        <Image
          src="https://www.networkacademy.io/sites/default/files/inline-images/Broadcast%20Domain.gif"
          style={{ width: "100%", height: "auto" }}
          preview
        />
        <p>
          Una red individual generalmente cubre una única área geográfica y
          proporciona servicios y aplicaciones a personas dentro de una
          estructura organizacional común, como una empresa, un campus o una
          región. Este tipo de red se denomina Red de área local (LAN). Una LAN
          por lo general está administrada por una organización única. El
          control administrativo que rige las políticas de seguridad y control
          de acceso está implementado en el nivel de red.
        </p>
      </div>
    </div>
  );
}

export default Tema1_3_1;
