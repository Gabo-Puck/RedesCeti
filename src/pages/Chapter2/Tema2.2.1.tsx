import React from "react";

import { Divider } from 'primereact/divider';



import { Fieldset } from 'primereact/fieldset';


export default function TCP() {

    return (
        <>

            <div className="card">
                <Fieldset legend="Protocolo TCP.">
                    <p className="m-0">
                        El Protocolo TCP/IP o Transfer Control Protocol consiste en un acuerdo estandarizado sobre el que se realiza la transmisión de datos entre los participantes de una red informática.

                        Los programas que forman redes de datos en una red de ordenadores emplean el protocolo TCP para crear conexiones entre sí, de forma que se pueda garantizar el flujo de datos entre las partes. A través de este protocolo se asegura que los datos lleguen a su destino en el mismo orden que se transfirieron y sin errores.

                        La inmensa mayoría de comunicaciones que se realizan en internet utilizan el protocolo TCP IP, como es el caso de navegadores, programas de intercambio de ficheros, servicios FTP y un largo etcétera.

                        El origen de este protocolo se sitúa en 1973 y fue desarrollado por Robert E. Kahn y Vinton G. Cerf. Sin embargo, hasta ocho años después no se convirtió en un protocolo estandarizado gracias al documento RFC 793. Lo más sorprendente es que hoy en día sigue vigente.                    </p>
                    <br />
                    <div className="card flex justify-content-center">
                        <p>

                            <h1>Caracteristicas</h1>

                            <ul style={{ listStyle: "middle-dot", marginLeft: "50px" }} className="m-10">
                                <li style={{ fontWeight: "bold" }}>Es un protocolo que funciona mediante la conexión mutua entre cliente y servidor.</li>
                                <li style={{ fontWeight: "bold" }}>Ordena los segmentos provenientes del protocolo IP.</li>
                                <li style={{ fontWeight: "bold" }}>Monitorea el flujo de los datos y permite evitar la saturación de la red.</li>
                                <li style={{ fontWeight: "bold" }}>Entrega los datos al protocolo IP en forma de segmentos de longitud variable.</li>
                                <li style={{ fontWeight: "bold" }}>Permite circular de forma simultánea a la información proveniente de diferentes fuentes.</li>

                            </ul>
                        </p>
                        <Divider layout="vertical" />
                        <p>
                            <h1>Componentes del encabezado TCP</h1>
                            <ul style={{ listStyle: "middle-dot", marginLeft: "50px" }} className="m-10">
                                <li style={{ fontWeight: "bold" }}>Puerto de origen (16 bits): se refiere la aplicación que está en curso en el dispositivo de origen.</li>
                                <li style={{ fontWeight: "bold" }}>Puerto de destino (16 bits): relativo la aplicación que está en curso curso en el dispositivo de destino.</li>
                                <li style={{ fontWeight: "bold" }}>Número de secuencia (32 bits): son las secuencias de números que cliente y servidor se envían para que se pueda establecer la comunicación.</li>
                                <li style={{ fontWeight: "bold" }}>Número de acuse de recibo (32 bits): indica el número de secuencia del siguiente segmento que se espera recibir.</li>
                                <li style={{ fontWeight: "bold" }}>Reservado (6 bits): es un campo reservado para futuros usos. Su valor siempre es igual a cero.</li>
                                <li style={{ fontWeight: "bold" }}>Ventana (16 bits): determina la cantidad de bytes que desea recibir el receptor sin acuse de recibo.</li>
                                <li style={{ fontWeight: "bold" }}>Suma de control (24 bit): verifica la integridad del paquete a través de la comprobación de errores.</li>
                                <li style={{ fontWeight: "bold" }}>Puntero urgente (16 bits): se utiliza para enviar datos urgentes e indica la ubicación de los datos que siguen a los urgentes.</li>
                                <li style={{ fontWeight: "bold" }}>Opciones (bits variables): para definir funciones TCP que no forman parte del encabezado general.</li>

                            </ul>
                        </p>
                        <Divider layout="vertical" />
                        <p>
                            <h1>Ventajas y desventajas del protocolo de control de transmisión</h1>
                            
                            <br />
                            La principal ventaja que ha convertido al protocolo TCP y IP en un método estandarizado para la transmisión de datos en red, es que se trata de un protocolo que requiere el establecimiento de un canal seguro por ambas partes, y que garantiza el acuso de recibe de la información enviada. Por tanto, se trata de un método fiable, seguro y que asegura un flujo ordenado de los datos y a prueba de errores.

                            Como puntos mejorables, se trata de un protocolo que puede funcionar de forma demasiado lenta en algunos tipos de redes, sobre todo a causa de la necesidad de confirmar que los segmentos han sido recibidos en tiempo y forma. Por ejemplo, en el caso de las redes inalámbricas, se tiende a perder información a causa de las interferencias producidas por el canal de radio. Esta información se tiene que recuperar para poder entregar el mensaje, lo que pueda causar un retraso en la comunicación.

                        </p>
                    </div>
                </Fieldset>



            </div>

        </>
    );
}

