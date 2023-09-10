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
import Paragraph from "../../components/Paragraph";
import Consolecode from "../../components/ConsoleCode";

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
export default function EsquemaDireccionamiento() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return <div>
        <Title content="4.7 Esquema de direccionamiento" />
        <Card title="Contenido" className="mb-10">
            <ul className="px-5 list-disc">
                <li><IndexAnchor content={index["intro"]} /></li>
                {/* <li><IndexAnchor content={index["tipos"]} /></li> */}
                <li><IndexAnchor content={index["func"]} /></li>
                <li><IndexAnchor content={index["tablas"]} /></li>
            </ul>
        </Card>
        <article className="mb-10">
            <div className="card flex flex-wrap">
                <GridTwo align="items-center">
                    <GridItem>
                        <Subtitle content={index["intro"]} />
                        <div>
                            <Paragraph className="text-gray-500 dark:text-gray-400">
                                Los protocolos se pueden definir como un conjunto de nomras y convenciones que rigen la forma en que los dispositivos de una red intercambian información.
                                En la capa de internet del modelo TCP/IP existen diversos protocolos, dentro de los que se encuentra ICMP, ARP y RARP etc.
                            </Paragraph>
                            <Paragraph>
                                Estos permiten la comunicación de los equipos y son escenciales dentro de la red. Uno de los más importantes es ARP pues determina la dirección de la capa de enlace de datos, la dirección MAC, para las direcciones IP conocidas
                            </Paragraph>


                            {/* <div className="card">
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
                            </div> */}
                        </div>
                    </GridItem>
                    <GridItemCenter>
                        <Image src="https://kinsta.com/wp-content/uploads/2023/02/DNS-links-domain.png" alt="switch" />
                    </GridItemCenter>
                </GridTwo>
            </div>
        </article>
        {/* <article className="mb-10">
            <div>
                <div>
                    <Subtitle content={index["tipos"]} />
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
        </article> */}
        <article className="mb-10">
            <GridTwo align="items-start">
                <GridItem>
                    <Subtitle content={index["func"]} />
                    <div className="card" >
                        <Paragraph className="">
                            Primeramente tenemos que entender que ARP convierte dinámicamente las direcciones de Internet en las direcciones de hardware exclusivas de las redes de área local. Este es su objetivo principal
                        </Paragraph>
                        <Paragraph className="">
                            Para ilustrar cómo funciona ARP, imaginemos dos nodos, X y Y. Si el nodo X desea comunicarse con Y y X e Y están en redes de área local (LAN) diferentes, X e Y se comunican a través de puentes, direccionadores o pasarelas, utilizando direcciones IP.
                            En una LAN, los nodos se comunican utilizando direcciones de hardware de bajo nivel. Aquí es donde entra ARP.
                            Los nodos del mismo segmento de la misma LAN utilizan ARP para determinar la dirección de hardware de otros nodos.
                        </Paragraph>
                        <Subtitle content={"La magia de arp"} />
                        <GridTwo align="items-start" style={{
                            justifyItems: "start"
                        }}>
                            <GridItem className="self-start">
                                <Paragraph>
                                    En primer lugar, el nodo X difunde una petición ARP para la dirección de hardware del nodo Y. La petición ARP contiene las direcciones IP y de hardware de X y la dirección IP de Y. Cuando Y recibe la petición ARP, pone una entrada para X en la antememoria de ARP (que se utiliza para correlacionar rápidamente de la dirección IP a la dirección de hardware) y, a continuación responde directamente a X con una respuesta de ARP que contiene las direcciones IP y de hardware de Y. Cuando el nodo X recibe la respuesta ARP de Y, pone una entrada para Y en la antememoria de ARP.
                                </Paragraph>
                            </GridItem>
                            <GridItem>
                                <Paragraph>
                                    Una vez que existe una entrada en la memoria para ARP en X para Y, el nodo X puede de enviar paquetes directamente a Y sin recurrir otra vez a ARP (a menos que se suprima la entrada de antememoria de ARP para Y, en cuyo caso se vuelve a utilizar ARP para contactar con Y).
                                </Paragraph>
                                <Paragraph>
                                    De esta forma, es mucho más eficiente el proceso de transmisión de mensajes, pues tenemos canal "directo" entre los equipos, lo que genera menos tráfico de red y hace mejor uso de los recursos disponibles
                                </Paragraph>
                            </GridItem>
                        </GridTwo>
                    </div>
                </GridItem>
                <GridItemCenter>
                    <Image src="https://www.checkpoint.com/wp-content/uploads/icon-arp.jpg" alt="Imagen hub" />
                </GridItemCenter>
            </GridTwo>
        </article>
        <article className="mb-10">
            <Subtitle content={index["tablas"]} />
            <Paragraph>
                La parte más importante del protoclo ARP son sus tablas de direccionamiento. Como ya se mencionó previamente, estas guardan en cada fila la dirección IP y su dirección MAC asociada.
                Lo podemos entender como un diccionario o un directorio de ip y mac.
            </Paragraph>
            <Paragraph>
                Dependiendo del sistema operativo, se pueden revisar el cache generado por la tabla ARP. En windows de usa el comando:
            </Paragraph>
            <Consolecode code="arp -a" />
            <Paragraph>
                Este comando nos mostraría una salida similar a esta:
            </Paragraph>
            <div className="flex justify-center">
                <Image src="https://www.meridianoutpost.com/resources/articles/command-line/images/arp-s.png" />
            </div>
        </article>

    </div>

}