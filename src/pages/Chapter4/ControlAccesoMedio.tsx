import { Card } from "primereact/card";
import IndexAnchor from "../../components/Lesson/IndexAnchor";
import Subtitle from "../../components/Lesson/Subtitle";
import Title from "../../components/Lesson/Title";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react";
import { Button } from "primereact/button";
import { TabView, TabPanel } from 'primereact/tabview';

const index = {
    intro:
        "Introducción a Switches y Hubs",

    switches:
        "Switches",

    hubs:
        "Hubs",

    tiposCast:
        "Broadcast, Unicast, Multicast",
}
const categorias = [
    {
        categoria: '5e',
        velocidad: "1Gbps",
        distancia: '100 metros',
        frecuencia: '100MHz',
        uso: 'Oficinas y hogares para redes de tamaño mediano con necesidades estándar de ancho de banda',
    },
    {
        categoria: '6',
        velocidad: '1 Gbps a 10 Gbps',
        distancia: '55 metros: 10Gbps | 100 metros: 1Gbps',
        frecuencia: '250MHz',
        uso: 'Aplicaciones de alta velocidad en entornos comerciales y residenciales, como transmisión de video y datos intensivos.',
    },
    {
        categoria: '6a',
        velocidad: '10 Gbps a 100 Gbps',
        distancia: 'Hasta 100 metros',
        frecuencia: '500MHz',
        uso: 'Redes empresariales y centros de datos que requieren alto rendimiento y ancho de banda',
    },
    {
        categoria: '7',
        velocidad: '10 Gbps a 100 Gbps',
        distancia: 'Hasta 100 metros',
        frecuencia: '600 MHz',
        uso: 'Redes industriales y aplicaciones especializadas que demandan protección adicional contra interferencias',
    },
    {
        categoria: '8',
        velocidad: '25 Gbps a 40 Gbps.',
        distancia: 'Hasta 30 metros',
        frecuencia: ' 1GHz',
        uso: 'Centros de datos y aplicaciones de alto rendimiento que necesitan velocidades excepcionales a distancias cortas.',
    },
    {
        categoria: '8.1',
        velocidad: '25 Gbps a 40 Gbps',
        distancia: 'Hasta 30 metros',
        frecuencia: '2GHz',
        uso: 'Similar a Cat 8, diseñado para coexistir con cables de fibra en el mismo sistema.',
    },
]
export default function ControlAccesoMedio() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return <div>
        <Title content="4.2 Control de acceso al medio" />
        <Card title="Contenido" className="mb-10">
            <ul className="px-5 list-disc">
                <li><IndexAnchor content={index["intro"]} /></li>
                <li><IndexAnchor content={index["switches"]} /></li>
                <li><IndexAnchor content={index["hubs"]} /></li>
                <li><IndexAnchor content={index["tiposCast"]} /></li>
            </ul>
        </Card>
        <article className="mb-10">
            <Subtitle content={index["intro"]} />
            <p className="text-gray-500 dark:text-gray-400">Dispositivos como los switches y los hubs son fundamentales para establecer y gestionar una conectividad eficiente y confiable. Estos componentes, aunque a menudo pasan desapercibidos, desempeñan un papel esencial en la estructura y el funcionamiento de las redes modernas. Es por eso</p>
        </article>
        <article className="mb-10">
            <Subtitle content={index["switches"]} />
            <div className="card">
                <div className="flex flex-wrap gap-2 mb-3">
                    <Button onClick={() => setActiveIndex(0)} className="p-button-text" label="Activate 1st" />
                    <Button onClick={() => setActiveIndex(1)} className="p-button-text" label="Activate 2nd" />

                </div>
                <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                    <TabPanel header="Switch">
                        <article className="mb-10">
                            <Subtitle content={index["hubs"]} />
                            <div className="mb-5">
                                <h3>
                                    Protocolo CSMA/CD (Carrier Sense Multiple Access with Collision Detection).
                                </h3>
                                <p>
                                    También conocido como Acceso Múltiple por Detección de Portadora con Detección de Colisiones.
                                    Es una técnica usada en redes para mejorar la entrega de paquetes. Para entender que problema resuelve este protocolo hay que entender sus partes:
                                </p>
                                <ul className="px-5 list-disc">
                                    <li><p className="text-gray-500 dark:text-gray-400">Carrier Sense (Detección de Portadora): Los dispositivos antes de transmitir, escuchan si hay actividad en la red para asegurarse de que el medio de transmisión esté libre.</p></li>
                                    <li><p className="text-gray-500 dark:text-gray-400">Multiple Access (Acceso Múltiple): Múltiples dispositivos comparten el mismo medio de transmisión, como un cable, para transmitir y recibir datos.</p></li>
                                    <li><p className="text-gray-500 dark:text-gray-400">Collision Detection (Detección de Colisión): Si dos dispositivos intentan transmitir al mismo tiempo, se produce una colisión de datos. La detección de colisión es la capacidad de un dispositivo para identificar si una colisión ha ocurrido.</p></li>
                                </ul>
                            </div>

                            <p className="text-gray-500 dark:text-gray-400">
                                Ahora, el protocolo CSMA/CD resuelve el problema de colisiones en redes Ethernet siguiendo estos pasos:
                            </p>

                            <ol className="px-5 list-decimal">
                                <li><p className="text-gray-500 dark:text-gray-400">Carrier Sense (Detección de Portadora): Antes de transmitir, un dispositivo escucha si hay actividad en la red. Si el medio está ocupado, el dispositivo espera hasta que esté libre.</p></li>
                                <li><p className="text-gray-500 dark:text-gray-400">Transmisión: Si el medio está libre, el dispositivo comienza a transmitir sus datos.</p></li>
                                <li><p className="text-gray-500 dark:text-gray-400">Collision Detection (Detección de Colisión): Mientras el dispositivo transmite, escucha si alguien más está transmitiendo al mismo tiempo. Si detecta una colisión (dos señales transmitidas simultáneamente, lo que resulta en una mezcla de señales), el dispositivo interrumpe su transmisión.</p></li>
                                <li><p className="text-gray-500 dark:text-gray-400">Algoritmo de Espera Exponencial: Después de una colisión, los dispositivos detienen la transmisión y esperan un período de tiempo aleatorio antes de intentar transmitir nuevamente. Este tiempo de espera aleatorio reduce las posibilidades de que los dispositivos vuelvan a colisionar inmediatamente.</p></li>
                                <li><p className="text-gray-500 dark:text-gray-400">Reintentos: Después del período de espera, los dispositivos intentan transmitir nuevamente. Si detectan que el medio está libre, comienzan la transmisión. Si vuelven a detectar una colisión, repiten el proceso de espera y reintentos.</p></li>
                            </ol>

                        </article>
                    </TabPanel>
                    <TabPanel header="Hub">
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                </TabView>
            </div>

        </article>

        <article className="mb-10">
            <Subtitle content={index["tiposCast"]} />
            <div className="mb-5">
                <h3>
                    ACLs (Listas de Control de Acceso)
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Las ACLs, o Listas de Control de Acceso, son herramientas de seguridad utilizadas en redes para controlar y filtrar el tráfico que ingresa o sale de una red. Permiten definir reglas que especifican qué tipos de tráfico están permitidos y cuáles están bloqueados. Las ACLs pueden basarse en direcciones IP, puertos, protocolos y otros atributos. Se aplican en enrutadores y dispositivos de seguridad para restringir el acceso no autorizado y garantizar una mejor gestión del tráfico en la red.
                </p>
            </div>
            <div className="mb-5">
                <h3>
                    Autenticación
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                    La autenticación es el proceso de verificar la identidad de un usuario, dispositivo o sistema antes de permitirles el acceso a una red o servicio. Se basa en credenciales únicas, como nombres de usuario y contraseñas, certificados digitales o biometría. La autenticación es esencial para prevenir el acceso no autorizado y asegurar que solo las personas o dispositivos adecuados puedan acceder a recursos sensibles.
                </p>
            </div>
            <div className="mb-5">
                <h3>
                    Encriptación
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                    La encriptación es la técnica de codificar información para que solo las personas o sistemas autorizados puedan entenderla. Se utiliza para proteger la confidencialidad y la integridad de los datos mientras se transmiten por una red. Por lo general, la información es "traducida" como se menciono anteriormente por medio de un método de cifrado, donde las personas las cuales tienen acceso a ella requieren de una llave para poder trabajar con ella.
                </p>
            </div>
        </article>

    </div>

}