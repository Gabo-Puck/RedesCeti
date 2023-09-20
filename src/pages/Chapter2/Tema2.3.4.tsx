import React from "react";

import { Divider } from 'primereact/divider';
import { Image } from 'primereact/image';



import { Card } from 'primereact/card';


export default function DireccionesPP() {

    return (
        <>

            <div className="card">
                <Card title="2.3.4 Direcciones publicas y privadas" className="md:w-20rem"  >
                    <p className="m-0">
                    Aunque la mayoría de las direcciones IPv4 de host son direcciones públicas designadas para uso en redes a las que se accede desde Internet, existen bloques de direcciones que se utilizan en redes que requieren o no acceso limitado a Internet. Estas direcciones se denominan direcciones privadas.
                    </p>
                   <br />
                   <p>
                   Las principales diferencias entre las direcciones IP públicas y privadas son su alcance y a qué se conectan. Una dirección IP pública lo identifica en Internet, de modo que toda la información que busque pueda llegar hasta usted. Una dirección IP privada se utiliza dentro de una red privada para conectarse de forma segura a otros dispositivos de la misma red.
                   </p>
                   <br />
                    <div className="card flex justify-content-center">
                  
                        <p>
                        <p>
                        Las direcciones privadas solo son visibles desde una red interna, pero no desde internet. Se utilizan generalmente para identificar los puestos de trabajo de las empresas. Se pueden utilizar tantas como se necesiten; no es necesario contratarlas.
                        <br />
                        </p>
                            Las direcciones privadas se definen en RFC 1918, Asignación de direcciones para redes de Internet privadas, y en ocasiones se hace referencia a ellas como direcciones RFC 1918. Los bloques de direcciones de espacio privado, como se muestra en la ilustración, se utilizan en redes privadas. Los hosts que no requieren acceso a Internet pueden utilizar direcciones privadas. Sin embargo, dentro de la red privada, los hosts aún requieren direcciones IP únicas dentro del espacio privado.

                            <br />

                        </p>

                        <Divider layout="vertical" />
                      
                        <br />
                        <p>
                        <p>
                        Las direcciones públicas son indispensables para conectarse a internet, y resultan visibles para cualquier internauta; suele ser la que se asigna al router o al módem.
                        </p>
                        <br />
                            La amplia mayoría de las direcciones en el rango de host unicast IPv4 son direcciones públicas. Estas direcciones están diseñadas para ser utilizadas en los hosts de acceso público desde Internet. Aun dentro de estos bloques de direcciones IPv4, existen muchas direcciones designadas para otros fines específicos.


                            <br />


                        </p>

                    </div>

                        <div className="card flex justify-content-center">
                            <Image src="https://interpolados.files.wordpress.com/2017/03/129.png" alt="Image" preview width="450" />
                        </div>

                </Card>
            </div>

        </>
    );
}

