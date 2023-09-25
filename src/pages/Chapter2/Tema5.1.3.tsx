import React from "react";




import { Card } from 'primereact/card';


export default function Medios() {

    return (
        <>

            <div className="card">
                <Card title="2.5.3 Medios fisicos" className="md:w-20rem"  >
                    <p className="m-0">
                        La capa Física de OSI proporciona los medios de transporte para los bits que conforman la trama de la capa de Enlace de datos a través de los medios de red. Esta capa acepta una trama completa desde la capa de Enlace de datos y la codifica como una secuencia de señales que se transmiten en los medios locales. Un dispositivo final o un dispositivo intermediario recibe los bits codificados que componen una trama.
                    </p>
                    <br />
                    <p className="m-0">
                        El envío de tramas a través de medios locales requiere los siguientes elementos de la capa física:
                    </p>

                    <br />
                    <p>En este momento del proceso de comunicación, la capa de transporte ha segmentado los datos del usuario, la capa de red los ha colocado en paquetes y luego la capa de enlace de datos los ha encapsulado como tramas. El objetivo de la capa Física es crear la señal óptica, eléctrica o de microondas que representa a los bits en cada trama. Luego, estas señales se envían por los medios una a la vez.</p>

                    <br />
                    <p>
                        Otra función de la capa física es la de recuperar estas señales individuales desde los medios, restaurarlas para sus representaciones de bit y enviar los bits hacia la capa de enlace de datos como una trama completa.
                    </p>
<br />

                    <p>
                        <ul style={{ listStyle: "middle-dot", marginLeft: "50px" }} className="m-10">
                            <li style={{ fontWeight: "bold" }}>Medios físicos y conectores asociados </li>
                            <li style={{ fontWeight: "bold" }}>Una representación de los bits en los medios </li>
                            <li style={{ fontWeight: "bold" }}>Codificación de los datos y de la información de control</li>
                            <li style={{ fontWeight: "bold" }}>Sistema de circuitos del receptor y transmisor en los dispositivos de red</li>

                        </ul>
                    </p>
                    <br />

                    <p>
                        En este momento del proceso de comunicación, la capa de transporte ha segmentado los datos del usuario, la capa de red los ha colocado en paquetes y luego la capa de enlace de datos los ha encapsulado como tramas. El objetivo de la capa Física es crear la señal óptica, eléctrica o de microondas que representa a los bits en cada trama. Luego, estas señales se envían por los medios una a la vez.
                    </p>
                    <br />

                    <ul style={{ listStyle: "middle-dot", marginLeft: "50px" }} className="m-10">
                        <li style={{ fontWeight: "bold" }}>Cable de cobre</li>
                        <li style={{ fontWeight: "bold" }}>Fibra</li>
                        <li style={{ fontWeight: "bold" }}>Inalámbrico</li>

                    </ul>
                    <br />
                    <p>
                        La presentación de los bits (es decir, el tipo de señal) depende del tipo de medio. Para los medios de cable de cobre, las señales son patrones de pulsos eléctricos. Para los medios de fibra, las señales son patrones de luz. Para los medios inalámbricos, las señales son patrones de transmisiones de radio.
                    </p>

                </Card>
            </div>

        </>
    );
}

