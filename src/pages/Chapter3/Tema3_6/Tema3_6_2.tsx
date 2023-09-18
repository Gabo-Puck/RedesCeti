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
    "¿Qué es Frame Relay?",
  funcSwitch:
    "Caracteristicas de Frame Relay",
  hubs:
    "Router",
  funcHubs:
    "Caracteristicas y funciones del router",
  comparacion:"Comparativa entre Frame Relay y ATM"
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
export default function Tema3_6_2() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return <div>
    <Title content="3.6.2 Frame Relay" />
    <Card title="Contenido" className="mb-10">
      <ul className="px-5 list-disc">
        <li><IndexAnchor content={index["switches"]} /></li>
        <li><IndexAnchor content={index["funcSwitch"]} /></li>
        <li><IndexAnchor content={index["comparacion"]} /></li>
      </ul>
    </Card>
    <article className="mb-10">
    </article>
    <article className="mb-10">
      <div className="">
        <Subtitle content={index["switches"]} />
        <Paragraph className="text-gray-500 dark:text-gray-400">
          Frame Relay es una tecnología de red de conmutación de paquetes que se utiliza para transmitir datos en redes de área amplia (WAN) y, en menor medida, en redes de área local (LAN). Esta tecnología se basa en la conmutación de paquetes, donde los datos se agrupan en tramas (frames) y se envían a través de la red hacia su destino.
        </Paragraph>
        <div className="pt-2">
          <Subtitle content={index["funcSwitch"]} />
          <Paragraph className="text-gray-500 dark:text-gray-400">
            El funcionamiento de ATM o Modo de Transferencia Asíncrona se puede resumir en los siguientes puntos:
          </Paragraph>
          <GridTwo align="items-center">
            <GridItem>

              <ul>
                <li>
                  <Paragraph>
                    <b>
                      Conmutación de Paquetes:
                    </b>
                    Frame Relay conmuta paquetes de datos en función de la información contenida en las cabeceras de las tramas, permitiendo una asignación dinámica de ancho de banda y una mayor eficiencia en la utilización de los recursos de la red.
                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Tramas (Frames):
                    </b>
                    Los datos se organizan en tramas (frames) que contienen información de control y datos. Cada trama tiene una cabecera (header) que incluye información de dirección (DLCI - Data Link Connection Identifier) para dirigir la trama a su destino.
                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Conexiones Virtuales (VC):
                    </b>
                    Frame Relay establece conexiones virtuales (VC) entre puntos finales de la red. Estas conexiones se definen por los DLCI, que identifican cada circuito virtual en la red.
                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Simplificación de Redes:
                    </b>
                    Frame Relay simplifica la administración de redes al utilizar conexiones lógicas en lugar de circuitos físicos dedicados. Esto conduce a una mayor flexibilidad y eficiencia en el uso de recursos.
                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Ancho de Banda Bajo Demanda:
                    </b>
                    Permite la asignación dinámica de ancho de banda según las necesidades, lo que permite un uso eficiente de los recursos y la adaptación a cambios en el tráfico de datos.
                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Costo-Eficiencia:
                    </b>
                    Frame Relay suele ser más económico que las soluciones de redes privadas tradicionales, ya que permite compartir ancho de banda y no requiere una conexión física punto a punto para cada circuito.
                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Ampliamente Utilizado en WAN:
                    </b>
                    Fue ampliamente utilizado como tecnología de red WAN antes de la popularización de Internet y las redes basadas en IP, aunque su uso ha disminuido con el tiempo debido a la adopción de tecnologías como MPLS (Multiprotocol Label Switching) y VPNs (Virtual Private Networks).
                  </Paragraph>

                </li>
              </ul>
            </GridItem>
            <GridItemCenter>
              <Image src="https://www.cisco.com/c/dam/en/us/support/docs/wan/frame-relay/16563-15a.gif" alt="switch" />
            </GridItemCenter>
          </GridTwo>
        </div>

      </div>
    </article>
    <article>
      <Subtitle content={index["comparacion"]} />
      <div className="flex">
        <DataTable className="mx-auto" value={diferencias} tableStyle={{ maxWidth: '35rem' }} >
          <Column field="caracteristica" header="Caracteristica"></Column>
          <Column field="frame" header="Frame Relay"></Column>
          <Column field="atm" header="ATM"></Column>
        </DataTable>
      </div>
    </article>


  </div>

}