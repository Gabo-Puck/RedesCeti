
import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import "../../css/Timeline.css";
import "../../css/Flags.css";
import "../../css/index.css";
import IndexAnchor from '../../components/Lesson/IndexAnchor';
import Title from '../../components/Lesson/Title';
import Paragraph from '../../components/Paragraph';

interface TimelineEvent {
    title?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
    name?: string,
    content?: React.ReactNode
}

function DisenoRed() {
    return <>
        <Paragraph>
            Primero se tiene que hacer elección de los requirimentos de la red. Estos pueden ser de rendimiento y calidad
        </Paragraph>
        <Paragraph>
            Una vez hecho esto se empiezan a considerar topologías de red apropiadas para resolver el problema.
            Por ejemplo el uso de una topología de Estrella, Bus, Anillo, Malla o etc.
        </Paragraph>
        <Paragraph>
            Considerando los requirimentos y balanceando con la topología elegida, se da inicio a la planeación del posicionamiento
            de los dispositivos de manera física.
        </Paragraph>
        <Paragraph>
            Cabe recalcar que también en esta parte de considera el costo y que equipo se usará para generar cotización.
        </Paragraph>
    </>
}
function EquipamentoRed() {
    return <>
        <Paragraph>
            Una vez se han captado los requerimentos del proyecto, también se decide que dispositivos se usarán.
            Principalmente se puede decir que el equipamento tiene que resolver 3 problemáticas principales:
        </Paragraph>
        <ol>
            <li><Paragraph>Selección de equipos de red, como lo son Routers, Switches y Hubs</Paragraph></li>
            <li><Paragraph>Consideraciones de seguridad y redundancia: Hacer un plan de que asegure la máxima calidad, seguridad y tiempo de servicio de acuerdo a las necesidades del cliente</Paragraph></li>
            <li><Paragraph>Gestión de energía y sistemas de respaldo: De acuerdo a los dispositvos elegidos y en base a sus hojas de especificaciones, elegir dispositivos de alimentación adecuados. También priorizar hacer uso de opciones de resplado de energía como lo son los UPS</Paragraph></li>
        </ol>
    </>
}
function CableadoEstructurado() {
    return <>
        <Paragraph>
            Una vez detallados los equipos de red y diseño de la misma es necesario considerar el cableado. Esta es la parte física
            que interconecta todos los dispostivos, es por esto que se tiene que conocer bien las tecnologías asociadas a este punto.
        </Paragraph>
        <Paragraph>
            Principalmente, es primordial elegir el tipo de cableado a usar (Como lo puede ser Ethernet o Fibra óptica), así como conocer los
            estándares para garantizar un servicio seguro y de calidad.
        </Paragraph>
        <Paragraph>
            Un ejemplo de estos estándares es TIA/EIA-568 que dicta las especificaciones de un cableado de telecomunicaciones
        </Paragraph>
        <Paragraph>
            Finalmente, es relevante tomar en cuenta la seguridad física del cableado, haciendo uso de cerraduras para protección de los dispositivos o canaletas apropiadas para el cableado
        </Paragraph>
    </>
}
function ConfiguracionDispositivos() {
    return <>
        <Paragraph>
            La configuración de dispositivos en una red implica establecer parámetros y ajustes que permiten la comunicación y el funcionamiento adecuado de cada dispositivo en la red. Esto incluye a los routers, servidores, firewalls y estaciones de trabajo.
        </Paragraph>
        <Paragraph>
            En esta parte, se hacen además las configuraciones necesarias para la implementación (si es necesaria) de VLANs, implementación de
            servicio de DHCP, implementación de seguridad dentro de la red mediante firewalls, servicios de encriptación y autenticación de usuarios
        </Paragraph>
        <Paragraph>
            Finalmente, la configuración (si es necesario) debe implementar QoS (Quality of Service) para implementar una jerarquía dentro
            del tráfico de la red, de forma que se priorice cierto tipo de tráfico.
        </Paragraph>
    </>
}
function SeguridadRed() {
    return <>
        <Paragraph>
            Consiste en la implementación de políticas y medidas para proteger la red de amenzas que puedan dañar los datos.
        </Paragraph>
        <Paragraph>
            Configura firewalls en los puntos de entrada y salida de la red para filtrar el tráfico no autorizado
        </Paragraph>
        <Paragraph>
            Otra parte sumamente importante son las políticas de seguridad. Estas abarcan desde como se autentican los usuarios, la autorización de acceso,
            las reglas para establecer contraseñas seguras, cifrado de datos etc. Lo recomendable es seguir estándares de seguridad como lo es ISO 27033.
        </Paragraph>
    </>
}
function GestionMonitoreo() {
    return <>
        <Paragraph>
            Son los procesos para supervisar, administrar, mantener una red en funcionamiento y en su debido caso hacer mejoras pertinentes.
        </Paragraph>
        <Paragraph>
            El uso de herramientas como SNMP (Simple Network Managment Protocol) permite obtener información sobre el estado
            general de la red y sus diversos componentes. Además, permite configurar alertas o automatizar cambios en base a parametros como
            el estado de ciertos dispostivos y tráfico.
        </Paragraph>
        <Paragraph>
            Por último, el analísis del rendimiento es sumamente importante, para encontrar posibles errores, puntos de mejora y realizar
            mantenimientos correctivos.
        </Paragraph>
    </>
}
function EscalibilidadExpansiones() {
    return <></>
}
function CostoPresupuesto() {
    return <></>
}
function DocumentacionSoporte() {
    return <>
        <Paragraph>
            Para del soporte y mantenimiento a la red es necesario llevar una documentación apropiada.
            La creación de documentación técnica que incluya diagramas de topología de red, esquemas de direccionamiento IP, registros de configuración y detalles sobre la ubicación física de dispositivos es esencial.
        </Paragraph>
        <Paragraph>
            A su vez, también es necesario establecer procedimientos y procesos estandarizados para dar soporte y brindar apoyo a la red
        </Paragraph>
        <Paragraph>
            Finalmente, si es necesario, tener un centro de soporte técnico que documente la red, sus errores y ayude a los usuarios sería una buena idea
        </Paragraph>
    </>
}

export default function TemplateDemo() {
    const events: TimelineEvent[] = [
        { title: "Diseño de la red", icon: 'pi pi-wifi', color: '#C1876B', content: <DisenoRed /> },
        { title: "Equipamento de la red", icon: 'pi pi-shopping-cart', color: '#49678D', content: <EquipamentoRed /> },
        { title: "Cableado estructurado", icon: 'pi pi-wrench', color: '#CF3476', content: <CableadoEstructurado /> },
        { title: "Configuración de dispositivos", icon: 'pi pi-cog', color: '#D53032', content: <ConfiguracionDispositivos /> },
        { title: "Seguridad de red", icon: 'pi pi-shield', color: '#89AC76', content: <SeguridadRed /> },
        { title: "Gestión y monitoreo de la red", icon: 'pi pi-users', color: '#9C9C9C', content: <GestionMonitoreo /> },
        // { title: "Escalibilidad y expansiones", icon: 'pi pi-chart-line', color: '#CDA434', content: <EscalibilidadExpansiones /> },
        // { title: "Costos y presupuesto", icon: 'pi pi-money-bill', color: '#FAD201', content: <CostoPresupuesto /> },
        { title: "Documentación y soporte", icon: 'pi pi-pencil', color: '#9C27B0', content: <DocumentacionSoporte /> },
    ];

    const customizedMarker = (item: TimelineEvent) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color, borderRadius: "50%", padding: "0.5em" }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: TimelineEvent) => {
        return (
            <Card title={item.title} subTitle={item.date}>
                {item.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} width={200} className="shadow-1" />}
                {item.content}
            </Card>
        );
    };

    return (
        <div>
            <Title content="4.5 Realización de una red física" />
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>


    )
}
