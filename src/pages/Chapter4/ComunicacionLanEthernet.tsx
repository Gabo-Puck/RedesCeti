import { Card } from "primereact/card";
import IndexAnchor from "../../components/Lesson/IndexAnchor";
import Subtitle from "../../components/Lesson/Subtitle";
import Title from "../../components/Lesson/Title";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Image } from "primereact/image";
import Paragraph from "../../components/Paragraph";

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
                <li><IndexAnchor content={index["componentes"]} /></li>
                <li><IndexAnchor content={index["protocolos"]} /></li>
                <li><IndexAnchor content={index["seguridad"]} /></li>
            </ul>
        </Card>
        <article className="mb-10">
            <Subtitle content={index["componentes"]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <div className="mb-5">
                        <h3>
                            Tarjeta de red (NIC)
                        </h3>
                        <Paragraph>Es un componente de una computadora que permite a un equipo o dispositivo acceder a una red y compartir recursos (ya sea datos o dispositivos). Por lo general cuando se decide por una tarjeta de red se tienen que evaluar los siguientes aspectos:</Paragraph>
                        <ul className="px-5 list-disc">
                            <li><Paragraph className="text-gray-500 dark:text-gray-400">Velocidad de conexión: Se suele medir en Mb/s. Es la velocidad que tiene para compartir información</Paragraph></li>
                            <li><Paragraph className="text-gray-500 dark:text-gray-400">Tipo de conector: Los tipos más usados son ISA, PCI, PCMCIA, USB, Inalambrico</Paragraph></li>
                            <li><Paragraph className="text-gray-500 dark:text-gray-400">Soporte Full-Duplex: Duplex es la capacidad de enviar y recibir datos. Con Full-Duplex se tiene la capacidad de una comunicación bidireccional al mismo tiempo (Envía y recibe al mismo tiempo)</Paragraph></li>
                            <li><Paragraph className="text-gray-500 dark:text-gray-400">Controladores de LAN: Es necesario saber si es compatible con las especificaciones del equipo donde se instalará</Paragraph></li>
                            <li><Paragraph className="text-gray-500 dark:text-gray-400">Precio</Paragraph></li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h3>
                            Cableado
                        </h3>
                        <Paragraph className="text-gray-500 dark:text-gray-400 mb-5">
                            Para conexiones ethernet se usan cables RJ45. Dentro de estos cables se distinguen varías categorías.
                            Para uso común, el distintivo más notorio es la velocidad máxima a la que transmiten datos, esto con el fin de sacar el mayor provecho a la velocidad por ejemplo de la conexión a Internet.
                            También existe la frecuencia. Este parámetro permite establecer cosas como la velocidad de transmisión y la distancia máxima de transmisión. Debido a que cables con mayor frecuencia atenúan de manera más significativa su señal, tienen una menor distancia máxima de transmisión.
                        </Paragraph>
                    </div>
                </div>
                <div className="justify-self-center" style={{
                    justifySelf: "center"
                }}>
                    <Image src="https://www.radioshack.com.mx/medias/100014629-5.jpg-515ftw?context=bWFzdGVyfHJvb3R8MTA3Mjk0fGltYWdlL2pwZWd8aGQ4L2hhYS84OTgzMTY4OTc0ODc4LmpwZ3xhZGQ5ZDhiYjdiNmRhN2M5NGY2YjRlZTdjNTcxZWVlNTRiMjAyMmRmN2FmMTU2NGE0N2Y3YjI2ZDk3YjYwN2Vm" alt="Image" />
                </div>
            </div>
            <div className="card">
                <DataTable value={categorias} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="categoria" header="Categoria"></Column>
                    <Column field="velocidad" header="Velocidad"></Column>
                    <Column field="distancia" header="Distancia"></Column>
                    <Column field="frecuencia" header="Frecuencia"></Column>
                    <Column field="uso" header="Uso"></Column>
                </DataTable>
            </div>

        </article>
        
        <article className="mb-10">
            <Subtitle content={index["seguridad"]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <div className="mb-5">
                        <h3>
                            ACLs (Listas de Control de Acceso)
                        </h3>
                        <Paragraph className="text-gray-500 dark:text-gray-400">
                            Las ACLs, o Listas de Control de Acceso, son herramientas de seguridad utilizadas en redes para controlar y filtrar el tráfico que ingresa o sale de una red. Permiten definir reglas que especifican qué tipos de tráfico están permitidos y cuáles están bloqueados. Las ACLs pueden basarse en direcciones IP, puertos, protocolos y otros atributos. Se aplican en enrutadores y dispositivos de seguridad para restringir el acceso no autorizado y garantizar una mejor gestión del tráfico en la red.
                        </Paragraph>
                    </div>
                    <div className="mb-5">
                        <h3>
                            Autenticación
                        </h3>
                        <Paragraph className="text-gray-500 dark:text-gray-400">
                            La autenticación es el proceso de verificar la identidad de un usuario, dispositivo o sistema antes de permitirles el acceso a una red o servicio. Se basa en credenciales únicas, como nombres de usuario y contraseñas, certificados digitales o biometría. La autenticación es esencial para prevenir el acceso no autorizado y asegurar que solo las personas o dispositivos adecuados puedan acceder a recursos sensibles.
                        </Paragraph>
                    </div>
                    <div className="mb-5">
                        <h3>
                            Encriptación
                        </h3>
                        <Paragraph className="text-gray-500 dark:text-gray-400">
                            La encriptación es la técnica de codificar información para que solo las personas o sistemas autorizados puedan entenderla. Se utiliza para proteger la confidencialidad y la integridad de los datos mientras se transmiten por una red. Por lo general, la información es "traducida" como se menciono anteriormente por medio de un método de cifrado, donde las personas las cuales tienen acceso a ella requieren de una llave para poder trabajar con ella.
                        </Paragraph>
                    </div>
                </div>
                <div className="justify-self-center" style={{
                    justifySelf: "center"
                }}>
                    <Image src="https://www.valencynetworks.com/images/need-of-network-security-audit.png" alt="Imagen seguridad" />
                </div>
            </div>
        </article>

    </div>

}