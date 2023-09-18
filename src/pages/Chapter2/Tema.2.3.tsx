import React from "react";




import { Card } from 'primereact/card';


export default function CapadeRed() {
    const header = (
        <img alt="Card" src="https://edimar.com/wp-content/uploads/2021/03/edge-computing-que-es-5g-edimar.jpg" />
    );
    return (
        <>

            <div className="card">
                <Card title="2.3 Capas de red." className="md:w-20rem" header={header}  >
                    <p className="m-0">
                        La capa de red también se denomina network layer y es la tercera capa del modelo OSI. Es responsable del direccionamiento, que es importante para establecer conexiones dentro de una red. De este modo, permite que dos participantes se conecten entre sí de forma segura, pudiéndose comunicar también a través de diferentes redes.                    </p>
                    <br />
                    <p className="m-0">
                        Tener un direccionamiento correcto es un requisito previo para que dos sistemas diferentes de una misma red puedan comunicarse entre sí e intercambiar datos. La capa de red ofrece diferentes servicios y funciones que pone principalmente a disposición de la capa de transporte.

                        La tarea principal del network layer consiste tanto en conmutar como en establecer e interrumpir conexiones. Las conexiones seguras del sistema están vinculadas entre sí, aunque para ello tengan que ser enrutadas a través de varias redes. En este caso, la capa de red selecciona una ruta y luego proporciona a las capas superiores una conexión transparente entre el sistema de origen y el de destino.
                    </p>
                </Card>
            </div> 

        </>
    );
}

