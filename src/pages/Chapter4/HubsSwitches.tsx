import { Card } from "primereact/card";
import IndexAnchor from "../../components/Lesson/IndexAnchor";
import Subtitle from "../../components/Lesson/Subtitle";
import Title from "../../components/Lesson/Title";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react";
import { Button } from "primereact/button";
import { TabView, TabPanel } from 'primereact/tabview';

const index = {
    intro:
        "Introducción a Switches y Hubs",
    switches:
        "Switches",
    funcSwitch:
        "¿Cómo funcionan los switches?",
    hubs:
        "Hubs",
    funcHubs:
        "¿Cómo funcionan los hubs?",
    comparacion:
        "Comparativa entre switches y hubs",
}
const categorias = [
    {
        categoria: '5e',
        velocidad: "1Gbps",
        distancia: '100 metros',
        frecuencia: '100MHz',
        uso: 'Oficinas y hogares para redes de tamaño mediano con necesidades estándar de ancho de banda',
    },
    {
        categoria: '6',
        velocidad: '1 Gbps a 10 Gbps',
        distancia: '55 metros: 10Gbps | 100 metros: 1Gbps',
        frecuencia: '250MHz',
        uso: 'Aplicaciones de alta velocidad en entornos comerciales y residenciales, como transmisión de video y datos intensivos.',
    },
    {
        categoria: '6a',
        velocidad: '10 Gbps a 100 Gbps',
        distancia: 'Hasta 100 metros',
        frecuencia: '500MHz',
        uso: 'Redes empresariales y centros de datos que requieren alto rendimiento y ancho de banda',
    },
    {
        categoria: '7',
        velocidad: '10 Gbps a 100 Gbps',
        distancia: 'Hasta 100 metros',
        frecuencia: '600 MHz',
        uso: 'Redes industriales y aplicaciones especializadas que demandan protección adicional contra interferencias',
    },
    {
        categoria: '8',
        velocidad: '25 Gbps a 40 Gbps.',
        distancia: 'Hasta 30 metros',
        frecuencia: ' 1GHz',
        uso: 'Centros de datos y aplicaciones de alto rendimiento que necesitan velocidades excepcionales a distancias cortas.',
    },
    {
        categoria: '8.1',
        velocidad: '25 Gbps a 40 Gbps',
        distancia: 'Hasta 30 metros',
        frecuencia: '2GHz',
        uso: 'Similar a Cat 8, diseñado para coexistir con cables de fibra en el mismo sistema.',
    },
]
export default function HubsSwitches() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return <div>
        <Title content="4.3 Hubs y Switches" />
        <Card title="Contenido" className="mb-10">
            <ul className="px-5 list-disc">
                <li><IndexAnchor content={index["intro"]} /></li>
                <li><IndexAnchor content={index["switches"]} /></li>
                <li><IndexAnchor content={index["funcSwitch"]} /></li>
                <li><IndexAnchor content={index["hubs"]} /></li>
                <li><IndexAnchor content={index["funcHubs"]} /></li>
                <li><IndexAnchor content={index["comparacion"]} /></li>
            </ul>
        </Card>
        <article className="mb-10">
            <Subtitle content={index["intro"]} />
            <p className="text-gray-500 dark:text-gray-400">
                Dispositivos como los switches y los hubs son fundamentales para establecer y gestionar una conectividad eficiente y confiable. Estos componentes, aunque a menudo pasan desapercibidos, desempeñan un papel esencial en la estructura y el funcionamiento de las redes modernas
            </p>
        </article>
        <article className="mb-10">
            <Subtitle content={index["switches"]} />
            <div className="card">
                <div>
                    <p className="text-gray-500 dark:text-gray-400">
                        Los switches son piezas de construcción clave para una red que operan en la capa 2. Permiten que varios dispositivos, tales como computadoras, access points, impresoras y servidores; se conecten entre sí. Es decir que un switch permite a los dispositivos conectados compartir información y comunicarse.
                    </p>
                </div>
                <div>
                    <p className="text-gray-500 dark:text-gray-400">
                        Dentro de los switches podemos clasificarlos de acuerdo al nivel de configuración que requieren:
                    </p>


                    <div className="card">
                        <TabView>
                            <TabPanel header="Administrados">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Están diseñados para que uno pueda simplemente conectarlo y ya funcione (Como si fuera plug and play). Se usan para casos muy básicos como redes domésticas, laboratorios o salas de conferencias.
                                </p>
                            </TabPanel>
                            <TabPanel header="No administrados">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Están diseñados para ser más seguros, flexibles y con más funciones. Requieren una configuración personalizada, por lo tanto sus casos de uso son más extensos dependiendo de las necesidades de quien lo configure.
                                </p>
                            </TabPanel>
                        </TabView>
                    </div>



                </div>

            </div>
        </article>
        <article className="mb-10">
            <Subtitle content={index["funcSwitch"]} />
            <div className="card">

            </div>
        </article>
        <article className="mb-10">
            <Subtitle content={index["hubs"]} />
            <div className="card">

            </div>
        </article>
        <article className="mb-10">
            <Subtitle content={index["funcHubs"]} />
            <div className="card">

            </div>
        </article>
        <article className="mb-10">
            <Subtitle content={index["comparacion"]} />
            <div className="card">

            </div>
        </article>

    </div>

}