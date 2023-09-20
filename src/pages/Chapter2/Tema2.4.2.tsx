import React from "react";
import { Image } from 'primereact/image';


import { Card } from 'primereact/card';


export default function Tecnicass() {

    return (
        <>

            <div className="card">
                <Card title="2.4.2 Técnicas de Control de Acceso al Medio" className="md:w-20rem"  >
                    <p className="m-0">
                    Algunas topologías de la red comparten un medio común con varios nodos. En cualquier momento puede haber una cantidad de dispositivos que intentan enviar y recibir datos utilizando los medios de red. Hay reglas que rigen cómo esos dispositivos comparten los medios.
                     </p>

                    <br />
                    <ul style={{ listStyle: "middle-dot", marginLeft: "50px" }} className="m-10">
                        <li style={{ fontWeight: "bold" }}>Controlado: cada nodo tiene su propio tiempo para utilizar el medio</li>
                        <li style={{ fontWeight: "bold" }}>Con base en la contención: todos los nodos compiten por el uso del medio</li>
                         
                    </ul>

                    <br />
                    <div className="card flex justify-content-center">
                            <Image src="http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro35/controlado.png" alt="Image" preview width="450" />
                        </div>
                    <br />

                    <p><b>Control de Acceso al Medio para Medios No Compartidos</b></p>
                    <br />
                    <p>Los protocolos de control de acceso para medios no compartidos requieren poco o ningún control antes de colocar tramas en los medios. Estos protocolos tienen reglas y procedimientos más simples para el control de acceso al medio. Tal es el caso de las topologías punto a punto.</p>
                    <br />
                    <p>En las topologías punto a punto, los medios interconectan sólo dos nodos. En esta configuración, los nodos no necesitan compartir los medios con otros hosts ni determinar si una trama está destinada para ese nodo. Por lo tanto, los protocolos de capa de enlace de datos hacen poco para controlar el acceso a medios no compartidos.</p>
                    <br />
                    
                    <p><b>Full Duplex y Half Duplex</b></p>
                    <br />
                    <p>En conexiones punto a punto, la capa de enlace de datos tiene que considerar si la comunicación es half-duplex o full-duplex.</p>
                    <br />
                    <p>Comunicación half-duplex quiere decir que los dispositivos pueden transmitir y recibir en los medios, pero no pueden hacerlo simultáneamente. Ethernet ha establecido reglas de arbitraje para resolver conflictos que surgen de instancias donde más de una estación intenta transmitir al mismo tiempo.</p>
                    <br />
                    <div className="card flex justify-content-center">
                            <Image src="http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro35/hallf.png" alt="Image" preview width="450" />
                        </div>

                </Card>
            </div>

        </>
    );
}

