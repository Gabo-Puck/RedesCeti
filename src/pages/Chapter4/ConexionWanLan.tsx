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
    intro:
        "Introducción a interconexiones WAN y LAN",
    enrutamiento:
        "Enrutamiento en redes",
    estatico:
        "Enrutamiento estático",
    dinamico:
        "Enrutamiento dinámico",
}

const tabla = [
    {
        protocolo: "RIP",
        contenido:
            <>
                <Paragraph>Facilita el mantenimiento de la tabla de routing en redes más pequeñas en las cuales no está previsto que crezcan significativamente.
                    Realiza routing desde y hacia una red de rutas internas, que es una red con una sola ruta predeterminada hacia fuera y sin conocimiento de redes remotas.
                    Permite acceder a una única ruta predeterminada (la cual se utiliza para representar una ruta hacia cualquier red que no tiene una coincidencia más específica con otra ruta en la tabla de routing).</Paragraph>
                <Paragraph>Para configurar en cisco:</Paragraph>
                <Consolecode code={`Router(config)#router rip\nRouter(config-router)# network 172.16.0.0`} />
                <Paragraph>Aquí se indica que se mandarán actualizaciones a la tabla de enrutamiento de la ed 172.16.0.0</Paragraph>
            </>
    },
    {
        protocolo: "RIPv2",
        contenido:
            <>
                <Paragraph>Es una versión mejorada de RIP. Sus aspectos destacados frente a la primer versión son:</Paragraph>
                <ul className="px-5 list-disc">
                    <li><Paragraph>Soporte para VLSM</Paragraph></li>
                    <li><Paragraph>Soporte para actualizaciones con multicast</Paragraph></li>
                    <li><Paragraph>Actualizaciones de enrutamiento con autenticación con clave encriptada</Paragraph></li>
                </ul>
                <Paragraph>Para configurar en cisco es necesario primero configurar rip y luego indicar la versión:</Paragraph>
                <Consolecode code={`Router(config)#router rip\nRouter(config-router)# version 2`} />
            </>
    },
    {
        protocolo: "OSPF",
        contenido:
            <>
                <Paragraph>
                    Es un protocolo de direccionamiento de tipo enlace-estado, desarrollado para las redes IP y basado en el algoritmo de primera vía más corta (SPF)
                </Paragraph>
                <Paragraph>
                    Los direccionadores o sistemas de la misma área mantienen una base de datos de enlace-estado idéntica que describe la topología del área. Cada direccionador o sistema del área genera su propia base de datos de enlace-estado a partir de los anuncios de enlace-estado (LSA) que recibe de los demás direccionadores o sistemas de la misma área
                </Paragraph>
            </>
    },
]


export default function ConexionWanLan() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return <div>
        <Title content="4.6.1 Conexión de LAN y WAN" />
        <Card title="Contenido" className="mb-10">
            <ul className="px-5 list-disc">
                <li><IndexAnchor content={index["intro"]} /></li>
                <li><IndexAnchor content={index["enrutamiento"]} /></li>
                <li><IndexAnchor content={index["estatico"]} /></li>
                <li><IndexAnchor content={index["dinamico"]} /></li>
            </ul>
        </Card>
        <article className="mb-10">
            <div className="flex flex-wrap">
                <GridTwo align="items-center">
                    <GridItem>
                        <Subtitle content={index["intro"]} />
                        <div>
                            <Paragraph className="text-gray-500 dark:text-gray-400">
                                Retomando los conceptos LAN y WAN abarcados en
                                {" "}<Link to="../../u1/Tema1_3">Topologia de redes</Link>{" "} podemos entender que las redes WAN estan compuestas por redes LAN interconectadas entre sí. La pregunta natural sería, ¿Cómo es que se pueden interconectar distintas redes LAN en diferentes zonas geográficas?
                            </Paragraph>
                            <Paragraph>
                                Para esto se hacen uso de los diferentes protocolos y dispositivos de red ya vistos anteriormente con una configuración adecuada.
                            </Paragraph>
                        </div>
                    </GridItem>
                    <GridItemCenter>
                        <Image src="https://www.proydesa.org/portal/images/img-pyd/home-slides/2.jpg" alt="switch" />
                    </GridItemCenter>
                </GridTwo>
            </div>
        </article>
        <article className="mb-10">
            <GridTwo align="items-start">
                <GridItem>
                    <Subtitle content={index["enrutamiento"]} />
                    <Paragraph className="">
                        Primeramente hemos de abarcar el tema de <b>enrutamiento</b>.
                    </Paragraph>
                    <Paragraph className="">
                        El enrutamiento de redes es el proceso de selección de una ruta a través de una o más redes. Los principios del enrutamiento se pueden aplicar a cualquier tipo de red, desde las redes telefónicas hasta el transporte público.
                    </Paragraph>
                    <Paragraph>
                        En las redes de conmutación de paquetes, como Internet, el enrutamiento selecciona las rutas para que los paquetes del Protocolo de Internet (IP) vayan desde su origen hasta su destino.
                        En resumen, podemos entender que enrutamiento es la acción que realiza un router de enviar paquetes a una red destino.
                    </Paragraph>
                    <Paragraph>
                        Dentro del enrutamiento de redes podemos definir dos tipos: estático y dinámico. Cada uno tiene sus ventajas que se verán a continuación
                    </Paragraph>
                </GridItem>
                <GridItemCenter>
                    <Image src="https://tecno-simple.com/wp-content/uploads/2021/07/enrutamiento-de-redes.jpg" alt="Imagen hub" />
                </GridItemCenter>
            </GridTwo>
        </article>

        <article className="mb-10">
            <div className="">
                <Subtitle content={index["estatico"]} />
                <GridTwo>
                    <GridItem>
                        <Paragraph>
                            Este enrutamiento las rutas son programadas en el router por el administrador.
                            Sus principaples ventajas abarcan:
                        </Paragraph>
                        <ul className="px-5 list-disc">
                            <li><Paragraph>
                                Las rutas estáticas no se anuncian a través de la red, lo cual aumenta la seguridad.
                            </Paragraph></li>
                            <li><Paragraph>
                                Las rutas estáticas consumen menos ancho de banda que los protocolos de routing dinámico.
                            </Paragraph></li>
                            <li><Paragraph>
                                No se utiliza ningún ciclo de CPU para calcular y comunicar las rutas.
                            </Paragraph></li>
                            <li><Paragraph>
                                La ruta que usa una ruta estática para enviar datos es conocida.
                            </Paragraph></li>
                        </ul>
                        <Paragraph>
                            Para crear enrutamiento en routers cisco se utiliza la siguiente sentencia
                            <Consolecode code="ip route [red destino] [máscara] [próximo salto] [distancia administrativa]" />
                        </Paragraph>
                        <Paragraph>
                            El comando  se utiliza para configurar una entrada en la tabla de enrutamiento IP del router. La tabla de enrutamiento se utiliza para determinar cómo se deben enviar los paquetes de datos a sus destinos finales en una red.
                        </Paragraph>
                    </GridItem>
                    <GridItemCenter>
                        <Image src="https://parzibyte.me/blog/wp-content/uploads/2017/10/Ejercicio-1-Router-3-Enrutamiento.png" />

                    </GridItemCenter>
                </GridTwo>
                <Paragraph>
                    <ul className="px-5 list-disc">
                        <li><Paragraph>
                            Red destino: Es la red a donde se quiere redirigir un paquete
                        </Paragraph></li>
                        <li><Paragraph>
                            Máscara: Esto especifica la máscara de subred que se aplica a la red de destino. La máscara de subred determina cuántos bits de la dirección IP son parte de la red y cuántos son parte del host.
                        </Paragraph></li>
                        <li><Paragraph>
                            Próximo salto: Esto indica la próxima dirección IP a la que se enviarán los paquetes destinados a la red de destino. Puede ser una dirección IP específica o una interfaz de salida del router.
                        </Paragraph></li>
                        <li><Paragraph>
                            Distancia administrativa: Este parámetro es opcional y se utiliza para asignar una distancia administrativa personalizada a la ruta. La distancia administrativa es un valor que indica la confiabilidad de la ruta. Si no se especifica, se utiliza un valor predeterminado.
                        </Paragraph></li>
                        <li><Paragraph>
                            También es posible indicar el puerto físico donde tendría que redirigrse los paquetes, sin embargo es un parámetro opcional
                        </Paragraph></li>
                    </ul>
                    <Paragraph>
                    </Paragraph>
                </Paragraph>
            </div>
        </article>
        <article className="mb-10">
            <div className="">
                <Subtitle content={index["dinamico"]} />
                <Paragraph>
                    Ahora, este tipo de enrutamiento descubre las redes remotas automáticamente mediante un protocolo de routing dinámico.
                    Algunos de estos protocolos son:
                </Paragraph>
                <DataTable value={tabla} tableStyle={{ minWidth: '60rem' }}>
                    <Column field="protocolo" header="Protocolo"></Column>
                    <Column field="contenido" header="Definicion"></Column>
                </DataTable>
                <Subtitle content={"Protocolos de routing"} />
                <Paragraph>
                    Un protocolo de routing es un conjunto de procesos, algoritmos y mensajes que se usan para intercambiar información de routing y completar la tabla de routing con la elección de los mejores caminos que realiza el protocolo.
                </Paragraph>
                <GridTwo align="items-center">
                    <GridItem>

                        <Paragraph>
                            Sus ventajas y usos son:
                        </Paragraph>
                        <ul className="px-5 list-disc">
                            <li><Paragraph>
                                Descubrir redes remotas
                            </Paragraph></li>
                            <li><Paragraph>
                                Mantener la información de routing actualizada, por lo tanto facilita su mantenimiento
                            </Paragraph></li>
                            <li><Paragraph>
                                Poder encontrar un mejor camino nuevo si la ruta actual deja de estar disponible
                            </Paragraph></li>
                            <li><Paragraph>
                                Escoger el mejor camino hacia las redes de destino
                            </Paragraph></li>
                            <li><Paragraph>
                                Facilita el mantenimiento de la tabla de routing en redes más pequeñas en las cuales no está previsto que crezcan significativamente.
                            </Paragraph></li>
                            <li><Paragraph>
                                Permite acceder a una única ruta predeterminada (la cual se utiliza para representar una ruta hacia cualquier red que no tiene una coincidencia más específica con otra ruta en la tabla de routing).
                            </Paragraph></li>
                            <li><Paragraph>
                                Realiza routing desde y hacia una red de rutas internas, que es una red con una sola ruta predeterminada hacia fuera y sin conocimiento de redes remotas.

                            </Paragraph></li>
                        </ul>
                    </GridItem>
                    <GridItemCenter>
                        <Image src="https://ccnadesdecero.es/wp-content/uploads/2017/12/protocolos-de-routing-din%C3%A1mico.png" />

                    </GridItemCenter>
                </GridTwo>
            </div>
        </article>

    </div>

}