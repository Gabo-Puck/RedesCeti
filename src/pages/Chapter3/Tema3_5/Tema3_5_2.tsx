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
        "Introducción a Switches y Hubs",
    switches:
        "Switches",
    funcSwitch:
        "¿Cómo funcionan los switches?",
    hubs:
        "Hubs",
    funcHubs:
        "¿Cómo funcionan los hubs?",
    comparacion:
        "Comparativa entre switches y hubs",
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
        <Title content="4.3 Hubs y Switches" />
        <Card title="Contenido" className="mb-10">
            <ul className="px-5 list-disc">
                <li><IndexAnchor content={index["intro"]} /></li>
                <li><IndexAnchor content={index["switches"]} /></li>
                <li><IndexAnchor content={index["funcSwitch"]} /></li>
                <li><IndexAnchor content={index["hubs"]} /></li>
                <li><IndexAnchor content={index["funcHubs"]} /></li>
                <li><IndexAnchor content={index["comparacion"]} /></li>
            </ul>
        </Card>
        <article className="mb-10">
        </article>
        <article className="mb-10">
            <Subtitle content={index["switches"]} />
            <div className="card flex flex-wrap">
                <GridTwo>
                    <GridItem>
                        <Subtitle content={index["intro"]} />
                        <div>
                            <Paragraph className="text-gray-500 dark:text-gray-400">
                                Dispositivos como los switches y los hubs son fundamentales para establecer y gestionar una conectividad eficiente y confiable. Estos componentes, aunque a menudo pasan desapercibidos, desempeñan un papel esencial en la estructura y el funcionamiento de las redes modernas
                            </Paragraph>
                            <Paragraph className="text-gray-500 dark:text-gray-400">
                                Los switches son piezas de construcción clave para una red que operan en la capa 2. Permiten que varios dispositivos, tales como computadoras, access points, impresoras y servidores; se conecten entre sí. Es decir que un switch permite a los dispositivos conectados compartir información y comunicarse.
                            </Paragraph>
                            <Paragraph className="text-gray-500 dark:text-gray-400">
                                Dentro de los switches podemos clasificarlos de acuerdo al nivel de configuración que requieren:
                            </Paragraph>
                            <div className="card">
                                <TabView>
                                    <TabPanel header="Administrados">
                                        <Paragraph className="text-gray-500 dark:text-gray-400">
                                            Están diseñados para que uno pueda simplemente conectarlo y ya funcione (Como si fuera plug and play). Se usan para casos muy básicos como redes domésticas, laboratorios o salas de conferencias.
                                        </Paragraph>
                                    </TabPanel>
                                    <TabPanel header="No administrados">
                                        <Paragraph className="text-gray-500 dark:text-gray-400">
                                            Están diseñados para ser más seguros, flexibles y con más funciones. Requieren una configuración personalizada, por lo tanto sus casos de uso son más extensos dependiendo de las necesidades de quien lo configure.
                                        </Paragraph>
                                    </TabPanel>
                                </TabView>
                            </div>
                        </div>
                    </GridItem>
                    <GridItemCenter>
                        <Image src="https://www.sincable.mx/wp-content/uploads/2020/01/42502782_m.jpg" alt="switch" />
                    </GridItemCenter>
                </GridTwo>
            </div>
        </article>
        <article className="mb-10">
            <div>
                <div>
                    <Subtitle content={index["funcSwitch"]} />
                    <div className="card">
                        <TabView>
                            <TabPanel header="Conmutación">
                                <Paragraph className="text-gray-500 dark:text-gray-400 mb-5">
                                    Es la funcionalidad básica de un switch. Esta consiste en transferir datos entre los diferentes dispositivos de la red. Para esto se utilizan datos que están en la cabecera de la trama Ethernet
                                </Paragraph>
                                <Paragraph className="text-gray-500 dark:text-gray-400 mb-5">
                                    Ya se hablo anteriormente de que es ethernet y características generales. Ahora veremos como funciona la conmutación con ethernet.
                                </Paragraph>
                                <Paragraph className="text-gray-500 dark:text-gray-400 mb-5">
                                    Están diseñados para que uno pueda simplemente conectarlo y ya funcione (Como si fuera plug and play). Se usan para casos muy básicos como redes domésticas, laboratorios o salas de conferencias.
                                </Paragraph>
                                <Paragraph className="text-gray-500 dark:text-gray-400 mb-5">
                                    Ethernet es la tecnología que se encarga de interconectar a los dispositivos de manera cableada en la mayoría de topologías. En este proceso de transmisión los datos se dividen en tramas y cada trama contiene información de control denominada **cabecera**. Dicha cabecera contiene la dirección MAC del dispositivo emisor y el dispositivo receptor.
                                </Paragraph>
                                <Paragraph className="text-gray-500 dark:text-gray-400 mb-5">
                                    Ahora, dentro de los switches se guarda una tabla de direcciones MAC de todos los dispositivos conectados al switch y cada MAC tiene asociado el puerto al que esta conectado de manera física. De esta manera el switch sabe a que puerto tiene que redirigir la trama correspondiente.
                                </Paragraph>
                            </TabPanel>
                            <TabPanel header="Buffer">
                                <div className="flex flex-wrap md:flex-wrap-reverse">
                                    <div>
                                        <Paragraph className="text-gray-500 dark:text-gray-400">
                                            Otra parte fundamental de los switches son los buffers. Estas son zonas de memoria donde se almacenan las tramas antes de ser reenviadas al puerto correspondiente. Esta característica además permite al switch gestionar de mejor manera los envíos de tramas cuando los puertos están congestionados.
                                        </Paragraph>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>

            </div>
        </article>
        <article className="mb-10">
        </article>
        <article className="mb-10">
            <GridTwo>
                <GridItemCenter>
                    <Image src="https://www.profesionalreview.com/wp-content/uploads/2019/02/HUB-Ethernet.jpg" alt="Imagen hub" />
                </GridItemCenter>
                <GridItem>
                    <Subtitle content={index["hubs"]} />
                    <div className="card">
                        <Paragraph className="text-gray-500 dark:text-gray-400">
                            De forma similar a un switch, el hub conecta diferentes nodos o dispositivos de red. Operan en la capa 1 del modelo OSI. Su principal objetivo es reenviar inmediatamente los datos recibidos.
                            A pesar de su alto uso uso en el pasado, actualmente se suele preferir un switch sobre el hub.
                        </Paragraph>
                    </div>
                    <Subtitle content={index["funcHubs"]} />
                    <div className="card">
                        <Paragraph className="text-gray-500 dark:text-gray-400">
                            Como ya se mencionó el hub es similar al switch en cuanto a propósito, sin embargo la forma en que lo hace es radicalmente diferente. El hub recibe los datos y los hace llegar a todos los dispositivos que tiene conectados en sus puertos.
                            Esta transmisión es half duplex, esto quiere decir que transmite datos en ambas direcciones sin embargo no al mismo tiempo, por lo tanto sufre en velocidad. También cabe recalcar que como esta transmisión no excluye a ningún host, todos estos reciben los datos y constantemente están ocupados generando alto tráfico en la red.
                        </Paragraph>

                    </div>
                </GridItem>
            </GridTwo>
        </article>
        <article className="mb-10">
            <Subtitle content={index["comparacion"]} />
            <div className="flex">
                <DataTable className="mx-auto" value={diferencias} tableStyle={{ maxWidth: '35rem' }} >
                    <Column field="switch" header="Switch"></Column>
                    <Column field="hub" header="Hub"></Column>
                </DataTable>
            </div>
        </article>

    </div>

}