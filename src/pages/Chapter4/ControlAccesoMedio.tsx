import { Card } from "primereact/card";
import IndexAnchor from "../../components/Lesson/IndexAnchor";
import Subtitle from "../../components/Lesson/Subtitle";
import Title from "../../components/Lesson/Title";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react";
import { Button } from "primereact/button";
import { TabView, TabPanel } from 'primereact/tabview';
import Paragraph from "../../components/Paragraph";
import { Image } from "primereact/image";
import GridTwo from "../../components/Grid";
import GridItem from "../../components/GridItem";
import GridItemCenter from "../../components/GridItemCenter";

const index = {
    def:
        "Definicion",
    protocolos:
        "Protocolos de acceso al medio",
}

export default function ControlAccesoMedio() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return <div>
        <Title content="4.2 Control de acceso al medio" />
        <Card title="Contenido" className="mb-10">
            <ul className="px-5 list-disc">
                <li><IndexAnchor content={index["def"]} /></li>
                <li><IndexAnchor content={index["protocolos"]} /></li>

            </ul>
        </Card>
        <article className="mb-10">
            <Subtitle content={index["def"]} />
            <Paragraph>
                El control de acceso al medio (MAC, por sus siglas en inglés, Media Access Control) es un concepto fundamental en las redes informáticas que se refiere a la gestión y regulación del acceso de dispositivos a un medio compartido de transmisión de datos, como un cable o un canal inalámbrico. Su principal objetivo es evitar colisiones, garantizar un acceso equitativo y coordinar la transmisión de datos entre múltiples dispositivos en la misma red. Aquí hay una descripción más detallada del tema:
            </Paragraph>
        </article>
        <article className="mb-10">
            <article className="mb-10">
                <Subtitle content={index["protocolos"]} />
                <GridTwo>
                    <GridItemCenter>
                        <Image src="https://i.ytimg.com/vi/-DMKIFlRT4k/maxresdefault.jpg" />
                    </GridItemCenter>
                    <GridItem>
                        <>
                            <div className="mb-5">
                                <h3>
                                    Protocolo CSMA/CD (Carrier Sense Multiple Access with Collision Detection).
                                </h3>
                                <Paragraph>
                                    También conocido como Acceso Múltiple por Detección de Portadora con Detección de Colisiones.
                                    Es una técnica usada en redes para mejorar la entrega de paquetes. Para entender que problema resuelve este protocolo hay que entender sus partes:
                                </Paragraph>
                                <ul className="px-5 list-disc">
                                    <li><Paragraph className="text-gray-500 dark:text-gray-400">Carrier Sense (Detección de Portadora): Los dispositivos antes de transmitir, escuchan si hay actividad en la red para asegurarse de que el medio de transmisión esté libre.</Paragraph></li>
                                    <li><Paragraph className="text-gray-500 dark:text-gray-400">Multiple Access (Acceso Múltiple): Múltiples dispositivos comparten el mismo medio de transmisión, como un cable, para transmitir y recibir datos.</Paragraph></li>
                                    <li><Paragraph className="text-gray-500 dark:text-gray-400">Collision Detection (Detección de Colisión): Si dos dispositivos intentan transmitir al mismo tiempo, se produce una colisión de datos. La detección de colisión es la capacidad de un dispositivo para identificar si una colisión ha ocurrido.</Paragraph></li>
                                </ul>
                            </div>

                            <Paragraph className="text-gray-500 dark:text-gray-400">
                                Ahora, el protocolo CSMA/CD resuelve el problema de colisiones en redes Ethernet siguiendo estos pasos:
                            </Paragraph>

                            <ol className="px-5 list-decimal">
                                <li><Paragraph className="text-gray-500 dark:text-gray-400">Carrier Sense (Detección de Portadora): Antes de transmitir, un dispositivo escucha si hay actividad en la red. Si el medio está ocupado, el dispositivo espera hasta que esté libre.</Paragraph></li>
                                <li><Paragraph className="text-gray-500 dark:text-gray-400">Transmisión: Si el medio está libre, el dispositivo comienza a transmitir sus datos.</Paragraph></li>
                                <li><Paragraph className="text-gray-500 dark:text-gray-400">Collision Detection (Detección de Colisión): Mientras el dispositivo transmite, escucha si alguien más está transmitiendo al mismo tiempo. Si detecta una colisión (dos señales transmitidas simultáneamente, lo que resulta en una mezcla de señales), el dispositivo interrumpe su transmisión.</Paragraph></li>
                                <li><Paragraph className="text-gray-500 dark:text-gray-400">Algoritmo de Espera Exponencial: Después de una colisión, los dispositivos detienen la transmisión y esperan un período de tiempo aleatorio antes de intentar transmitir nuevamente. Este tiempo de espera aleatorio reduce las posibilidades de que los dispositivos vuelvan a colisionar inmediatamente.</Paragraph></li>
                                <li><Paragraph className="text-gray-500 dark:text-gray-400">Reintentos: Después del período de espera, los dispositivos intentan transmitir nuevamente. Si detectan que el medio está libre, comienzan la transmisión. Si vuelven a detectar una colisión, repiten el proceso de espera y reintentos.</Paragraph></li>
                            </ol>
                        </>

                    </GridItem>
                </GridTwo>

            </article>

        </article>
    </div>

}