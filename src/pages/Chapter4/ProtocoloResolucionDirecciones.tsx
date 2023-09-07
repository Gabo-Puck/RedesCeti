import { Card } from "primereact/card";
import IndexAnchor from "../../components/Lesson/IndexAnchor";
import Subtitle from "../../components/Lesson/Subtitle";
import Title from "../../components/Lesson/Title";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react";
import { Button } from "primereact/button";
import { TabView, TabPanel } from 'primereact/tabview';
import { Image } from "primereact/image";
import GridTwo from "../../components/Grid";
import GridItem from "../../components/GridItem";
import GridItemCenter from "../../components/GridItemCenter";

const index = {
    intro:
        "Introducción al Protocolo de Resolución de Direcciones",
    tipos:
        "Tipos de Resolución de Direcciones",
    func:
        "Funcionamiento del protocolo ARP",
    tablas:
        "Tablas ARP",
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
export default function ProtocoloResolucionDirecciones() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return <div>
        <Title content="4.4 Protocolo de resolución de direcciones" />
        <Card title="Contenido" className="mb-10">
            <ul className="px-5 list-disc">
                <li><IndexAnchor content={index["intro"]} /></li>
                <li><IndexAnchor content={index["tipos"]} /></li>
                <li><IndexAnchor content={index["func"]} /></li>
                <li><IndexAnchor content={index["tablas"]} /></li>
            </ul>
        </Card>
        <article className="mb-10">
            <Subtitle content={index["intro"]} />
            <div className="card flex flex-wrap">
                <GridTwo>
                    <GridItem>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400">
                                Es el encargado de establecer una correspondencia entre la dirección IP y la dirección MAC.
                                Se trata de un protocolo estándar específico de redes que da la posibilidad de transmitir ciertos datos mediante un paquete. De modo que, el a.r.p permite que un dispositivo que se encuentre conectado a una red, obtenga una ruta MAC de otra máquina que también esté conectado a la misma red.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Este protocolo lleva a cabo un proceso de mapeo, funcionando como traductor para que dos sistemas con longitudes diferentes como la dirección IP (32 bits) y la dirección MAC (48 bits) puedan reconocerse entre sí, siendo la resolución de direcciones IPv4 la más usada en la actualidad.
                            </p>

                            <div className="card">
                                <TabView>
                                    <TabPanel header="Administrados">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Están diseñados para que uno pueda simplemente conectarlo y ya funcione (Como si fuera plug and play). Se usan para casos muy básicos como redes domésticas, laboratorios o salas de conferencias.
                                        </p>
                                    </TabPanel>
                                    <TabPanel header="No administrados">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Están diseñados para ser más seguros, flexibles y con más funciones. Requieren una configuración personalizada, por lo tanto sus casos de uso son más extensos dependiendo de las necesidades de quien lo configure.
                                        </p>
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
                    <Subtitle content={index["tipos"]} />
                    <div className="card">
                        <TabView>
                            <TabPanel header="Conmutación">
                                <p className="text-gray-500 dark:text-gray-400 mb-5">
                                    Es la funcionalidad básica de un switch. Esta consiste en transferir datos entre los diferentes dispositivos de la red. Para esto se utilizan datos que están en la cabecera de la trama Ethernet
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 mb-5">
                                    Ya se hablo anteriormente de que es ethernet y características generales. Ahora veremos como funciona la conmutación con ethernet.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 mb-5">
                                    Están diseñados para que uno pueda simplemente conectarlo y ya funcione (Como si fuera plug and play). Se usan para casos muy básicos como redes domésticas, laboratorios o salas de conferencias.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 mb-5">
                                    Ethernet es la tecnología que se encarga de interconectar a los dispositivos de manera cableada en la mayoría de topologías. En este proceso de transmisión los datos se dividen en tramas y cada trama contiene información de control denominada **cabecera**. Dicha cabecera contiene la dirección MAC del dispositivo emisor y el dispositivo receptor.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 mb-5">
                                    Ahora, dentro de los switches se guarda una tabla de direcciones MAC de todos los dispositivos conectados al switch y cada MAC tiene asociado el puerto al que esta conectado de manera física. De esta manera el switch sabe a que puerto tiene que redirigir la trama correspondiente.
                                </p>
                            </TabPanel>
                            <TabPanel header="Buffer">
                                <div className="flex flex-wrap md:flex-wrap-reverse">
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Otra parte fundamental de los switches son los buffers. Estas son zonas de memoria donde se almacenan las tramas antes de ser reenviadas al puerto correspondiente. Esta característica además permite al switch gestionar de mejor manera los envíos de tramas cuando los puertos están congestionados.
                                        </p>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>

            </div>
        </article>
        <article className="mb-10">
            <GridTwo>
                <GridItemCenter>
                    <Image src="https://www.profesionalreview.com/wp-content/uploads/2019/02/HUB-Ethernet.jpg" alt="Imagen hub" />
                </GridItemCenter>
                <GridItem>
                    <Subtitle content={index["func"]} />
                    <div className="card">
                        <p className="text-gray-500 dark:text-gray-400">
                            De forma similar a un switch, el hub conecta diferentes nodos o dispositivos de red. Operan en la capa 1 del modelo OSI. Su principal objetivo es reenviar inmediatamente los datos recibidos.
                            A pesar de su alto uso uso en el pasado, actualmente se suele preferir un switch sobre el hub.
                        </p>
                    </div>
                </GridItem>
            </GridTwo>
        </article>
        <article className="mb-10">
            <Subtitle content={index["tablas"]} />
            <div className="flex">
                <DataTable className="mx-auto" value={diferencias} tableStyle={{ maxWidth: '35rem' }} >
                    <Column field="switch" header="Switch"></Column>
                    <Column field="hub" header="Hub"></Column>
                </DataTable>
            </div>
        </article>

    </div>

}