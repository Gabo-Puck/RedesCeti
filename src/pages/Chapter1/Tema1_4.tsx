import React from "react";
import Title from "../../components/Lesson/Title";
import Subtitle from "../../components/Lesson/Subtitle";
import { Fieldset } from "primereact/fieldset";

function Tema1_4() {
  return (
    <div>
      <Title content="1.4 Modelo de sistemas de comunicaciónes" />
      <p>
        Un sistema de comunicaciones es un conjunto de dispositivos que son
        utilizados con la finalidad de transmitir, emitir y recibir señales de
        todo tipo, como voz, datos, audio, video, etc., además dichas señales
        pueden ser del tipo digital o analógica. Un sistema de comunicaciones
        puede describirse fácilmente mediante tres elementos básicos; un
        transmisor, el cual se encarga de generar la señal que se desea y
        acoplarla de tal forma que pueda viajar a través del canal, mediante
        procedimientos como modulación, filtrado, codificación, etc.; un medio
        de transmisión, el cual será el canal mediante el cual la señal va a
        viajar, y puede ser desde fibras ópticas, cables coaxiales, hasta el
        mismo aire; y finalmente un receptor, que realiza el procedimiento
        inverso del transmisor con la finalidad de reconstruir la señal y que
        esta sea lo mas parecida a la original.
      </p>
      <p>
        Todas las comunicaciones de red implican el uso de hardware y software.
        El soporte de comunicaciones de red lo determinan el hardware y el
        software necesarios para ejecutar dicho hardware y para intercambiar
        información con la red. El hardware consta del equipo físico conectado a
        la red física. El software consta de los programas y los controladores
        de dispositivo asociados con el funcionamiento de un sistema
        determinado. El hardware de sistema consta de adaptadores o de otros
        dispositivos que proporcionan una vía de acceso o una interfaz entre el
        software de sistema y la red física. Un adaptador requiere una tarjeta
        de E/S en el sistema. Un adaptador prepara todos los datos de entrada y
        de salida; efectúa las búsquedas de direcciones; proporciona
        controladores, receptores y protección frente a sobrecargas; da soporte
        a distintas interfaces y, en general, exime al procesador del sistema de
        la mayoría de las tareas relacionadas con las comunicaciones.
      </p>

      <div className="card">
        <Fieldset legend="Protocolos">
          <p className="m-0">
            Los protocolos son conjuntos de reglas semánticas y sintácticas que
            definen cómo se entrega la información, cómo se adjunta para que
            alcance su destino de forma segura y la vía de acceso que sigue. Los
            protocolos también coordinan el flujo de mensajes y los acuses de
            recibo.
          </p>
        </Fieldset>
      </div>

      <div className="card">
        <Fieldset legend="Direcciones">
          <p className="m-0">
            Un dominio de red es una agrupación administrativa de varias redes
            de sistemas o hosts dentro de la misma infraestructura. Los dominios
            ponen los recursos de proceso de datos en una red bajo un control
            común. Por ejemplo, la estructura de Internet ilustra cómo los
            dominios definen la dirección IP (Protocolo Internet). Internet es
            una extensa red compuesta por muchas redes distintas más pequeñas.
            Para facilitar las rutas y el direccionamiento, las direcciones de
            internet se estructuran jerárquicamente en dominios, con categorías
            muy amplias en la parte superior, por ejemplo com para usuarios de
            comercio, edu para usuarios de enseñanza y gov para usuarios del
            gobierno.
          </p>
        </Fieldset>
      </div>
      <div className="card">
        <Fieldset legend="Pasarelas y puentes">
          <p className="m-0">
            En internet residen una gran variedad de redes, que normalmente
            utilizan distinto hardware y ejecutan distinto software. Las
            pasarelas y los puentes permiten a estas distintas redes comunicarse
            entre sí. Un puente es una unidad funcional que conecta dos LAN que
            posiblemente utilizan el mismo procedimiento de control de enlace
            lógico (LLC), por ejemplo Ethernet, pero diferentes procedimientos
            de control de accesos al medio (MAC). Una pasarela tiene un rango
            más amplio que un puente. Opera por encima de la capa de enlace y,
            cuando es necesario, convierte la interfaz y el protocolo utilizados
            por una red en los utilizados por otra red distinta. Las pasarelas
            permiten las transferencias de datos entre las diversas redes que
            constituyen Internet.
          </p>
        </Fieldset>
      </div>
      <div className="card">
        <Fieldset legend="Direccionamiento de datos">
          <p className="m-0">
            La utilización de nombres de dominio para el direccionamiento y de
            pasarelas para la conversión facilita en gran medida el
            direccionamiento de los datos que se están transfiriendo. El
            direccionamiento es la asignación de una vía de acceso por la que un
            mensaje alcanza su destino. El nombre de dominio define de forma
            efectiva el destino de mensaje. En una red grande como Internet, la
            información se direcciona de una red de comunicaciones a la
            siguiente hasta que llega a su destino. Cada red de comunicaciones
            comprueba el nombre de dominio y, basándose en los dominios con los
            que la red está familiarizada, direcciona la información hasta la
            siguiente detención lógica. De este modo, cada red de comunicaciones
            que recibe los datos contribuye al proceso de direccionamiento.
          </p>
        </Fieldset>
      </div>
      <div className="card">
        <Fieldset legend="Nodos locales y remotos">
          <p className="m-0">
            Una red física la utilizan los sistemas principales que residen en
            dicha red. Cada sistema principal es un nodo de la red. Un nodo es
            una ubicación direccionable de una red de comunicaciones que
            proporciona servicios de proceso de sistema principal. Las
            intercomunicaciones de estos diversos nodos se definen como locales
            o remotas. Local pertenece a un dispositivo, archivo o sistema al
            que se accede directamente desde el sistema, sin utilizar una línea
            de comunicaciones. Remoto pertenece a un dispositivo, archivo o
            sistema al que el sistema accede a través de una línea de
            comunicaciones. Los archivos locales residen en el sistema, mientras
            que los archivos remotos residen en un servidor de archivos o en
            otro nodo con el que se comunica utilizando una red física, por
            ejemplo Ethernet, Red en anillo o línea telefónica.
          </p>
        </Fieldset>
      </div>
      <div className="card">
        <Fieldset legend="Cliente y servidor">
          <p className="m-0">
            Un servidor es un sistema que contiene datos o proporciona recursos
            a los que deben acceder otros sistemas de la red. Un cliente es un
            sistema que solicita servicios o datos de un servidor. Los tipos de
            servidor comunes son servidores de archivos que almacenan archivos,
            servidores de nombres que almacenan nombres y direcciones,
            servidores de aplicaciones que almacenan programas y aplicaciones y
            servidores de impresión que planifican y dirigen los trabajos de
            impresión al destino. Un cliente puede solicitar código de programa
            actualizado o el uso de aplicaciones de un servidor de código. Para
            obtener un nombre o una dirección, un cliente se pone en contacto
            con un servidor de nombres. Un cliente también puede solicitar
            archivos y datos para la entrada de datos, las consultas o la
            actualización de registros de un servidor de archivos.
          </p>
        </Fieldset>
      </div>
    </div>
  );
}

export default Tema1_4;
