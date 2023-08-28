import { Panel } from "primereact/panel";
import React from "react";

function Tema1_2_3() {
  return (
    <div>
      <Panel header="¿Que son los servicios de redes?" toggleable>
        <p>
          Los servicios de red son configurados en redes locales corporativas
          para mantener la seguridad y la operación amigable de los recursos.
          También estos servicios ayudan a la red local a funcionar sin
          problemas y eficientemente. Las redes locales corporativas usan
          servicios de red como DNS (Domain Name System) para dar nombres a las
          direcciones IP y MAC (las personas recuerdan más fácilmente nombres
          como"nm.ln" que números como "210.121.67.18"), y DHCP para asegurar
          que todos en la red tienen una dirección IP válida.
        </p>
      </Panel>
      <Panel header="DHCP (Dynamic Host Configuration Protocol)" toggleable>
        <p>
          Cuando hablamos de servicios de red, uno de los más importantes es el
          servicio DHCP. Es el servicio cliente/servidor que podemos habilitar
          en nuestra red para poder obtener IP de manera automática y hacer la
          gestión más dinámica.
        </p>
        <p>Los parámetros que se pueden obtener de un servidor DHCP son:</p>
        <ul style={{ listStyle: "initial", marginLeft: "40px" }}>
          <li>IP</li>
          <li>Máscara de subred</li>
          <li>Gateway</li>
          <li>DNS primarios</li>
          <li>DNS secundarios</li>
          <li>Otras opciones avanzadas</li>
        </ul>
        <p>
          El DHCP reduce la administración de la configuración de la red, y
          también permite excluir espacios de redes en el scope que se haya
          configurado, lo que nos ofrece bastante versatilidad en nuestro
          esquema de direccionamiento.
        </p>
      </Panel>
      <Panel header="RDP (Remote Desktop Connection)" toggleable>
        <p>
          Otro de los servicios importantes es el servicio de conexión remota o
          RDP, que utiliza el puerto 3389 y permite conectar a los usuarios de
          las redes externas en la red interna de manera securizada.
        </p>
        <p>
          Esto se realiza a través de una VPN y la aplicación nativa de Windows
          llamada Remote Desktop Connection, introduciendo la IP del ordenador y
          las credenciales del dominio, podremos acceder a la red remota.
        </p>
      </Panel>
      <Panel header="DNS (Domain Name System)" toggleable>
        <p>
          El DNS es otro servicio muy importante, que hace la traducción de
          nombres a direcciones IP. Sin este servicio sería imposible seguir
          tantas direcciones de hosts, porque sería imposible aprendernos todas
          las IPs que existen.
        </p>
        <p>
          Para consultar una IP, por ejemplo, Google, tendríamos que colocar la
          dirección 80.58.61.254.
        </p>
        <p>
          También existe un comando muy utilizado para este tipo de resolución
          de nombres o para probar al hacer troubleshooting de servicios DNS,
          que se llama nslookup.
        </p>
        <p>
          Al introducir el mismo en el command prompt o símbolo de sistema, nos
          pide la dirección, por ejemplo, Google, y no resuelve cuál es la IP
          detrás de ese nombre.
        </p>
      </Panel>
    </div>
  );
}

export default Tema1_2_3;
