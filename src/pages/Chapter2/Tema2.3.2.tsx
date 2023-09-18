import React from "react";


import { Image } from 'primereact/image';

import { TabView, TabPanel } from 'primereact/tabview';



import { Card } from 'primereact/card';


export default function Direccionamiento() {

    return (
        <>

            <div className="card">
                <Card title="2.3.2 Direccionamiento IPV4." className="md:w-20rem"  >
                    <p className="m-0">
                        Las direcciones IPv4 públicas constituyen el espacio de direcciones de Internet. Estas son distribuidas para ser globalmente únicas de acuerdo a los objetivos que se describirán más adelante en este documento. El principal propósito de este espacio de direcciones es permitir la comunicación usando IPv4 sobre Internet.
                    </p>
                    <br />
                    <p className="m-0">
                        Algunos rangos de direcciones IPv4 han sido reservados para la operación de redes privadas. Cualquier organización puede usar estas direcciones IPv4 en sus redes privadas sin la necesidad de solicitarlo a algún Registro de Internet. La principal condición establecida para el uso de direcciones IPv4 privadas es que los dispositivos que usen estas direcciones IPv4 no necesiten ser alcanzados desde Internet.
                        <br />
                        IPv4 admite tres tipos diferentes de modos de direccionamiento.:
                    </p>
                    <br />

                    <TabView>
                        <TabPanel header="Direccionamiento">
                            <div className="card flex justify-content-center">
                                <Image src="https://www.tutorialspoint.com/es/ipv4/images/unicast_addressing.jpg" alt="Image" width="250" />
                            </div>
                            <p className="m-0">
                                De este modo, los datos se envían a un solo host destino. El campo de la Dirección de destino contiene 32 bits dirección IP del host de destino. En este caso, el cliente envía los datos al servidor de destino. </p>
                        </TabPanel>
                        <TabPanel header="Difusión Modo de direccionamiento">
                            <div className="card flex justify-content-center">
                                <Image src="https://www.tutorialspoint.com/es/ipv4/images/broadcast_addressing.jpg" alt="Image" width="250" />
                            </div>
                            <p className="m-0">
                                En este modo, el paquete se dirige a todos los hosts en un segmento de red. El campo de la Dirección de destino contiene una dirección de broadcast, es decir 255.255.255.255. Cuando un host ve este paquete en la red, que está ligado a proceso. Aquí el cliente envía un paquete, que es entretenido en todos los servidores.
                            </p>
                        </TabPanel>
                        <TabPanel header="Modo de direccionamiento Multicast">
                            <div className="card flex justify-content-center">
                                <Image src="https://www.tutorialspoint.com/es/ipv4/images/multicast_addressing.jpg" alt="Image" width="250" />
                            </div>
                            <p className="m-0">
                                Este modo es una mezcla de los dos modos anteriores, es decir, el paquete enviado no es destinado a un único host ni todos los hosts en el segmento. En este paquete, la Dirección de destino contiene una dirección especial que comienza con 224.x.x.x y puede ser entretenido por más de un host.
                            </p>
                            <br />
                            <p>
                                Aquí un servidor envía los paquetes que son agasajados por más de un servidor. Cada red tiene una dirección IP reservada para el número de red que representa la red y una dirección IP reservada para la direcci n de broadcast, que representa a todos los hosts de la red.
                            </p>
                        </TabPanel>
                    </TabView>

                    <b>
                        <h1>Esquema de direccionamiento Jerárquico</h1>
                    </b>
                    <p>IPv4 utiliza esquema de direccionamiento jerárquico. Una dirección IP, que es de 32 bits de longitud, está dividido en dos o tres partes como se muestra:
                        Direccionamiento IP</p>
                    <div className="card flex justify-content-center">
                        <Image src="https://www.tutorialspoint.com/es/ipv4/images/ip_addressing.jpg" alt="Image" preview width="250" />
                    </div>
                    <p>Una sola dirección IP puede contener información acerca de la red y sus sub-red y en última instancia el host. Este esquema permite que las direcciones IP a ser jerárquico donde una red puede tener muchos sub-redes que a su vez puede tener muchos hosts.</p>

                    <br />

                    <b>
                        <h1>Máscara de Subred</h1>
                        <br />

                    </b>
                    <p>La direcci n IP de 32 bits contiene información acerca de los host y la red. Es muy necesario distinguir ambos. Para ello, utilizan los routers Máscara de subred, que es tan larga como el tamaño de la red en la dirección IP. Máscara de subred también se 32 bits de largo. Si la dirección IP en binario es and con su máscara de subred, el resultado da la dirección de la red. Por ejemplo, digamos que la dirección IP es 192.168.1.152 y la máscara de subred es 255.255.255.0, a continuación:</p>
                    <div className="card flex justify-content-center">
                        <Image src="https://www.tutorialspoint.com/es/ipv4/images/ip_subnet_mask.jpg" alt="Image" preview width="250" />
                    </div>
                    <p>Esta manera, la máscara de subred ayuda a extraer el ID de red y el Host de una dirección IP. Puede ser identificado ahora que 192.168.1.0 es el número de red y 192.168.1.152 es el host de la red.</p>
                    <br />


                </Card>
            </div>

        </>
    );
}

