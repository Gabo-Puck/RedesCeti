import { Divider } from "primereact/divider";
import { Panel } from "primereact/panel";
import React from "react";

function Tema1_2_1() {
  return (
    <div>
      <Panel header="Las bases de las redes: switches, routers y access points inalámbricos">
        <p>
          Los switches, los routers y los access points inalámbricos son los
          conceptos básicos esenciales de las redes. A través de ellos, los
          dispositivos conectados a su red pueden comunicarse entre sí y con
          otras redes, como Internet. Los switches, routers y access points
          inalámbricos realizan funciones muy diferentes dentro de una red.
        </p>
      </Panel>
      <Panel header="Switches">
        <p>
          Los switches son la base de la mayoría de las redes empresariales. Un
          switch actúa como un controlador, que conecta computadoras, impresoras
          y servidores a una red en un edificio o campus.
        </p>
        <p>
          Los switches permiten que los dispositivos en su red se comuniquen
          entre sí, así como con otras redes, y creen una red de recursos
          compartidos. Mediante el uso compartido de información y la asignación
          de recursos, los switches ahorran dinero y aumentan la productividad.
          Hay dos tipos básicos de switches para elegir como parte de sus
          conceptos básicos de red: en las instalaciones y administrados en la
          nube.
        </p>
        <ul
          style={{ listStyle: "initial", marginLeft: "40px" }}
          className="m-0"
        >
          <li>
            Un conmutador administrado en las instalaciones le permite
            configurar y monitorear su LAN, y le proporciona un contrul más
            estricto de su tráfico de red.
          </li>
          <li>
            Un switch administrado en la nube puede simplificar la
            administración de redes. Obtiene una interfaz de usuario simple,
            administración completa de varios sitios y actualizaciones
            automáticas enviadas directamente al switch
          </li>
        </ul>
      </Panel>
      <Panel header="Routers">
        <p>
          Los routers conectan varias redes. También conectan computadoras en
          esas redes a Internet. Los routers permiten que todas las computadoras
          en red compartan una única conexión a Internet, lo que ahorra dinero.
        </p>
        <p>
          Un router actúa como distribuidor. Analiza los datos que se envían a
          través de una red, elige la mejor ruta para que se desplacen los datos
          y los envía en su camino.
        </p>
        <p>
          Los routers conectan su empresa con el mundo, protegen la información
          contra amenazas de seguridad e incluso pueden decidir qué computadoras
          tienen prioridad sobre otros.
        </p>
        <p>
          Más allá de esas funciones básicas de red, los routers tienen
          características adicionales para hacer que las redes sean más fáciles
          o más seguras. Según sus necesidades de seguridad, por ejemplo, puede
          elegir un router con un firewall, una red privada virtual (VPN) o un
          sistema de comunicaciones con protocolo de Internet (IP).
        </p>
      </Panel>
      <Panel header="Access Points">
        <p>
          Un access point permite que los dispositivos se conecten a la red
          inalámbrica sin cables. Una red inalámbrica facilita la conexión de
          dispositivos nuevos y les brinda soporte flexible a los trabajadores
          móviles.
        </p>
        <p>
          Un access point actúa como un amplificador para su red. Mientras que
          un router proporciona el ancho de banda, un access point amplía ese
          ancho de banda para que la red pueda admitir muchos dispositivos, y
          esos dispositivos pueden acceder a la red desde más lejos.
        </p>
        <p>
          Sin embargo, un access point no se limita a extender la red Wi-Fi.
          También puede brindar datos valiosos sobre los dispositivos conectados
          a la red, proporcionar seguridad proactiva y responder a muchos otros
          fines prácticos.
        </p>
        <p>
          * Los access points son compatibles con diferentes estándares IEEE.
          Cada estándar es una modificación que recibe aprobación después de
          cierto tiempo. Los estándares funcionan con diversas frecuencias,
          proporcionan distintos anchos de banda y admiten distintas cantidades
          de canales.
        </p>
      </Panel>
    </div>
  );
}

export default Tema1_2_1;
