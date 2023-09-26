import React from "react";



import { Card } from 'primereact/card';


export default function EstandaresEIA() {

    return (
        <>

            <div className="card">
                <Card title="3.4.1 Estándar EIA/TIA 568" className="md:w-20rem"   >

                     <p className="m-0">
                        Esta norma establece dos estandares (A y B) para el cableado Ethernet 10Base-T,
                        determinando qué color corresponde a cada pin del conector RJ-45
                    </p>

                    <br />
                    <p>
                        El standad 568-B, también llamado especificación AT&T es usado más frecuentemente, pero
                        muchas instalaciones están diseñadas con el estándar 568-A, también denominado ISDN
                    </p>

                    <br />
                    <p>
                        Normalmente, un patch está armado respetando el mismo estandar (A o B) en ambos
                        extremos del cable. Estos cables se utilizan para:
                    </p>
                    <br />
                    <p>
                    <ul style={{ listStyle: "middle-dot", marginLeft: "50px" }} className="m-10">
                        <li style={{ fontWeight: "bold" }}>Conectar una estación de trabajo a la roseta de una instalación de cableado estructurado.</li>
                        <li style={{ fontWeight: "bold" }}>Conectar la patchera con un hub o un switch en el armario de cableado.</li>
                        <li style={{ fontWeight: "bold" }}>Conectar directamente una estación de trabajo a un hub o un switch.</li>
                        <li style={{ fontWeight: "bold" }}>Conectar un hub con el puerto "crossover" de otro dispositivo.</li>
 
                    </ul>
                    </p>

                </Card>
            </div>

        </>
    );

}

