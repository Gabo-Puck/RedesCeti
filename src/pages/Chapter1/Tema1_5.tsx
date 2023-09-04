import React from "react";
import Title from "../../components/Lesson/Title";
import { Panel } from "primereact/panel";
import ReactPlayer from "react-player";

function Tema1_5() {
  return (
    <div>
      <Title content="1.5 Direccionamiento de Redes" />
      <Panel header="¿Que es el direccionamiento IP?" toggleable>
        <p>
          Los equipos y redes que funcionan mediante el protocolo TCP/IP
          (Protocolo de Control de Transmisión / Protocolo de Internet). Este
          protocolo necesita para su funcionamiento que los equipos que
          funcionan con él tengan dos parámetros configurados en su interfaz de
          red, estos son la dirección IP y la máscara de subred.
        </p>
      </Panel>
      <Panel header="Direccion IP" toggleable>
        <p>
          En primer lugar, tenemos la dirección IP, que prácticamente todos
          conoceremos. Es una dirección lógica de 4 bytes o 32 bits cada uno de
          ellos separados por un punto, con la que se identifica unívocamente a
          un equipo o host en una red.
        </p>
        <p>
          En la actualidad los equipos cuentan con dos tipos de direcciones IP,
          en primer lugar, está la dirección IPv4 que efectivamente tiene una
          longitud de 4 bytes (0 - 255)
        </p>
        <p>
          Y la dirección IPv6, que está diseñada para el caso en que el
          direccionamiento IP tradicional se quede corto. En este caso tendremos
          una dirección lógica de 128 bits, por lo que abarca un rango mucho más
          amplio que la dirección IPv6. Esta la veremos escrita casi siempre en
          formato hexadecima
        </p>
      </Panel>
      <ReactPlayer
        url={"https://www.youtube.com/embed/EdY-vYip1Tw?si=yWshdA0sokb0aBiZ"}
        width="100%"
        height="80vh"
        loop
        playing={true}
      />
      <Panel header="Máscara de Subred" toggleable>
        <p>
          Para cada clase de IP se puede contar con un número de subredes
          determinado. Una subred es una red física independiente que comparte
          la misma dirección IP con otras redes físicas, es decir, ahora estamos
          identificando a la red principal en donde se conectan los hosts.
        </p>
        <p>
          Precisamente la función de la máscara de subred es lograr que equipos
          que comparten el mismo identificar de red y que están situados en
          redes físicas distintas se puedan comunicar. Será nuestro router o
          servidor el que haga la correspondencia entre la información de la
          máscara de subred y la dirección IP de los hosts.
        </p>
      </Panel>
    </div>
  );
}

export default Tema1_5;
