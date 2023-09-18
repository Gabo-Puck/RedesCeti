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
    "Switches",
  funcSwitch:
    "Caracteristicas y funciones del switch",
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
    <Title content="3.5.2 Switch y Router" />
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
      <div className=" flex flex-wrap">
        <Subtitle content={index["switches"]} />
        <Paragraph className="text-gray-500 dark:text-gray-400">
          Un switch es un dispositivo de red que se utiliza para conectar varios dispositivos de red en una red local (LAN) para permitir la comunicación entre ellos. Es un equipo fundamental en la infraestructura de redes modernas. El switch opera en la capa 2 (capa de enlace de datos) del modelo OSI.
        </Paragraph>
        <GridTwo align="items-center">
          <GridItem>
            <div>
            </div>
            <Subtitle content={index["funcSwitch"]} />
            <Paragraph className="text-gray-500 dark:text-gray-400">
              Las funciones y caracteristicas claves de un switch son:
            </Paragraph>
            <ul className="px-5 list-disc">
              <li>
                <Paragraph>
                  <b>
                    Conexión de dispositivos:
                  </b>
                  Un switch permite conectar varios dispositivos, como computadoras, impresoras, servidores y otros dispositivos de red, en una red local.

                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  <b>
                    Conmutación de paquetes:
                  </b>
                  Un switch toma decisiones basadas en la dirección MAC (Media Access Control) de los dispositivos conectados y dirige los paquetes de datos de manera eficiente desde el origen al destino.

                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  <b>
                    Tabla de direcciones MAC:
                  </b>
                  El switch mantiene una tabla de direcciones MAC (a menudo conocida como tabla de direcciones de switching) que asocia las direcciones MAC de los dispositivos conectados a sus puertos respectivos.

                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  <b>
                    Comunicación eficiente:
                  </b>
                  Al utilizar la tabla de direcciones MAC, el switch puede enviar los paquetes de datos solo al puerto específico donde se encuentra el dispositivo de destino, mejorando la eficiencia de la red.

                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  <b>
                    Control de flujo y reenvío de paquetes:
                  </b>
                  Los switches controlan el flujo de datos y reenvían los paquetes solo a los puertos necesarios, lo que optimiza el tráfico de la red.

                </Paragraph>
              </li>
            </ul>
          </GridItem>
          <GridItemCenter>
            <Image src="https://blogthinkbig.com/wp-content/uploads/sites/4/2021/04/Network-Switch.jpeg?w=610" alt="switch" />
          </GridItemCenter>
        </GridTwo>
      </div>
    </article>

    <article className="mb-10">
    </article>
    <article className="mb-10">
      <Subtitle content={index["hubs"]} />
      <div>
        <Paragraph className="text-gray-500 dark:text-gray-400">
          Un router es otro componente fundamental en las redes de computadoras. A diferencia de un switch, que opera principalmente en la capa 2 del modelo OSI (capa de enlace de datos), un router opera en la capa 3 (capa de red) y realiza funciones esenciales para la comunicación entre redes.
        </Paragraph>
        <Paragraph>
          A continuación se describen sus características fundamentales:
        </Paragraph>
      </div>

      <Subtitle content={index["funcHubs"]} />
      <GridTwo>
        <GridItem>
          <Paragraph>
            <b>
              Interconexión de redes:
            </b>
            Un router es un dispositivo que se utiliza para conectar diferentes redes, como redes locales (LANs) o redes amplias (WANs), y permite que los datos se comuniquen entre ellas.

          </Paragraph>
          <Paragraph>
            <b>
              Enrutamiento:
            </b>
            La función principal de un router es determinar la ruta óptima que deben seguir los paquetes de datos desde el origen hasta su destino a través de la red. Esto se basa en la dirección IP de destino de los paquetes.

          </Paragraph>
          <Paragraph>
            <b>
              Tabla de enrutamiento:
            </b>
            El router mantiene una tabla de enrutamiento que contiene información sobre las rutas disponibles y cómo llegar a diferentes redes, incluidas las direcciones de red y las interfaces de salida.

          </Paragraph>
          <Paragraph>
            <b>
              Direccionamiento IP:
            </b>
            Un router utiliza direcciones IP para identificar y enrutar los paquetes de datos. Puede traducir entre direcciones IP públicas y privadas, permitiendo la comunicación entre diferentes redes.

          </Paragraph>
          <Paragraph>
            <b>
              Control de tráfico y congestión:
            </b>
            Los routers pueden implementar políticas de control de tráfico para gestionar el flujo de datos y evitar la congestión de la red. Pueden utilizar técnicas como QoS (Calidad de Servicio) para priorizar ciertos tipos de tráfico.

          </Paragraph>
          <Paragraph>
            <b>
              Firewall y seguridad:
            </b>
            Muchos routers incluyen funciones de firewall para proteger la red contra amenazas externas y controlar el acceso a la red desde el exterior.

          </Paragraph>
          <Paragraph>
            <b>
              NAT (Network Address Translation):
            </b>
            Los routers utilizan NAT para traducir direcciones IP privadas internas a direcciones IP públicas externas, permitiendo que varios dispositivos en una red compartan una sola dirección IP pública.

          </Paragraph>
        </GridItem>
        <GridItemCenter>
          <Image src="https://www.profesionalreview.com/wp-content/uploads/2019/02/HUB-Ethernet.jpg" alt="Imagen hub" />
        </GridItemCenter>
      </GridTwo>
    </article>

  </div>

}