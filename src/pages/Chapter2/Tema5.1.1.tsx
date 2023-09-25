import React from "react";

 


import { Card } from 'primereact/card';


export default function Comunicacion() {

    return (
        <>

            <div className="card">
                <Card title="2.5.1 Señales de comuniación." className="md:w-20rem"  >
                    <p className="m-0">
                    Eventualmente, todas las comunicaciones desde la red humana se convierten en dígitos binarios que se transportan individualmente a través de los medios físicos.

                    </p>
                    <br />
                    <p className="m-0">
                    Si bien todos los bits que conforman una trama se presentan ante la capa física como una unidad, la transmisión de la trama a través de los medios se realiza mediante un stream de bits que se envían uno por vez. La capa Física representa cada uno de los bits de la trama como una señal. Cada señal ubicada en los medios cuenta con un plazo específico de tiempo para ocupar los medios. Esto se denomina tiempo de bit. Las señales se procesan mediante el dispositivo receptor y se vuelven a enviar para representarlas como bits.

                    </p>
                    <p>
                    En la capa física del nodo receptor, las señales se vuelven a convertir en bits. Luego se examinan los bits para los patrones de bits del comienzo y el final de la trama con el objetivo de determinar si se ha recibido una trama completa. Luego la capa Física envía todos los bits de una trama a la capa de Enlace de datos.
                    </p>
                    <br />
                    <p>
                    El envío exitoso de bits requiere de algún método de sincronización entre el transmisor y el receptor. Se deben examinar las señales que representan bits en momentos específicos durante el tiempo de bit, para determinar correctamente si la señal representa un "1" o un "0". La sincronización se logra mediante el uso de un reloj. En las LAN, cada extremo de la transmisión mantiene su propio reloj. Muchos métodos de señalización utilizan transiciones predecibles en la señal para proporcionar sincronización entre los relojes de los dispositivos receptores y transmisores.
                    </p>

                </Card>
            </div>

        </>
    );
}

