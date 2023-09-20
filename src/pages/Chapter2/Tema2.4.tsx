import React from "react";




import { Card } from 'primereact/card';


export default function Enlace() {
    const header = (
        <img alt="Card" src="https://0901.static.prezi.com/preview/v2/f7g6w3htdkxr5szcyekno7mejd6jc3sachvcdoaizecfr3dnitcq_3_0.png" />
    );
    return (
        <>


            <div className="card">
                <Card title="2.4 Capa de enlace de datos" className="md:w-20rem" header={header}  >
                 
                    <p className="m-0">
                    El nivel de enlace de datos (en inglés: data link level), o capa de enlace de datos, es la segunda capa del modelo OSI, es responsable de la transferencia fiable de información a través de un circuito de transmisión de datos. Recibe peticiones de la capa de red y utiliza los servicios de la capa física.  </p>

                    <br />
                    <p>
                    El objetivo de la capa de enlace es conseguir que la información fluya, libre de errores, entre dos máquinas que estén conectadas directamente (servicio orientado a la conexión). Para lograr este objetivo tiene que montar bloques de información (llamados tramas en esta capa), dotarles de una dirección de capa de enlace (Dirección MAC), gestionar la detección o corrección de errores, y ocuparse del “control de flujo” entre equipos (para evitar que un equipo más rápido desborde a uno más lento). 
                        
                    </p>


                </Card>
            </div>

        </>
    );
}

