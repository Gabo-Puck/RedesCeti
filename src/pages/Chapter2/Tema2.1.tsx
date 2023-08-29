import React from "react";



import { Card } from 'primereact/card';


export default function CapadeAplicacion() {
    const header = (
        <img alt="Card" src="https://geekflare.com/wp-content/uploads/2022/05/session-layer-963x385.png" />
    );
    return (
        <>

            <div className="card">
                <Card title="2.1 Capas de aplicación." className="md:w-20rem" header={header}  >
                    <p className="m-0">
                        La capa de aplicación es la séptima y, por tanto, la más alta del modelo OSI y regula la comunicación de los diferentes programas de aplicación dentro de una red. La capa de aplicación del modelo OSI puede ejecutar servicios generales y orientados al usuario y consta de un gran número de protocolos.
                    </p>
                    <br />
                    <p className="m-0">
                        El modelo OSI (Open Systems Interconnection Model) ha sido el estándar para la comunicación abierta entre sistemas desde 1983. Determina los puntos comunes que deberían conducir a la compatibilidad entre diferentes programas y equipos informáticos, independientemente de sus fabricantes. Para ello, el modelo OSI divide la comunicación efectuada a través de la red en siete capas diferentes. La séptima capa y, por tanto, la más alta, es la capa de aplicación, que también se denomina application layer. Esta capa tiene contacto directo con varias aplicaciones y proporciona servicios, así como protocolos y estructuras de datos. Las diferentes capas en orden de abajo a arriba son las siguientes: </p>


                </Card>
            </div>

        </>
    );
}

