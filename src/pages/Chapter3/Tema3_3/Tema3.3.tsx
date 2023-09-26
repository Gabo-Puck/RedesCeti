import React from "react";



import { Card } from 'primereact/card';


export default function Estandares() {

    return (
        <>

            <div className="card">
                <Card title="3.3 Estándares de la capa física: RS-232, RS-422, RS-449" className="md:w-20rem"   >

                    <b><p> Estándar RS232</p></b>
                    <p className="m-0">

                        El protocolo RS-232 es una norma o estándar mundial que rige LOS parámetros de uno de los modos de comunicación serial. Por medio de este protocolo se estandarizan las velocidades de transferencia de datos, la forma de control que utiliza dicha transferencia, los niveles de voltajes utilizados, el tipo de cable permitido, las distancias entre equipos, los conectores, etc.
                    </p>
                    <br />

                    <b><p> Estándar 442</p></b>
                    <p className="m-0">

                        El estándar TIA/EIA-422, popularmente conocido como RS422, describe una interfaz de comunicación que opera sobre líneas diferenciales
                        capaces de conectar un dispositivo transmisor a hasta 10 dispositivos receptores. El entorno físico definido para RS422 se compone por dos pares
                        trenzados. Se utiliza el primer par trenzado para comunicarse desde el transmisor (usualmente el maestro) a los receptores (normalmente
                        esclavos). Se utiliza el segundo par trenzado para comunicarse entre los esclavos y el maestro                    </p>
                    <br />

                    <b><p> Estándar RS-449</p></b>
                    <p className="m-0">

                        El estándar del EIA RS-449 especifica las características funcionales y mecánicas de la interconexión entre el equipo terminal de datos(DTE) y la conformación a los estándares de interfaces eléctricos de EIA RS-422 y RS-123. especifica un conector de 37 pines y de 9 pines; no es utilizado ampliamente.
                    </p>
                    <br />




                </Card>
            </div>

        </>
    );

}

