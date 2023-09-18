import { Card } from "primereact/card";
import IndexAnchor from "../../../components/Lesson/IndexAnchor";
import Subtitle from "../../../components/Lesson/Subtitle";
import Title from "../../../components/Lesson/Title";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react";
import { Button } from "primereact/button";
import { TabView, TabPanel } from 'primereact/tabview';
import { Image } from "primereact/image";
import GridTwo from "../../../components/Grid";
import GridItem from "../../../components/GridItem";
import GridItemCenter from "../../../components/GridItemCenter";
import Paragraph from "../../../components/Paragraph";

const index = {
  switches:
    "Confidencialidad",
  funcSwitch:
    "Establecer una conexión segura",
  hubs:
    "Router",
  funcHubs:
    "Caracteristicas y funciones del router",
  comparacion: "Comparativa entre Frame Relay y ATM"
}
const diferencias = [
  {
    caracteristica: "Tipo de Conmutación	",
    frame: 'Conmutación de paquetes',
    atm: "Conmutación de celdas",
  },
  {
    caracteristica: "Tamaño de Unidad de Datos	",
    frame: 'Tramas (frames) de tamaño variable',
    atm: 'Celdas de tamaño fijo (53 bytes)',
  },
  {
    caracteristica: "Conexiones Virtuales	",
    frame: 'Sí, utilizando DLCI (Data Link Connection Identifier)	',
    atm: 'Sí, utilizando VPI (Virtual Path Identifier) y VCI (Virtual Channel Identifier)',
  },
  {
    caracteristica: "Control de Congestión",
    frame: 'Control de congestión basado en ventana deslizante	',
    atm: 'Utiliza estrategias de congestión y control de tráfico más avanzadas, como ABR (Available Bit Rate) y UBR (Unspecified Bit Rate)',
  },
  {
    caracteristica: "Ancho de Banda	",
    frame: 'Asignación estática de ancho de banda',
    atm: 'Permite asignación dinámica de ancho de banda y garantiza QoS (Quality of Service)',
  },
  {
    caracteristica: "Uso Principal",
    frame: 'Redes de datos y voz menos crítica',
    atm: 'Aplicaciones críticas como voz y video en tiempo real',
  },
  {
    caracteristica: "Latencia",
    frame: 'Mayor latencia en comparación con ATM',
    atm: 'Menor latencia en comparación con Frame Relay',
  },
  {
    caracteristica: "Flexibilidad",
    frame: 'Menor flexibilidad para gestionar diferentes tipos de tráfico',
    atm: 'Mayor flexibilidad para acomodar varios tipos de tráfico, incluyendo voz, video y datos',
  },
  {
    caracteristica: "Costo",
    frame: 'Generalmente más económico que ATM',
    atm: 'Históricamente más costoso debido a su complejidad y características avanzadas',
  },
  {
    caracteristica: "Actualidad",
    frame: 'Menos común en la actualidad debido a la adopción de tecnologías más modernas',
    atm: 'Todavía se utiliza en algunas redes, pero su uso ha disminuido en favor de tecnologías como MPLS y Ethernet',
  },
]
export default function Tema3_7_1() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return <div>
    <Title content="3.7.1 Confidencialidad en modo con conexión" />
    <Card title="Contenido" className="mb-10">
      <ul className="px-5 list-disc">
        <li><IndexAnchor content={index["switches"]} /></li>
        <li><IndexAnchor content={index["funcSwitch"]} /></li>
        <li><IndexAnchor content={index["hubs"]} /></li>
        <li><IndexAnchor content={index["funcHubs"]} /></li>
      </ul>
    </Card>
    <article className="mb-10">
    </article>
    <article className="mb-10">
      <div className="">
        <Subtitle content={index["switches"]} />
        <Paragraph className="text-gray-500 dark:text-gray-400">
          La confidencialidad se puede definir en el area de redes como la forma de prevenir la divulgación de la información a personas o sistemas no autorizados.
        </Paragraph>
        <Paragraph className="text-gray-500 dark:text-gray-400">
          En modo con conexión se refiere a la forma en que se establece una conexión segura antes de que comience la transmisión de datos. En este modo, se establece una conexión entre las partes involucradas antes de que los datos se transmitan. Esta conexión proporciona un canal seguro a través del cual los datos pueden fluir
        </Paragraph>
        <div className="pt-2">
          <Subtitle content={index["funcSwitch"]} />
          <GridTwo align="items-center">
            <GridItem>
              <Paragraph>
                Para proteger la información y garantizar que la comunicación entre dos puntos esté protegida contra accesos no autorizados se tienen que cumplir ciertos requisitos
              </Paragraph>
              <ul className="px-5 list-disc">
                <li>
                  <Paragraph>
                    <b>Autenticación: {" "}</b>
                    Es el proceso de verificar la identidad de las partes involucradas en la comunicación. Esto se puede realizar a través de credenciales, certificados biometría etc.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <b>Cifrado: {" "}</b>
                    Es el proceso de convertir la información en un formato ininteligible utilizando algoritmos matemáticos. Implica usar claves criptográficas para cifrar y descifrar los datos.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <b>Integridad de datos: {" "}</b>
                    Garantiza que los datos no han sido modificados o alterados de forma no autorizada durante la transmisión. Un método usado es un código Hash que es obtenido a través de los datos transmitidos, de forma que si se altera este código también cambia.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <b>Control de acceso: {" "}</b>
                    Permite que ciertos datos solo sean accedidos por partes autorizadas y con los permisos pertinentes.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <b>Seguridad en la capa de transporte: {" "}</b>
                    Implementar seguridad mediante protocolos como TLS/SSL. 
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <b>Seguridad física: {" "}</b>
                    Asegurar que los dispositivos y conexiones físicas estén protegidos contra accesos no autorizados.
                  </Paragraph>
                </li>
              </ul>
            </GridItem>
            <GridItemCenter>
              <Image src="https://www.z-net.com.ar/wp-content/uploads/seguridad-redes-informaticas.jpg" alt="switch" />
            </GridItemCenter>
          </GridTwo>
        </div>

      </div>
    </article >



  </div >

}