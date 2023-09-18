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
  intro:
    "Introducción a Repetidores y Hubs",
  switches:
    "Repetidores",
  funcSwitch:
    "¿Cómo funcionan los repetidores?",
  hubs:
    "Hubs",
  funcHubs:
    "Caracteristicas de los hubs",
  comparacion:
    "Comparativa entre repetidores y hubs",
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
export default function RepetidorHub() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return <div>
    <Title content="3.5.1 Repetidores y Hubs" />
    <Card title="Contenido" className="mb-10">
      <ul className="px-5 list-disc">
        <li><IndexAnchor content={index["intro"]} /></li>
        <li><IndexAnchor content={index["switches"]} /></li>
        <li><IndexAnchor content={index["funcSwitch"]} /></li>
        <li><IndexAnchor content={index["hubs"]} /></li>
        <li><IndexAnchor content={index["funcHubs"]} /></li>
      </ul>
    </Card>
    <article className="mb-10">
    </article>
    <article className="mb-10">
      <Subtitle content={index["switches"]} />
      <div className="card flex flex-wrap">
        <GridTwo>
          <GridItem>
            <div>
              <Paragraph className="text-gray-500 dark:text-gray-400">
                Es un dispositivo utilizado para amplificar una señal o una serie de señales en una red de área local (LAN). Su función principal es extender la distancia a la que pueden llegar las señales de red sin degradar la calidad de la señal.
              </Paragraph>
              <Paragraph className="text-gray-500 dark:text-gray-400">
                Algunos aspectos a destacar sobre los repetidores son:
              </Paragraph>
              <div className="card">
                <ul className="px-5 list-disc">
                  <li>
                    <Paragraph>
                      <b>
                        Amplificación de señal:{" "}
                      </b>
                      Los repetidores toman una señal de red entrante, la amplifican y luego la retransmiten. Esto ayuda a superar la atenuación de la señal que ocurre con la distancia.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      <b>
                        Dispositivo de capa física:{" "}
                      </b>
                      Los repetidores operan en la capa física del modelo OSI, lo que significa que trabajan con señales eléctricas o ópticas directamente y no examinan ni modifican los datos en los paquetes de red.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      <b>
                        No inteligentes:{" "}
                      </b>
                      Los repetidores son dispositivos simples y no tienen inteligencia para tomar decisiones sobre cómo encaminar paquetes o gestionar la red. Simplemente repiten las señales que reciben.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      <b>
                        Limitaciones:{" "}
                      </b>
                      Aunque los repetidores son útiles para extender la distancia de una red, tienen limitaciones en términos de la cantidad de repetidores que se pueden encadenar y la distancia total que se puede cubrir debido a la acumulación de ruido y degradación de la señal.
                    </Paragraph>
                  </li>
                </ul>
              </div>
            </div>
          </GridItem>
          <GridItemCenter>
            <Image src="https://i.blogs.es/dbd233/router/500_333.jpg" alt="switch" />
          </GridItemCenter>
        </GridTwo>
      </div>
    </article>
    <article className="mb-10">
      <div>
        <div>
          <Subtitle content={index["funcSwitch"]} />
          <div className="card">
            <ul className="px-5 list-disc">
              <li>
                <Paragraph>
                  <b>
                    Recepción de la señal:{" "}
                  </b>
                  Un repetidor recibe una señal débil proveniente de un cable o medio de transmisión. Esta señal puede haber experimentado atenuación debido a la distancia que ha viajado desde la fuente original.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  <b>
                    Amplificación:{" "}
                  </b>
                  El repetidor amplifica esta señal débil. Utiliza amplificadores electrónicos para aumentar la amplitud de la señal, lo que ayuda a contrarrestar la atenuación y restaurar la señal a su fuerza original o cercana a ella.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  <b>
                    Compensación de ruido y deformación:{" "}
                  </b>
                  Durante la transmisión, la señal puede degradarse debido a interferencias o ruido. El repetidor también puede eliminar o reducir parte de este ruido para mejorar la calidad de la señal.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  <b>
                    Transmisión de la señal amplificada:{" "}
                  </b>
                  Después de amplificar y limpiar la señal, el repetidor la retransmite con una mayor potencia a través del medio de transmisión. Esto permite que la señal viaje más lejos sin degradarse y llegue a dispositivos en ubicaciones distantes de la red.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  <b>
                    Repetición de proceso:{" "}
                  </b>
                  Este proceso de recepción, amplificación y transmisión de la señal se repite en cada repetidor a lo largo de la red, lo que ayuda a extender la distancia a la que puede llegar la señal y a mantener su integridad.
                </Paragraph>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </article>
    <article className="mb-10">
    </article>
    <article className="mb-10">
      <Subtitle content={index["hubs"]} />
      <div className="card">
        <Paragraph className="text-gray-500 dark:text-gray-400">
          Un hub en redes es un dispositivo de red que se utiliza para conectar múltiples dispositivos en una red local (LAN) y facilitar la comunicación entre ellos. Funciona en la capa física del modelo OSI y se utiliza para crear una topología de red conocida como "estrella extendida". Aunque los hubs fueron comunes en el pasado, han sido en gran parte reemplazados por switches, que ofrecen un rendimiento y funcionalidades superiores.
        </Paragraph>
      </div>
      <GridTwo align="items-center">
        <GridItem>
          <Subtitle content={index["funcHubs"]} />
          <div className="card">

            <ul className="px-5 list-disc">

              <li>
                <Paragraph>
                  <b>
                    Conexión de dispositivos:
                  </b>
                  Un hub tiene múltiples puertos en los que se pueden conectar computadoras, impresoras, servidores y otros dispositivos de red. Cada puerto es un punto de conexión para un dispositivo.

                </Paragraph>

              </li>
              <li>
                <Paragraph>
                  <b>
                    Amplificación y repetición de señales:
                  </b>
                  Cuando un dispositivo envía datos a través de un puerto al hub, este amplifica la señal y la repite en todos los demás puertos. Esto asegura que los datos lleguen a todos los dispositivos conectados al hub.

                </Paragraph>

              </li>
              <li>
                <Paragraph>
                  <b>
                    Dominio de colisión:
                  </b>
                  Los hubs operan en un dominio de colisión, lo que significa que cuando un dispositivo envía datos al hub, estos datos se transmiten a todos los dispositivos conectados y pueden causar colisiones si varios dispositivos intentan comunicarse al mismo tiempo.

                </Paragraph>

              </li>
              <li>
                <Paragraph>
                  <b>
                    No toma decisiones:
                  </b>
                  A diferencia de un switch, que aprende las direcciones MAC de los dispositivos conectados y dirige el tráfico solo a los puertos necesarios, un hub reenvía los datos a todos los puertos, incluso si el destinatario está en el mismo puerto que el remitente.

                </Paragraph>

              </li>
              <li>
                <Paragraph>
                  <b>
                    Limitaciones de ancho de banda compartido:
                  </b>
                  El ancho de banda de un hub se comparte entre todos los dispositivos conectados. Si varios dispositivos intentan comunicarse simultáneamente, pueden competir por el ancho de banda y causar congestión.

                </Paragraph>

              </li>
              <li>
                <Paragraph>
                  <b>
                    Dispositivo pasivo:
                  </b>
                  El hub es un dispositivo pasivo, lo que significa que no realiza ningún tipo de procesamiento o filtrado de datos. Su función principal es repetir las señales de entrada y enviarlas a todos los dispositivos conectados.

                </Paragraph>

              </li>
            </ul>

          </div>
        </GridItem>
        <GridItemCenter >
          <Image src="https://blogthinkbig.com/wp-content/uploads/sites/4/2021/04/Network-Switch.jpeg?resize=610,407" alt="Imagen hub" />
        </GridItemCenter>
      </GridTwo>
    </article>
  </div>

}