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
export default function Tema3_7_2() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return <div>
    <Title content="3.7.2 Confidencialidad del flujo de datos" />
    <Card title="Contenido" className="mb-10">
      <ul className="px-5 list-disc">
        <li><IndexAnchor content={index["switches"]} /></li>
        <li><IndexAnchor content={index["funcSwitch"]} /></li>
      </ul>
    </Card>
    <article className="mb-10">
    </article>
    <article className="mb-10">
      <div className="">
        <Subtitle content={index["switches"]} />
        <Paragraph className="text-gray-500 dark:text-gray-400">
          También conocido como TFC o Traffic-Flow Confidentiality, se refiere a la protección de la información relacionada con los patrones y características del tráfico de datos en una red. Este concepto se centra en garantizar que, además de proteger el contenido de los datos (mediante el cifrado y otras medidas de seguridad), también se protejan los metadatos y las características del tráfico, como la duración de las sesiones, el tamaño de los paquetes, la frecuencia de las transmisiones, entre otros.
        </Paragraph>
        <Paragraph className="text-gray-500 dark:text-gray-400">
        La confidencialidad del flujo de tráfico se vuelve importante porque, aunque el contenido de los datos esté cifrado, los metadatos o la información sobre cómo se están comunicando las partes pueden revelar patrones de comportamiento, hábitos, relaciones y otros detalles que pueden ser sensibles o privados. Esta información podría ser utilizada para inferir actividades, identificar usuarios o comprometer la privacidad de las comunicaciones.
        </Paragraph>

        <Paragraph>
          Las técnicas utilizadas para TFC son las siguientes: 
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
                    <b>Difusión de Tráfico Homogénea:: {" "}</b>
                    Se busca hacer que el tráfico sea uniforme y difícil de distinguir entre diferentes comunicaciones. Esto se logra mezclando paquetes de datos para que sea complicado identificar patrones específicos.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <b>Reinyección de Tráfico: {" "}</b>
                    Se pueden reinyectar paquetes adicionales en la comunicación para confundir a un observador externo y dificultar la correlación de tráfico.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <b>Enmascaramiento de Duración y Tamaño de Paquetes: {" "}</b>
                    Se modifican las duraciones y tamaños de los paquetes para ocultar información sobre las transmisiones y las interacciones entre los participantes.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <b>Uso de Redes Privadas Virtuales (VPN): {" "}</b>
                    Al utilizar VPN, se encripta todo el tráfico y se mezcla con el tráfico de otros usuarios de la VPN, haciendo que sea más difícil para un observador externo identificar las comunicaciones individuales.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <b>Uso de Túneles y Rutas de Comunicación Aleatorias: {" "}</b>
                    Se utilizan túneles y rutas de comunicación aleatorias para ocultar la fuente y el destino del tráfico.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <b>Uso de Encaminamiento Anónimo: {" "}</b>
                    Se emplean técnicas de encaminamiento que ocultan la fuente real del tráfico, como Tor, para dificultar el rastreo y la correlación.
                  </Paragraph>
                </li>
              </ul>
            </GridItem>
            <GridItemCenter>
              <Image src="https://d3i71xaburhd42.cloudfront.net/d52df0fa269cabac8ece3d599b256217d58f92a0/2-Figure1-1.png" alt="switch" />
            </GridItemCenter>
          </GridTwo>
        </div>

      </div>
    </article >



  </div >

}