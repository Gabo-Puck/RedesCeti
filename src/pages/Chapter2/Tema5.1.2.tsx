import React from "react";

import { Image } from 'primereact/image';



import { Card } from 'primereact/card';


export default function Señalizacion() {

    return (
        <>

            <div className="card">
                <Card title="2.5.2 Señalización y Codificación fisica" className="md:w-20rem"  >
                    <p className="m-0">
                        Los bits se representan en el medio al cambiar una o más de las siguientes características de una señal:
                    </p>
                    <br />

                    <ul style={{ listStyle: "middle-dot", marginLeft: "50px" }} className="m-10">
                        <li style={{ fontWeight: "bold" }}>Amplitud</li>
                        <li style={{ fontWeight: "bold" }}>Frecuencia</li>
                        <li style={{ fontWeight: "bold" }}>Etapa</li>

                    </ul>

                    <p>
                    La naturaleza de las señales reales que representan los bits en los medios dependerá del método de señalización que se utilice. Algunos métodos pueden utilizar un atributo de señal para representar un único 0 y utilizar otro atributo de señal para representar un único 1.
                    </p>
                    <br />
                    <p>
                    El método de señalización utilizado debe ser compatible con un estándar para que el receptor pueda detectar las señales y decodificarlas. El estándar incluye un acuerdo entre el transmisor y el receptor sobre cómo representar los 1 y los 0. Si no existe un acuerdo de señalización, es decir, si se utilizan diferentes estándares en cada extremo de la transmisión, la comunicación a través del medio físico no se podrá llevar a cabo.

                    </p>

                    <br />
                    <p><b>FSeñalización NRZ</b></p>
                    <br />
                    <p>
                    Como primer ejemplo, examinaremos un método simple de señalización: sin retorno a cero (NRZ). En NRZ, el stream de bits se transmite como una secuencia de valores de voltaje, tal como se muestra en la figura.
                    
                    Un valor de bajo voltaje representa un 0 lógico y un valor de alto voltaje representa un 1 lógico. El intervalo de voltaje depende del estándar específico de capa Física utilizado.

                    </p>

                    <br />
                    <p>
                    Este método simple de señalización sólo es adecuado para enlaces de datos de velocidad lenta. La señalización NRZ no utiliza el ancho de banda de manera eficiente y es susceptible a la interferencia electromagnética. Además, los límites entre bits individuales pueden perderse al transmitir en forma consecutiva secuencias largas de 1 ó 0. En dicho caso, no se detectan transiciones de voltaje en los medios. Por lo tanto, los nodos receptores no tienen una transición para utilizar al resincronizar tiempos de bit con el nodo transmisor.

                    </p>

                    <br />
                    <div className="card flex justify-content-center">
                            <Image src="http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro35/nzr.png" alt="Image" preview width="450" />
                        </div>






                        <p><b>Codificación Manchester</b></p>
                    <br />
                    <p>
                    En lugar de representar bits como impulsos de valores simples de voltaje, en el esquema de codificación Manchester, los valores de bit se representan como transiciones de voltaje.
                    </p>

                    <br />
                    <p>
                    Por ejemplo, una transición desde un voltaje bajo a un voltaje alto representa un valor de bit de 1. Una transición desde un voltaje alto a un voltaje bajo representa un valor de bit de 0.
                    </p>

                    <br />
                    <p>
                    La transición en la mitad del tiempo de bit será en dirección ascendente o descendente para cada unidad de tiempo en la cual se transmite un bit. Para los valores de bit consecutivos, una transición en el límite del bit "configura" la transición adecuada de tiempo medio de bit que representa el valor del bit.
                    </p>
                    <br />

                    <div className="card flex justify-content-center">
                            <Image src="http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro35/nzr.png" alt="Image" preview width="450" />
                        </div>


                        <p><b>Codificación</b></p>
                    <br />
                    <p>
                    En la sección anterior, describimos el proceso de señalización según la forma en la que se representan los bits en los medios físicos. En esta sección, utilizamos la palabra codificación para representar una agrupación simbólica de bits antes de ser presentados a los medios. Al utilizar el paso de codificación antes de ubicar las señales en los medios, mejoramos la eficiencia mediante una transmisión de datos de mayor velocidad.
                     </p>

                    <br />
                    <p>
                    A medida que utilizamos mayores velocidades en los medios, existe la posibilidad de que los datos se dañen. Al utilizar los grupos de codificación, podemos detectar errores de manera más eficiente. Además, a medida que aumenta la demanda de velocidades de datos, buscamos formas de representar más datos a través de los medios mediante la transmisión de menos bits. Los grupos de codificación proporcionan un método para realizar esta representación de datos.
                    </p>
                    <br />
                    
                    <p>
                    La capa física del dispositivo de red debe ser capaz de detectar señales legítimas de datos e ignorar señales aleatorias sin datos que también pueden encontrarse en el medio físico. El stream de señales que se transmite necesita iniciarse de tal forma que el receptor reconozca el comienzo y el final de la trama.
                    </p>


                </Card>
            </div>

        </>
    );
}

