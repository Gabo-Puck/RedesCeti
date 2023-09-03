import React from "react";




import { Fieldset } from 'primereact/fieldset';

import { Image } from 'primereact/image';


export default function Administracion() {

    return (
        <>

            <div className="card">
                <Fieldset legend="Administración de sesiones TCP y protocolo UDP">
                    <p className="m-0">
                        Cuando los servicios envían datos mediante el TCP, los segmentos pueden llegar a su destino en desorden. Para que el receptor comprenda el mensaje original, los datos en estos segmentos se reensamblan en el orden original. Para lograr esto, se asignan números de secuencia en el encabezado de cada paquete.
                    </p>


                    <br />
                    <p>
                        Durante la configuración de la sesión, se establece un número de secuencia inicial (ISN). Este número de secuencia inicial representa el valor de inicio para los bytes de esta sesión que se transmitirán a la aplicación receptora. A medida que se transmiten los datos durante la sesión, el número de secuencia se incrementa en el número de bytes que se han transmitido. Este rastreo de bytes de datos permite que cada segmento se identifique y se envíe acuse de recibo de manera exclusiva. Se pueden identificar segmentos perdidos.

                        Los números de secuencia de segmento permiten la confiabilidad indicando cómo reensamblar y reordenar los segmentos recibidos, como se muestra en la figura.
                    </p>
                    <br />
                    <div className="card flex justify-content-center">
                        <Image src="http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro35/segmentos.png" alt="Image" preview width="650" />
                    </div>

                    <br />
                    <p>
                        Una de las funciones del TCP es asegurar que cada segmento llegue a su destino. Los servicios TCP en el host de destino envían a la aplicación de origen un acuse de recibo de los datos recibidos.

                        El número de secuencia y el número de acuse de recibo del encabezado del segmento se utilizan para confirmar la recepción de los bytes de datos contenidos en los segmentos. El número de secuencia es el número relativo de bytes que ha sido transmitido en esta sesión más 1 (que es el número del primer byte de datos en el segmento actual). TCP utiliza el número de acuse de recibo en segmentos que se vuelven a enviar al origen para indicar el próximo byte de esta sesión que espera el receptor. Esto se llama acuse de recibo de expectativa.

                        Se le informa al origen que el destino ha recibido todos los bytes de este stream de datos, pero sin incluir el byte que se especifica por el número de acuse de recibo. Se espera que el host emisor envíe un segmento que utiliza un número de secuencia que es igual al número de acuse de recibo.
                    </p>

                    <br />
                    <p>
                    El host receptor de la derecha recibe el segmento en la Capa 4 y determina que el número de secuencia es 1 y que posee 10 bytes de datos. Luego el host envía un segmento de vuelta al host de la izquierda para acusar recibo de estos datos. En este segmento, el host establece el número de acuse de recibo en 11 para indicar que el próximo byte de datos que espera recibir en esta sesión es el byte número 11. Nota, el valor de Ack. en el host de origen permanece en 1 para indicar que el segmento es parte de una conversación continua y que el número en el campo de número de acuse de recibo es válido.
                    
                    Cuando el host emisor de la izquierda recibe este acuse de recibo, puede enviar el próximo segmento que contiene datos para esta sesión a partir del byte 11.
                    </p>
                    <br />

                    <div className="card flex justify-content-center">
                        <Image src="http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro35/acuse.png" alt="Image" preview width="650" />
                    </div>

                </Fieldset>




            </div>

        </>
    );
}

