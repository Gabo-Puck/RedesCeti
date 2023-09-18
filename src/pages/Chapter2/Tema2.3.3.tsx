import React from "react";
import { Image } from 'primereact/image';




import { Card } from 'primereact/card';


export default function Calculos() {

    return (
        <>

            <div className="card">
                <Card title="2.3.3 Tipos y calculos de direcciones." className="md:w-20rem"  >
                    <p className="m-0">
                        La división en subredes permite crear múltiples redes lógicas de un único bloque de direcciones. Como usamos un router para conectar estas redes, cada interfaz en un router debe tener un ID único de red. Cada nodo en ese enlace está en la misma red.
                    </p>
                    <br />
                    <p className="m-0">
                        Creamos las subredes utilizando uno o más de los bits del host como bits de la red. Esto se hace ampliando la máscara para tomar prestado algunos de los bits de la porción de host de la dirección, a fin de crear bits de red adicionales. Cuantos más bits de host se usen, mayor será la cantidad de subredes que puedan definirse. Para cada bit que se tomó prestado, se duplica la cantidad de subredes disponibles. Por ejemplo: si se toma prestado 1 bit, es posible definir 2 subredes. Si se toman prestados 2 bits, es posible tener 4 subredes. Sin embargo, con cada bit que se toma prestado, se dispone de menos direcciones host por subred.
                    </p>
                    <br />
                    <p className="m-0">
                        El RouterA en la figura posee dos interfaces para interconectar dos redes. Dado un bloque de direcciones 192.168.1.0 /24, se crearán dos subredes. Se toma prestado un bit de la porción de host utilizando una máscara de subred 255.255.255.128, en lugar de la máscara original 255.255.255.0. El bit más significativo del último octeto se usa para diferenciar dos subredes. Para una de las subredes, este bit es "0" y para la otra subred, este bit es "1".
                    </p>
                    <br />
                    <b>
                        <h1>Fórmula para Calcular Subredes</h1>
                        <br />

                    </b>
                    <p>
                        Use esta fórmula para calcular la cantidad de subredes:
                        <br />

                        2^n
                        <br />

                        Donde n corresponde a la cantidad de bits que se tomaron prestados.
                        <br />

                        En este ejemplo, el cálculo es así:
                        <br />

                        2^1 = 2 subredes
                    </p>

                    <br />
                    <b>
                        <h1>Cantidad de Hosts</h1>
                        <br />

                    </b>
                    <p>
                        Para calcular la cantidad de hosts por red, se usa la fórmula 2^n - 2 donde n corresponde a la cantidad de bits para hosts.
                        <br />

                        La aplicación de esta fórmula, (2^7 - 2 = 126) muestra que cada una de estas subredes puede tener 126 hosts.
                        <br />

                        En cada subred, examine el último octeto binario. Los valores de estos octetos para las dos redes son:
                        <br />

                        Subred 1: 00000000 = 0
                        <br />

                        Subred 2: 10000000 = 128
                        <br />

                        Observe la figura del esquema de direccionamiento para estas redes.
                        <br />

                    </p>


                    <div className="card flex justify-content-center">
                        <Image src="http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro35/prestamo.png" alt="Image" preview width="450" />
                    </div>
                </Card>
            </div>

        </>
    );
}

