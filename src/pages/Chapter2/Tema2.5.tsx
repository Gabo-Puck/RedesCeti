import React from "react";



import { Card } from 'primereact/card';


export default function CapaFisica() {
    const header = (
        <img alt="Card" src="https://icorp.com.mx/wp-content/uploads/2021/01/Descubre-para-que-sirve-el-Modelo-OSI-scaled.webp" />
    );
    return (
        <>

            <div className="card">
                <Card title="2.5 Capa fisica." className="md:w-20rem" header={header}  >
                    <p className="m-0">

                        La capa física se encarga de definir todos los aspectos relacionados con los elementos físicos de conexión de los dispositivos a la red, así como de establecer los procedimientos para transmitir la información sobre la serial física empleada. En este sentido, puede decirse que la capa física es la encargada de definir cuatro tipos de características de los elementos de interconexión:
                    </p>


                    <br />
                    <p className="m-0">
                        <ul style={{ listStyle: "middle-dot", marginLeft: "50px" }} className="m-10">
                            <li style={{ fontWeight: "bold" }}>Mecánicas: se refiere a las características físicas del elemento de conexión con la red, es decir, a las propiedades de la interfaz física con el medio de comunicación. Por ejemplo, las dimensiones y forma del conector, el número de cables usados en la conexión, el número de pines del conector. el tamaño del cable, el tipo de antena, etc.</li>
                            <li style={{ fontWeight: "bold" }}>Eléctricas: especifica las características eléctricas empleadas, por ejemplo, la tensión usada, velocidad de transmisión, intensidad en los pines. etc.</li>
                            <li style={{ fontWeight: "bold" }}>Funcionales: define las funciones de cada uno de los circuitos del elemento de interconexión a la red, por ejemplo, pin X para transmitir, pin Y para recibir, etc.</li>
                            <li style={{ fontWeight: "bold" }}>De procedimiento: establece los pasos a realizar para transmitir información a través del medio físico.</li>
 
                        </ul>
                    </p>

                    <br />
                    <p>
                    Esta capa ofrece a los niveles superiores un servicio de transmisión de datos, es decir, proporciona un mecanismo para enviar y recibir bits empleando el canal de comunicación. Es la capa de más bajo nivel.
                    </p>
                    <br />
                    <p>
                    La transmisión de datos entre un emisor y un receptor siempre se realiza a través de un medio de transmisión. Los medios de transmisión se pueden clasificar como guiados y no guiados. En ambos casos, la comunicación se realiza usando ondas electromagnéticas. En los medios guiados, por ejemplo en pares trenzados, en cables coaxiales y en fibras ópticas, las ondas se transmiten confinándolas a lo largo de un camino físico. Por el contrario, los medios no guiados, también denominados inalámbricos, proporcionan un medio para transmitir las ondas electromagnéticas sin confinarlas, como por ejemplo en la propagación a través del aire, el mar o el vacío.
                    </p>
                </Card>
            </div>

        </>
    );
}

