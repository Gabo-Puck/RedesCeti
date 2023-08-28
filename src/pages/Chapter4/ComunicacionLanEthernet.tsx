import { Card } from "primereact/card";
import IndexAnchor from "../../components/Lesson/IndexAnchor";
import Subtitle from "../../components/Lesson/Subtitle";
import Title from "../../components/Lesson/Title";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const index = {
    intro:
        "Introducción a Ethernet y LAN",

    componentes:
        "Componentes de una Red Ethernet",

    protocolos:
        "Protocolos de comunicación en Ethernet",

    seguridad:
        "Seguridad y Administración en Redes Ethernet",
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
export default function ComunicacionLanEthernet() {
    return <div>
        <Title content="4.1 Comunicación a través de la LAN con Ethernet" />
        <Card title="Contenido" className="mb-10">
            <ul className="px-5 list-disc">
                <li><IndexAnchor content={index["intro"]} /></li>
                <li><IndexAnchor content={index["componentes"]} /></li>
                <li><IndexAnchor content={index["protocolos"]} /></li>
                <li><IndexAnchor content={index["seguridad"]} /></li>
            </ul>
        </Card>
        <article className="mb-10">
            <Subtitle content={index["intro"]} />
            <p className="text-gray-500 dark:text-gray-400">Ethernet es una tecnología que permite que los dispositivos de redes que estén conectados entre sí puedan comunicarse y transmitir datos.</p>
            <p className="text-gray-500 dark:text-gray-400">LAN por su parte, como ya se vio es un conjunto de computadoras en un área pequeña con una conexión centralizada a internet</p>
        </article>
        <article className="mb-10">
            <Subtitle content={index["componentes"]} />
            <div className="mb-5">
                <h3>
                    Tarjeta de red (NIC)
                </h3>
                <p>Es un componente de una computadora que permite a un equipo o dispositivo acceder a una red y compartir recursos (ya sea datos o dispositivos). Por lo general cuando se decide por una tarjeta de red se tienen que evaluar los siguientes aspectos:</p>
                <ul className="px-5 list-disc">
                    <li><p className="text-gray-500 dark:text-gray-400">Velocidad de conexión: Se suele medir en Mb/s. Es la velocidad que tiene para compartir información</p></li>
                    <li><p className="text-gray-500 dark:text-gray-400">Tipo de conector: Los tipos más usados son ISA, PCI, PCMCIA, USB, Inalambrico</p></li>
                    <li><p className="text-gray-500 dark:text-gray-400">Soporte Full-Duplex: Duplex es la capacidad de enviar y recibir datos. Con Full-Duplex se tiene la capacidad de una comunicación bidireccional al mismo tiempo (Envía y recibe al mismo tiempo)</p></li>
                    <li><p className="text-gray-500 dark:text-gray-400">Controladores de LAN: Es necesario saber si es compatible con las especificaciones del equipo donde se instalará</p></li>
                    <li><p className="text-gray-500 dark:text-gray-400">Precio</p></li>
                </ul>
            </div>
            <div className="mb-5">
                <h3>
                    Cableado (NIC)
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-5">
                    Para conexiones ethernet se usan cables RJ45. Dentro de estos cables se distinguen varías categorías.
                    Para uso común, el distintivo más notorio es la velocidad máxima a la que transmiten datos, esto con el fin de sacar el mayor provecho a la velocidad por ejemplo de la conexión a Internet.
                    También existe la frecuencia. Este parámetro permite establecer cosas como la velocidad de transmisión y la distancia máxima de transmisión. Debido a que cables con mayor frecuencia atenúan de manera más significativa su señal, tienen una menor distancia máxima de transmisión.
                </p>
                <div className="card">
                    <DataTable value={categorias} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="categoria" header="Categoria"></Column>
                        <Column field="velocidad" header="Velocidad"></Column>
                        <Column field="distancia" header="Distancia"></Column>
                        <Column field="frecuencia" header="Frecuencia"></Column>
                        <Column field="uso" header="Uso"></Column>
                    </DataTable>
                </div>
            </div>

        </article>
        <article className="mb-10">
            <Subtitle content={index["protocolos"]} />
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
        <article className="mb-10">
            <Subtitle content={index["seguridad"]} />
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