import React from "react";




import { Card } from 'primereact/card';


export default function CapadeTransporte() {
    const header = (
        <img alt="Card" src="https://geekflare.com/wp-content/uploads/2022/05/datalink-layer-963x385.png" />
    );
    return (
        <>


            <div className="card">
                <Card title="2.2 Capa de transporte" className="md:w-20rem" header={header}  >
                 
                    <p className="m-0">
                        La capa de transporte es la cuarta capa del modelo OSI y garantiza que dos sistemas puedan comunicarse entre sí mediante una transmisión de datos segura, fluida y transparente de extremo a extremo. Evitar la congestión también es responsabilidad del transport layer.

                        El modelo OSI es un estándar que debe hacer posible la conexión entre dos dispositivos finales en una red, independientemente del software o hardware que utilicen ambas partes. El modelo OSI, que se viene desarrollando desde los años 70 y se presentó por primera vez en 1983, consta de un total de siete capas, todas ellas dirigidas a áreas de trabajo diferentes, pero que se apoyan unas en otras e interactúan entre sí hasta cierto punto.
                    </p>


                </Card>
            </div>

        </>
    );
}

