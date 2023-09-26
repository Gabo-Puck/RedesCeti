import React from "react";



import { Card } from 'primereact/card';


export default function EstandaresEIA606() {

    return (
        <>

            <div className="card">
                <Card title="3.4.4 Estándar EIA/TIA 606" className="md:w-20rem"   >


                    <p>Estándar ANSI/TIA/EIA-606 de Administración para la Infraestructura de Telecomunicaciones de Edificios Comerciales. El propósito de este estándar es proporcionar un esquema de administración uniforme que sea independiente de las aplicaciones que se le den al sistema de cableado, las cuales pueden cambiar varias veces durante la existencia de un edificio. Este estándar establece guías para dueños, usuarios finales, consultores, contratistas, diseñadores, instaladores y administradores de la infraestructura de telecomunicaciones y sistemas relacionados [4, 6].</p>
                    <br />
                    <p>Si un diseño de cableado se documenta desde su fase inicial, y si esta documentación se hace siguiendo las indicaciones a este estándar, la administración de los servicios y del mismo cableado en un futuro serán muy sencillos. Esto facilitará la modificación en los diseños, ya que teniendo en cuenta detalles como la ocupación de las rutas, la utilización de los pares de fibra, se podrá decidir si se agregan cables, se reutilizan los instalados o si se tiene capacidad para crecer. La administración de los servicios que se ofrecen a través del cableado será más fácil de realizar si se tiene una documentación, ya que sabiendo que cable en el panel de terminación lleva a cada área de trabajo será muy fácil conectar el cable del servicio que se requiere en cada una de ellas. </p>


                    <br />
                    <p>
                    En el caso de que no se tenga esta documentación desde el inicio, el estándar ofrece los formatos para hacerlo de una manera muy sencilla y que permite tener todos los datos concentrados para su consulta. Esto obviamente implicará un trabajo extra, pero que, igual que como se mencionaba anteriormente, facilitará el trabajo de administración en el futuro.
                    </p>
                </Card>
            </div>

        </>
    );

}

