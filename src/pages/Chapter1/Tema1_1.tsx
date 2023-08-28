import React from "react";
import NavBar from "../../components/NavBar";
import FooterBar from "../../components/FooterBar";
import { Image } from "primereact/image";
import { Panel } from "primereact/panel";

import ComunicacionComputadoraImg from "../../assets/images/DiagramaComunicacionComputadora.png";
import ComunicacionHumanaImg from "../../assets/images/DiagramaComunicacionHumana.png";
import ProtocolosComunicacionImg from "../../assets/images/ProtocolosComunicacion.png";
import CodificacionMensajeImg from "../../assets/images/CodificacionMensaje.png";
import EncapsulamientoMensaheImg from "../../assets/images/EncapsulamientoMensaje.png";
import OpcionesMensaje1 from "../../assets/images/OpcionesMensaje1.png";
import OpcionesMensaje2 from "../../assets/images/OpcionesMensaje2.png";
import OpcionesMensaje3 from "../../assets/images/OpcionesMensaje3.png";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

function ElementosDeComunicacionPage() {
  const navigate = useNavigate();
  return (
    <div>

      <h1 style={{ fontWeight: "bold", textAlign: "center", fontSize: "20px" }}>
        Elementos de comunicacion y comunicacion de mensajes.
      </h1>
      <Panel header="Aspectos Basicos de la comunicación." toggleable>
        <p className="m-0">
          Todos los medios de comunicacion tienen 3 elementos en comun:
        </p>
        <div className="list">
          <ul style={{ listStyle: "middle-dot" }} className="m-0">
            <li style={{ fontWeight: "bold" }}>Origen o Emisor</li>
            <li style={{ fontWeight: "bold" }}>Destino o receptor</li>
            <li style={{ fontWeight: "bold" }}>Canal o Medio</li>
          </ul>
        </div>
        <div className="images">
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <Image
                src={ComunicacionHumanaImg}
                alt="Imagen 1"
                style={{ maxWidth: "100%", height: "auto" }}
                preview
              />
            </div>
            <div style={{ flex: 1 }}>
              <Image
                src={ComunicacionComputadoraImg}
                alt="Imagen 2"
                style={{ maxWidth: "100%", height: "auto" }}
                preview
              />
            </div>
          </div>
        </div>
      </Panel>
      <Panel header="Establecimiento de reglas" toggleable>
        <p className="m-0">
          -Los protocolos son necesarios para la comunicación eficaz e incluyen
          lo siguiente:
        </p>
        <ul style={{ listStyle: "initial" }} className="m-0">
          <li style={{ fontWeight: "bold" }}>
            Un emisor y receptor identificados
          </li>
          <li style={{ fontWeight: "bold" }}>Idioma y gramática común</li>
          <li style={{ fontWeight: "bold" }}>Velocidad y momento de entrega</li>
          <li style={{ fontWeight: "bold" }}>
            Requisitos de confirmación o acuse de recibo
          </li>
        </ul>
        <p>
          -Los protocolos utilizados en comunicaciones de red también define lo
          siguiente:
        </p>
        <ul style={{ listStyle: "initial" }} className="m-0">
          <li style={{ fontWeight: "bold" }}>Codificacion de los mensajes</li>
          <li style={{ fontWeight: "bold" }}>Opciones de entrega de mesnaje</li>
          <li style={{ fontWeight: "bold" }}>
            Formato y encapsulamiento del mensaje
          </li>
          <li style={{ fontWeight: "bold" }}>Sincronización del mensaje</li>
          <li style={{ fontWeight: "bold" }}>Tamaño del mensaje</li>
        </ul>

        <Image
          src={ProtocolosComunicacionImg}
          style={{ maxWidth: "100%", height: "auto" }}
          preview
        />
      </Panel>
      <Panel header="Codificacion del Mensaje" toggleable>
        <ul style={{ listStyle: "initial" }} className="m-0">
          <li>
            La codificación entre hosts debe tener el formato adecuado para el
            medio.
          </li>
          <li>El host emisor primero convierte los mensajes en bits.</li>
          <li>
            Cada bit se codifica en un patrón de sonidos, ondas de luz o
            impulsos electrónicos, según el medio de red.
          </li>
          <li>
            El host de destino recibe y decodifica las señales para interpretar
            el mensaje.
          </li>
        </ul>
        <Image
          src={CodificacionMensajeImg}
          className="flex align-items-center justify-content-center"
          preview
        />
      </Panel>
      <Panel header="Formato y encapsulamiento del mensaje" toggleable>
        <ul style={{ listStyle: "initial" }} className="m-0">
          <li>
            Existe un formato acordado para las letras y las letras de
            direccionamiento que es necesario para la correcta entrega.
          </li>
          <li>
            Colocar la carta en el sobre dirigido se llama encapsulamiento.
          </li>
          <li>
            Cada mensaje de computadora se encapsula en un formato específico,
            llamado trama, antes de enviarse a través de la red.
          </li>
          <li>
            Un marco actúa como sobre ya que proporciona la dirección de origen
            y de destino.
          </li>
        </ul>
        <Image
          src={EncapsulamientoMensaheImg}
          className="flex align-items-center justify-content-center"
          preview
        />
      </Panel>
      <Panel header="Tamaño del mensaje" toggleable>
        <ul style={{ listStyle: "initial" }} className="m-0">
          <li>
            Los seres humanos dividen mensajes largos en pequeñas partes u
            oraciones
          </li>
          <li>
            Los mensajes largos también deben dividirse en pedazos más pequeños
            para viajar a través de una red.
            <ul style={{ listStyle: "circle", marginLeft: "20px" }}>
              <li>Cada pieza se envía en un marco distinto.</li>
              <li>
                Cada marco tiene su propia información de direccionamiento.
              </li>
              <li>
                Un host receptor utilizará diversos marcos para reconstruir el
                mensaje original.
              </li>
            </ul>
          </li>
        </ul>
      </Panel>
      <Panel header="Temporizacion del mensaje" toggleable>
        <ul style={{ listStyle: "initial" }} className="m-0">
          <li>
            <p style={{ fontWeight: "bold" }}>Método de acceso</p>
            <ul style={{ listStyle: "circle", marginLeft: "20px" }}>
              <li>
                Los hosts de una red necesitan saber cuándo comenzar a enviar
                mensajes y cómo responder cuando se produce alguna colisión.
              </li>
            </ul>
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>Control de flujo</p>
            <ul style={{ listStyle: "circle", marginLeft: "20px" }}>
              <li>
                Los hosts de origen y de destino usan control de flujo para
                negociar la temporización correcta a fin de evitar saturar el
                destino y asegurar la recepción de la información.
              </li>
            </ul>
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>
              Tiempo de espera para la respuesta
            </p>
            <ul style={{ listStyle: "circle", marginLeft: "20px" }}>
              <li>
                Los hosts de las redes tienen reglas que especifican cuánto
                tiempo deben esperar una respuesta y qué deben hacer si se agota
                el tiempo de espera para la respuesta.
              </li>
            </ul>
          </li>
        </ul>
      </Panel>
      <Panel header="Opciones de entrega del mensaje" toggleable>
        <div style={{ display: "flex" }}>
          <ul style={{ listStyle: "none", padding: 0, marginRight: "20px" }}>
            <li style={{ fontWeight: "bold" }}>Mensaje unidifusión</li>
            <li>
              <Image
                src={OpcionesMensaje1}
                alt="Imagen 3"
                style={{ width: "100%", height: "auto" }}
                preview
              />
            </li>
            <li>Entrega de uno a uno</li>
          </ul>
          <ul style={{ listStyle: "none", padding: 0, marginRight: "20px" }}>
            <li style={{ fontWeight: "bold" }}>Mensaje multidifusión</li>
            <li>
              <Image
                src={OpcionesMensaje2}
                alt="Imagen 3"
                style={{ width: "100%", height: "auto" }}
                preview
              />
            </li>
            <li>Entrega de uno a muchos</li>
          </ul>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ fontWeight: "bold" }}>Mensaje de difusión</li>
            <li>
              <Image
                src={OpcionesMensaje3}
                alt="Imagen 3"
                style={{ width: "100%", height: "auto" }}
                preview
              />
            </li>
            <li>Entrega de uno a todos3</li>
          </ul>
        </div>
      </Panel>
    </div>
  );
}

export default ElementosDeComunicacionPage;
