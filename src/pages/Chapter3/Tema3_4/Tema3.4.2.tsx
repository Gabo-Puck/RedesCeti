import React from "react";



import { Card } from 'primereact/card';


export default function EstandaresEIA569() {

    return (
        <>

            <div className="card">
                <Card title="3.4.2 Estándar EIA/TIA 569" className="md:w-20rem"   >


                    <p>Estándar ANSI/TIA/EIA-569 de Rutas y Espacios de Telecomunicaciones para Edificios Comerciales. Este estándar reconoce tres conceptos fundamentales relacionados con telecomunicaciones y edificios: Los edificios son dinámicos. Durante la existencia de un edificio, las remodelaciones son más la regla que la excepción. Este estándar reconoce, de manera positiva, que el cambio ocurre. Los sistemas de telecomunicaciones y de medios son dinámicos. Durante la existencia de un edificio, los equipos de telecomunicaciones cambian dramáticamente. Este estándar reconoce este hecho siendo tan independiente como sea posible de proveedores de equipo. Telecomunicaciones es más que datos y voz. Telecomunicaciones también incorpora otros sistemas tales como control ambiental, seguridad, audio, televisión, alarmas y sonido. De hecho, telecomunicaciones incorpora todos los sistemas de bajo voltaje que transportan información en los edificios [3, 6]. Este estándar reconoce un precepto de fundamental importancia: De manera que un edificio quede exitosamente diseñado, construido y equipado para telecomunicaciones, es imperativo que el diseño de las telecomunicaciones se incorpore durante la fase preliminar de diseño arquitectónico.</p>
                    <br />
                    <p>Este estándar será el central al momento de diseñar el sistema de cableado estructurado, ya que su enfoque central son las rutas y espacios donde se instalan los cables. Permitirá generar un diseño en el que las rutas sean las óptimas para cada subsistema, por medio de la especificación de materiales, ductos y prácticas de instalación. </p>


                    <br />
                    <p>
                    La especificación la divide en los seis subsistemas, agregando la entrada de servicios. En la especificación del cableado horizontal se mencionan los tipos de ductos que se pueden utilizar, de tal manera que especifica ductos bajo el piso; este tipo de ductos será posible utilizarlos sólo cuando el edificio está en construcción o cuando sea posible la instalación de piso falso, ya que de lo contrario sería necesario la destrucción del piso actual, la instalación de los ductos y la puesta del piso nuevo después de haber ahogado los ductos en concreto, lo que implica costos indirectos muy elevados. La poca disponibilidad de este tipo de ductos como el trenchduct en México hace que sean poco utilizados. En lo que respecta a los ductos por debajo del piso los de piso falso son los más utilizados.
                    </p>
                </Card>
            </div>

        </>
    );

}

