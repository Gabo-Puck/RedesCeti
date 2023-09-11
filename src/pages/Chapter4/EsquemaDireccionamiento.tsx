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
import { Link } from "react-router-dom";

const index = {
    subredes:
        "Subredes y máscaras de subred",
    tablas:
        "Tablas de enrutamiento",
    dhcp:
        "Direccionamiento DHCP",
    nat:
        "NAT",
}
const tabla = [
    {
        componente: "Red de destino",
        contenido:
            <>
                <Paragraph>Esto corresponde a la red de destino donde deberá ir el paquete de datos.</Paragraph>
            </>
    },
    {
        componente: "Mascara de subred",
        contenido:
            <>
                <Paragraph>Es la que se utiliza para definir la máscara de subred de la red a la que debemos ir.</Paragraph>
            </>
    },
    {
        componente: "Siguiente salto",
        contenido:
            <>
                <Paragraph>
                    En inglés a esto se lo conoce como next hop. Es la dirección de IP de la interfaz de red por donde viajará el paquete de datos, para seguir con su camino hasta el final.
                </Paragraph>
            </>
    },
    {
        componente: "Interfaz de salida",
        contenido:
            <>
                <Paragraph>
                    Es la interfaz de red por donde deben salir los paquetes, para posteriormente llegar finalmente al destino.
                </Paragraph>
            </>
    },
    {
        componente: "Métricas",
        contenido:
            <>
                <Paragraph>
                    Tienen varias aplicaciones. Una de ellas consiste en indicar el número mínimo de saltos hasta la red de destino, o simplemente el «coste» para llegar hasta la red de destino, y sirve para dar prioridad.
                </Paragraph>
            </>
    },
]
const tabla2 = [
    {
        componente: "Estática",
        contenido:
            <>
                <Paragraph>Es una técnica de traducción de direcciones de red que asigna una dirección IP pública fija a un dispositivo específico en la red privada. Cada vez que ese dispositivo se comunica con Internet, siempre utiliza la misma dirección IP pública.</Paragraph>
            </>,
        uso: <>
            <Paragraph>Se utiliza cuando se necesita permitir que un servidor interno, como un servidor web o de correo electrónico, sea accesible desde Internet utilizando una dirección IP pública fija. Es comúnmente utilizado para alojar servicios en servidores internos.</Paragraph>
        </>
    },
    {
        componente: "Dinámica",
        contenido:
            <>
                <Paragraph>Asigna direcciones IP públicas de un grupo de direcciones disponibles a dispositivos internos de forma dinámica cuando se inicia una conexión. Cada dispositivo interno obtiene una dirección IP pública diferente de la reserva, pero solo mientras esté activa la conexión.</Paragraph>
            </>, uso: <>
                <Paragraph>
                    Es útil cuando se tiene un conjunto limitado de direcciones IP públicas, pero se desea permitir que múltiples dispositivos internos accedan a Internet al mismo tiempo. Las direcciones IP públicas se liberan una vez que la conexión se cierra, lo que permite su reutilización.
                </Paragraph></>
    },
    {
        componente: "PAT o NAT Overload",
        contenido:
            <>
                <Paragraph>
                    Es una técnica de traducción de direcciones de red que permite que múltiples dispositivos internos compartan una única dirección IP pública. La diferencia principal es que PAT utiliza números de puerto únicos para distinguir entre las conexiones de dispositivos internos.
                </Paragraph>
            </>,
        uso: <>
            <Paragraph>
                Se utiliza en situaciones donde se desea que varios dispositivos internos compartan una sola dirección IP pública. Cada conexión interna se diferencia por su número de puerto único, lo que permite que los paquetes de datos se enrutin a los dispositivos internos correctos en función de esos números de puerto.
            </Paragraph></>
    },
]
export default function EsquemaDireccionamiento() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return <div>
        <Title content="4.7 Esquema de direccionamiento" />
        <Card title="Contenido" className="mb-10">
            <ul className="px-5 list-disc">
                <li><IndexAnchor content={index["subredes"]} /></li>
                <li><IndexAnchor content={index["tablas"]} /></li>
                <li><IndexAnchor content={index["dhcp"]} /></li>
                <li><IndexAnchor content={index["nat"]} /></li>
            </ul>
        </Card>
        <article className="mb-10">
            <div className="flex flex-wrap">
                <GridTwo align="items-center">
                    <GridItem>
                        <Subtitle content={index["subredes"]} />
                        <div>
                            <Paragraph className="text-gray-500 dark:text-gray-400">
                                La dirección IP es la dirección que te asigna tu ISP, empresas que dan acceso a Internet. Sin embargo, la IP no es suficiente para identificarte en la red. Es necesario otro componente, llamado submáscara de red ya explicado anteriormente en {" "}<Link to="../../u1/Tema1_5">Direccionamiento de red</Link>{" "}
                            </Paragraph>
                            <Paragraph className="text-gray-500 dark:text-gray-400">
                                Como se mencionó en ese tema, ese componente permite ayudar a distinguir las direcciones IP que son muy parecidas. Si tienes varios dispositivos con una IP en la que lo único que cambia es el último número, la máscara servirá para saber cuáles son los números que varían dentro de las IPs de la red.
                            </Paragraph>
                            <Paragraph>
                                Lo que hace la máscara de subred es identificar la parte fija de una ip (asignando el valor 255 a la parte que no varía). Esta parte que no varía, representan la dirección de red mientras que la parte que varía permite identificar al dispositivo dentro de esa red
                            </Paragraph>
                            <Paragraph>
                                Esta submascara, tiene varios beneficios uno de ellos permite hacer un uso más eficiente de las direcciones IP a través de algo llamado <b>subredes</b>
                            </Paragraph>
                            <Paragraph>
                                Estas subredes permiten ser administradas como pequeñas partes de una red, que pueden estar inclusive dispuestas en diferentes zonas geográficas.
                            </Paragraph>
                        </div>
                    </GridItem>
                    <GridItemCenter>
                        <Image src="https://jomahd.files.wordpress.com/2017/12/b.png" alt="switch" />
                    </GridItemCenter>
                </GridTwo>
            </div>
        </article>
        <article className="mb-10">
            <Subtitle content={index["dhcp"]} />
            <GridTwo align="items-start">
                <GridItem>
                    <Paragraph>
                        En el pasado, era muy común asignar direcciones de manera manual a cada equipo. Hoy en día se cuentan con servicios que permiten asignar direcciones ip de manera automática simplificando el trabajo de un administrador de red. Este servicio es llamado DHCP
                    </Paragraph>
                    <Paragraph>
                        La asignación de direcciones con DHCP se basa en un modelo cliente-servidor: el terminal que quiere conectarse solicita la configuración IP a un servidor DHCP que, por su parte, recurre a una base de datos que contiene los parámetros de red asignables. Este servidor, componente de cualquier router moderno, puede asignar los siguientes parámetros al cliente con ayuda de la información de su base de datos:
                        <ul className="px-5 list-disc">
                            <li>
                                Dirección IP única
                            </li>
                            <li>
                                Máscara de subred
                            </li>
                            <li>
                                Puerta de enlace estándar
                            </li>
                            <li>
                                Servidores DNS
                            </li>
                            <li>
                                Configuración proxy por WPAD (Web Proxy Auto-Discovery Protocol)
                            </li>
                        </ul>
                        Como se puede apreciar, provee la configuración necesaria para la navegación de una red
                    </Paragraph>
                </GridItem>
                <GridItemCenter>
                    <Image src="https://www.manageengine.com/products/oputils/images/dhcp-process.jpg" />
                </GridItemCenter>
            </GridTwo>
        </article>
        <article className="mb-10">
            <Subtitle content={index["tablas"]} />
            <div className="" >
                <Paragraph className="">
                    En el tema anterior, también se abarco el uso de la tabla de enrutamiento para interconectar redes LAN.
                </Paragraph>
                <Paragraph className="">
                    Este componente es fundamental para el direcciomiento de redes por lo que es importante conocer sus componentes.
                </Paragraph>
                <DataTable value={tabla} tableStyle={{ minWidth: '60rem' }}>
                    <Column field="componente" header="Componente"></Column>
                    <Column field="contenido" header="Definicion"></Column>
                </DataTable>
                {/* <Subtitle content={"La magia de arp"} /> */}
                {/* <GridTwo align="items-start" style={{
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
                        </GridTwo> */}
            </div>



        </article>
        <article className="mb-10">
            <Subtitle content={index["nat"]} />
            <Paragraph>
                NAT, por sus siglas en inglés es Network Address Translator, que es en escencia un traductor de direcciones IP. Es importante no confundir este concepto
                con DNS, pues DNS traduce direcciones IP a nombres de dominio, mientras que NAT traduce una IP a otra IP
            </Paragraph>
            <Paragraph>
                Cumple una función primordial en las conexiones de red pues hace que sean posibles en primer lugar. Lo que hace es asignar a una red una direccion IP pública,
                y todo el tráfico dirigido a esa IP, es traducido y redireccionado a la IP correspondiente.
            </Paragraph>
            <Paragraph>
                En resumen, el NAT ayuda a controlar que las direcciones IPv4 se agoten, administrando direcciones IPv4 locales o privadas de todos los equipos conectados a la red. Entonces, si hay tres ordenadores, dos móviles, una impresora y cualquier otro equipo, cada uno tiene una dirección IP privada, lo que haría un total de siete direcciones. NAT los trata individualmente dentro de la red, pero para Internet, es solo una dirección IP, como si fuera un dispositivo único.
            </Paragraph>
            <DataTable value={tabla2} tableStyle={{ minWidth: '60rem' }}>
                <Column field="componente" header="Componente"></Column>
                <Column field="contenido" header="Definicion"></Column>
                <Column field="uso" header="Uso"></Column>
            </DataTable>
            <div className="flex justify-center">
                <Image src="https://www.9tut.com/images/ccna_self_study/NAT/PAT_Basic.jpg" />
            </div>
        </article>

    </div>

}