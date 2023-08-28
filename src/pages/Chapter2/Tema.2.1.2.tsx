import React from "react";



import { TabView, TabPanel } from 'primereact/tabview';

import { Fieldset } from 'primereact/fieldset';


export default function Protocolos() {

    return (
        <>

            <div className="card">
                <Fieldset legend="Protocolos y servicios de la capa de aplicación">
                    <p className="m-0">
                        La capa de transporte utiliza un esquema de direccionamiento que se llama número de puerto. Los números de puerto identifican las  aplicaciones y  los servicios de la capa de Aplicación que son los datos de origen y destino. Los programas del servidor generalmente  utilizan números de puerto  predefinidos comúnmente conocidos por los clientes. Mientras examinamos los diferentes servicios y  protocolos de la capa de Aplicación de  TCP/IP, nos referiremos a los números de puerto TCP y UDP normalmente asociados con  estos servicios. Algunos de estos servicios son:                    </p>


                    <br />
                    <ul style={{ listStyle: "middle-dot", marginLeft: "50px" }} className="m-10">
                        <li style={{ fontWeight: "bold" }}>Sistema de nombres de dominio (DNS): puerto TCP/UDP 53.</li>
                        <li style={{ fontWeight: "bold" }}>Protocolo de transferencia de hipertexto (HTTP, Hypertext Transfer Protocol): puerto TCP 80.</li>
                        <li style={{ fontWeight: "bold" }}>Protocolo simple de transferencia de correo (SMTP, Simple Mail Transfer Protocol): puerto TCP 25.</li>
                        <li style={{ fontWeight: "bold" }}>Protocolo de oficina de correos (POP): puerto UDP 110.</li>
                        <li style={{ fontWeight: "bold" }}>Telnet: puerto TCP 23.</li>
                        <li style={{ fontWeight: "bold" }}>Protocolo de configuración dinámica de host: puerto UDP 67.</li>
                        <li style={{ fontWeight: "bold" }}>Protocolo de transferencia de archivos (FTP, File Transfer Protocol): puertos TCP 20 y 21.</li>

                    </ul>


                </Fieldset>

                <br />

                <div className="card">
                    <TabView>
                        <TabPanel header="DNS">
                            <p className="m-0">
                                El protocolo DNS define un servicio automatizado que coincide con nombres de recursos que tienen la dirección de red numérica  solicitada.  Incluye las consultas sobre formato, las respuestas y los formatos de datos. Las comunicaciones del protocolo DNS  utilizan un formato simple  llamado mensaje. Este formato de mensaje se utiliza para todos los tipos de solicitudes de clientes y  respuestas del servidor, mensajes de error y  para la transferencia de información de registro de recursos entre servidores.

                                DNS es un servicio cliente/servidor; sin embargo, difiere de los otros servicios cliente/servidor que estamos examinando. Mientras otros  servicios  utilizan un cliente que es una aplicación (como un explorador Web o un cliente de correo electrónico), el cliente DNS ejecuta  un servicio por sí  mismo. El cliente DNS, a veces denominado resolución DNS, admite resolución de nombre para otras aplicaciones  de red y servicios que lo  necesiten. </p>
                        </TabPanel>
                        <TabPanel header="HTTP">
                            <p className="m-0">
                                El protocolo de transferencia de hipertexto (HTTP), uno de los protocolos del grupo TCP/IP, se desarrolló en sus comienzos para  publicar y  recuperar las páginas HTML, y en la actualidad se utiliza para sistemas de información distribuidos y de colaboración.  HTTP se utiliza a través de la  World Wide Web para transferencia de datos y es uno de los protocolos de aplicación más utilizados.
                            </p>
                        </TabPanel>
                        <TabPanel header="FTP">
                            <p className="m-0">
                                El protocolo de transferencia de archivos (FTP) es otro protocolo de la capa de aplicación comúnmente utilizado. El FTP se desarrolló  para permitir  las transferencias de archivos entre un cliente y un servidor. Un cliente FTP es una aplicación que se ejecuta en una  computadora y se utiliza para  cargar y descargar archivos desde un servidor que ejecuta el daemon FTP (FTPd).

                                Para transferir los archivos en forma exitosa, el FTP requiere de dos conexiones entre cliente y servidor: una para comandos y  respuestas, otra para  la transferencia real de archivos. El cliente establece la primera conexión con el servidor en TCP puerto 21. Esta  conexión se utiliza para controlar el  tráfico, que consiste en comandos del cliente y respuestas del servidor.</p>
                        </TabPanel>
                        <TabPanel header="DHCP">
                            <p className="m-0">
                                DHCP permite a un host obtener una dirección IP en forma dinámica cuando se conecta a la red. Se realiza el contacto con el servidor  de DHCP y  se solicita una dirección. El servidor DHCP elije una dirección de un rango configurado de direcciones denominado "pool"  y se la asigna ("alquila") al  host por un período establecido. En redes locales más grandes o donde cambia frecuentemente la  población usuaria, es preferible el DHCP. Los  nuevos usuarios llegan con computadoras portátiles y necesitan una conexión. Otros  tienen nuevas estaciones de trabajo que necesitan conexión.  En lugar de tener direcciones IP asignadas por el administrador de red  en cada estación de trabajo, resulta más eficiente tener direcciones IP  asignadas en forma automática utilizando un DHCP. </p>
                        </TabPanel>
                        <TabPanel header="SMTP/POP">
                            <p className="m-0">
                                E-mail, el servidor de red más conocido, ha revolucionado la manera en que nos comunicamos, por su simpleza y velocidad. Inclusive  para  ejecutarse en una computadora o en otro dispositivo, los e-mails requieren de diversos servicios y aplicaciones. Dos ejemplos de  protocolos de capa  de aplicación son Protocolo de oficina de correos (POP) y Protocolo simple de transferencia de correo  (SMTP), que aparecen en la figura.  Como con HTTP, estos protocolos definen procesos cliente-servidor.

                                Cuando una persona escribe mensajes de correo electrónico, generalmente utiliza una aplicación denominada Agente de usuario de  correo (MUA) o  cliente de correo electrónico. MUA permite enviar los mensajes y colocar los mensajes recibidos en el buzón del  cliente; ambos procesos son  diferentes. Para recibir e-mails desde un servidor de e-mail, el cliente de correo electrónico puede utilizar  un POP. Al enviar un e-mail desde un  cliente o un servidor, se utilizan formatos de mensajes y cadenas de comando definidas por el  protocolo SMTP. En general, un cliente de correo  electrónico proporciona la funcionalidad de ambos protocolos dentro de una  aplicación.</p>
                        </TabPanel>
                   
                    </TabView>
                </div>



            </div>

        </>
    );
}

