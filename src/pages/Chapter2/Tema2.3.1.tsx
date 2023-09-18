import React from "react";

import { Divider } from 'primereact/divider';



import { Card } from 'primereact/card';


export default function Enrutamiento() {

    return (
        <>

            <div className="card">
                <Card title="2.3.1 Enrutamiento estatico y dinamico." className="md:w-20rem"  >
                    <p className="m-0">
                        La función principal de los routers es la de buscar el mejor camino, entre los posibles, hacia un destino para dirigir tráfico de datos hacia él. Para llevarla a cabo utilizan tablas de enrutamiento que contienen información sobre las redes que están conectadas directamente al router, además de las rutas hacia otras redes.
                    </p>
                    <br />
                    <p className="m-0">
                        En las redes existen muchas vías distintas para llegar a un mismo destino. Para elegir una de ellas se debe definir qué se entiende por “mejor ruta” y cuál es la métrica que se va utilizar para medirla. Haciendo una analogía con un ejemplo de nuestra vida cotidiana, se podría decir que, si estamos en nuestra casa y queremos llegar al supermercado, tendremos varias opciones o caminos para poder hacerlo, y elegiremos el que más nos convenga basándonos en diferentes criterios (métrica).
                    </p>


                    <div className="card flex justify-content-center">
                        <p>
                            El<b> enrutamiento estático </b>es aquel en el que el administrador de la red debe encargarse de configurar manualmente cada uno de los routers que forman la misma. Cuando se lleva a cabo este tipo de enrutamiento hay que acceder a cada router, configurarlo individualmente y enseñarle cada una de las rutas existentes.
                            <br />

                            Este tipo de enrutamiento hace más fácil el mantenimiento de las tablas de enrutamiento en redes muy pequeñas, en las que se sabe previamente que no va a haber un aumento significativo de la misma. Normalmente, utiliza una única ruta por defecto o predeterminada que es la que dirige el tráfico hacia cualquier red que no tenga coincidencia con otra ruta de la tabla de routing.
                            <br />

                            Por lo indicado anteriormente, el enrutamiento estático se utiliza principalmente en redes con una cantidad pequeña de routers, las cuales tienen un solo gateway. Cuando se lleva a cabo este tipo de configuración, hay que especificar en cada router la IP de destino, la IP del router por la que se envían los paquetes, la distancia y la máscara de red.
                        </p>

                        <Divider layout="vertical" />
                        <p>
                            El <b>enrutamiento  dinámico</b> se basa en la utilización o empleo de protocolos de enrutamiento con el fin de automatizar el intercambio y la actualización de las tablas de enrutamiento de cada uno de los routers. Estos protocolos comparten las tablas de enrutamiento de forma automática con los routers cercanos, lo que hace que su utilización sea recomendada para redes grandes.
                            <br />
                            
                            Si tenemos una red en la que utilizamos este tipo de enrutamiento, no importará la cantidad de routers que contenga, ya que podremos ir agregando en ella nuevos equipos y automáticamente todos los routers los conocerán sin necesidad de configurar cada uno de ellos de forma individualizada. Todo es automático, por ejemplo, si elimino una red WAN o LAN todos los equipos sabrán que no existe y no enviarán paquetes a la misma. O si por el contrario, la agrego, todos la conocerán y podrán comunicarse con ella.
                            <br />

                            Es fundamental comprender que, en este caso, los routers se comunican unos a otros las redes a las que están conectados, lo que lo hace mucho más rápido y eficiente.

                        </p>
                    </div>


                </Card>
            </div>

        </>
    );
}

