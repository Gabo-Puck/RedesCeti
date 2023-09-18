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
    "¿Qué es ATM?",
  funcSwitch:
    "Funcionamiento de ATM",
  hubs:
    "Router",
  funcHubs:
    "Caracteristicas y funciones del router",
}
const diferencias = [
  {
    switch: 'La trama se envía a un host en específico',
    hub: "La trama se envía a todos los host",
  },
  {
    switch: 'Genera menos tráfico en la red',
    hub: 'Genera más tráfico en la red',
  },
  {
    switch: 'Uso de tablas de dirección MAC',
    hub: 'No identifica a los puertos por dirección MAC',
  },
  {
    switch: 'Genera más seguridad al segmentar o dirigir la trama',
    hub: 'Genera inseguridad en la red',
  },
  {
    switch: 'Ofrecen más flexibilidad de configuraciones para diferentes casos',
    hub: '',
  },
]
export default function SwitchRouter() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return <div>
    <Title content="3.6.1 ATM" />
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
          La tecnología ATM (Modo de Transferencia Asíncrona) es una forma de conmutación de celdas enfocada en conexiones. En ATM, las estaciones finales se conectan usando conexiones dúplex dedicadas. La red ATM se construye mediante conmutadores interconectados por conexiones físicas dedicadas. Para comenzar la transferencia de datos, se establecen conexiones punto a punto. Pueden existir múltiples conexiones en una sola
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
                      Conmutación de Celdas:
                    </b>
                    ATM utiliza una técnica de conmutación de celdas, donde la información se divide en celdas de tamaño fijo (53 bytes), lo que permite una transferencia eficiente y rápida de datos.

                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Conexiones Dedicadas:
                    </b>
                    Se establecen conexiones dúplex dedicadas entre estaciones finales y la red ATM. Esto asegura un flujo de datos más estable y garantiza el ancho de banda reservado para cada conexión.

                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Establecimiento de Conexiones:
                    </b>
                    Antes de la transmisión de datos, se deben establecer conexiones de extremo a extremo en la red ATM. Estas conexiones son identificadas por un par de valores: Identificador de Vía de Acceso Virtual (VPI) y Identificador de Canal Virtual (VCI).

                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Segmentación y Reensamblaje:
                    </b>
                    Las estaciones emisoras dividen los datos en celdas de 53 bytes antes de transmitirlas. En el extremo receptor, las celdas se reensamblan en Unidades de Datos de Protocolo (PDU) para su procesamiento adecuado.

                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Identificación de Celdas:
                    </b>
                    Cada celda ATM contiene información de identificación, incluidos VPI y VCI, que son cruciales para dirigir las celdas al destino correcto a través de la red.

                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Función de los Conmutadores ATM:
                    </b>
                    Los conmutadores ATM tienen la función de reconocer el origen de la celda, determinar el siguiente salto y enviar la celda a un puerto apropiado en su ruta hacia el destino final.

                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Circuitos Virtuales:
                    </b>
                    Cada conexión se representa como una concatenación de valores VPI:VCI a través de la red, lo que permite la gestión eficiente de múltiples conexiones utilizando un mismo enlace físico.

                  </Paragraph>

                </li>
                <li>
                  <Paragraph>
                    <b>
                      Cambio de VPI:VCI:
                    </b>
                    Los valores de VPI:VCI cambian en cada salto a través de los conmutadores ATM, lo que permite enrutar las celdas correctamente hasta su destino.

                  </Paragraph>

                </li>
              </ul>
            </GridItem>
            <GridItemCenter>
              <Image src="https://blogthinkbig.com/wp-content/uploads/sites/4/2021/04/Network-Switch.jpeg?w=610" alt="switch" />
            </GridItemCenter>
          </GridTwo>
        </div>

      </div>
    </article>

    
    
  </div>

}