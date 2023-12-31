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

export default function Tema3_7_1() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return <div>
    <Title content="3.7.1 Confidencialidad en modo con conexión" />
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