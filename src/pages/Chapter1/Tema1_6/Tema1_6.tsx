import React from "react";
import Title from "../../../components/Lesson/Title";
import { Panel } from "primereact/panel";
import Subtitle from "../../../components/Lesson/Subtitle";
import { Divider } from "primereact/divider";
import { Image } from "primereact/image";

function Tema1_6() {
  return (
    <div>
      <Title content="1.6 Modelos de Referencia" />
      <Panel header="Modelo TCP/IP" toggleable>
        <p>
          El protocolo de Internet (IP) es el sistema de direcciones de Internet
          y tiene la función principal de entregar paquetes de información desde
          un dispositivo de origen a un dispositivo de destino. Es la forma
          principal en la que se realizan las conexiones de red y establece la
          base de Internet, pero no gestiona el orden de los paquetes ni la
          verificación de errores. Esta funcionalidad requiere otro protocolo,
          normalmente TCP.
        </p>
        <p>
          La relación entre los protocolos TCP e IP es similar a enviar a
          alguien un mensaje escrito en un rompecabezas por correo postal. Se
          escribe el mensaje y se desmontan las piezas del rompecabezas. Luego,
          cada pieza puede viajar a través de una ruta postal diferente, algunas
          de las cuales requieren más tiempo que otras. Cuando las piezas del
          rompecabezas llegan después de recorrer diferentes rutas, es posible
          que estén desordenadas. El protocolo de Internet garantiza que las
          piezas lleguen a su dirección de destino. Por su parte, el protocolo
          TCP sería como la persona que ordena las piezas del rompecabezas en el
          otro lado. Reúne las piezas en el orden correcto, solicita el reenvío
          de las piezas que faltan e informa al remitente de que se ha recibido
          el rompecabezas. Además, mantiene la conexión con el remitente antes
          del envío de la primera pieza del rompecabezas hasta después del envío
          de la última pieza.
        </p>
        <Image
          src="https://www.cloudflare.com/img/learning/cdn/tls-ssl/tcp-handshake-diagram.png"
          style={{ width: "100%", height: "auto" }}
          preview
        />
        <p>
          La versión principal de IP que se utiliza en Internet hoy en día es la
          versión 4 (IPv4). Las limitaciones de tamaño en el número total de
          direcciones posibles en IPv4 propiciaron el desarrollo de un protocolo
          más nuevo, que se llama IPv6 y permite que haya muchas más direcciones
          disponibles. Su adopción es cada vez más frecuente.
        </p>
      </Panel>
      <Panel header="Modelo OSI" toggleable>
        <p>
          El modelo Open Systems Interconnection (OSI) es un modelo conceptual
          creado por la Organización Internacional para la Estandarización, el
          cual permite que diversos sistemas de comunicación se conecten usando
          protocolos estándar. En otras palabras, el OSI proporciona un estándar
          para que distintos sistemas de equipos puedan comunicarse entre sí.
        </p>
        <p>
          El modelo OSI se puede ver como un lenguaje universal para la conexión
          de las redes de equipos. Se basa en el concepto de dividir un sistema
          de comunicación en siete capas abstractas, cada una apilada sobre la
          anterior.
        </p>
        <Image
          src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/6ZH2Etm3LlFHTgmkjLmkxp/59ff240fb3ebdc7794ffaa6e1d69b7c2/osi_model_7_layers.png"
          style={{ width: "100%", height: "auto" }}
          preview
        />
      </Panel>
      <Panel header="Comparacion de Modelos de referencia:" toggleable>
        <div className="card flex justify-content-center">
          <div>
            <Subtitle content="Modelo TCP/IP" />
            <ul
              style={{ listStyle: "initial", marginLeft: "20px" }}
              className="m-0"
            >
              <li>
                TCP/IP: Protocolo de control de transmisión / Protocolo de
                Internet
              </li>
              <li>
                Es un Modelo de Servidor de cliente utilizado para la
                transmisión de datos a través de Internet
              </li>
              <li>4 Capas</li>
              <li>Desarrollado por: Departamento de Defensa(DoD)</li>
              <li>Tangible</li>
              <li>Uso Frecuente</li>
            </ul>
          </div>
          <Divider layout="vertical" />
          <div>
            <Subtitle content="Modelo OSI" />
            <ul
              style={{ listStyle: "initial", marginLeft: "20px" }}
              className="m-0"
            >
              <li>OSI- Intercionexión de sistema abierto</li>
              <li>
                Es un modelo teórico que se utiliza para el sistema informático
              </li>
              <li>7 Capas</li>
              <li>
                Desarrollado por: ISO(Organizacion de Normas Internacionales)
              </li>
              <li>Intangible</li>
              <li>Frecuencia de Uso Baja</li>
            </ul>
          </div>
        </div>
      </Panel>
    </div>
  );
}

export default Tema1_6;
