import React from "react";


import { Card } from 'primereact/card';


export default function Acceso() {

    return (
        <>

            <div className="card">
                <Card title="2.4.1 Acceso al medio " className="md:w-20rem"  >
                    <p className="m-0">
                        El control de acceso al medio en informática y telecomunicaciones, es el conjunto de mecanismos y protocolos por los que varios "interlocutores" (dispositivos en una red, como ordenadores, teléfonos móviles, etc.) se ponen de acuerdo para compartir un medio de transmisión común (por lo general, un cable eléctrico u óptico, o en comunicaciones inalámbricas el rango de frecuencias asignado a su sistema). En ocasiones se habla también de múltiplex ación para referirse a un concepto similar.</p>

                    <br />
                    <p>Uno de los problemas a resolver en un sistema de comunicaciones es cómo repartir entre varios usuarios el uso de un único canal de comunicación o medio de transmisión, para que puedan gestionarse varias comunicaciones al mismo tiempo. Sin un método de organización, aparecerían interferencias que podrían bien resultar molestas, o bien directamente impedir la comunicación. Este concepto se denomina multiplexado o control de acceso al medio, según el contexto. </p>

                    <br />
                    <p>Más específicamente, en redes informáticas, las siglas inglesas MAC (de Medium Access Control, la traducción inglesa del término) se emplean en la familia de estándares IEEE 802 para definir la subcapa de control de acceso al medio.</p>

                    <br />
                    <p>
                        La subcapa MAC se sitúa en la parte inferior de la capa de enlace de datos (Capa 2 del Modelo de Referencia OSI). La implementación exacta de esta subcapa puede variar dependiendo de los requerimientos de la capa física (por ejemplo Ethernet, Token Ring, WLAN).

                        Algunas de las funciones de la subcapa MAC incluyen:
                    </p>
                    <br />

                    <ul style={{ listStyle: "middle-dot", marginLeft: "50px" }} className="m-10">
                        <li style={{ fontWeight: "bold" }}>Controlar el acceso al medio físico de transmisión por parte de los dispositivos que comparten el mismo canal de comunicación.</li>
                        <li style={{ fontWeight: "bold" }}>Agregar la dirección MAC del nodo fuente y del nodo destino en cada una de las tramas que se transmiten.</li>
                        <li style={{ fontWeight: "bold" }}>Al transmitir en origen debe delimitar las tramas agregando bits de bandera (flags) para que el receptor pueda reconocer el inicio y fin de cada trama.</li>
                        <li style={{ fontWeight: "bold" }}>Entrega los datos al protocolo IP en forma de segmentos de longitud variable.</li>
                        <li style={{ fontWeight: "bold" }}>Permite circular de forma simultánea a la información proveniente de diferentes fuentes.</li>

                    </ul>

                </Card>
            </div>

        </>
    );
}

