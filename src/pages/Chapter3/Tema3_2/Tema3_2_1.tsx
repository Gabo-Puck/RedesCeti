import { Fieldset } from "primereact/fieldset";
import { Image } from "primereact/image";
import React from "react";

function Tema3_2_1() {
  return (
    <div>
      <div className="card">
        <Fieldset legend="¿Qué es Wi-Fi (red inalámbrica) frente a una red cableada?">
          <p className="m-0">
            Una red inalámbrica permite que los dispositivos permanezcan
            conectados a la red, pero sin usar cables. Los puntos de acceso
            amplifican las señales de Wi-Fi, de manera que un dispositivo puede
            estar lejos de un router, pero permanecer conectado a la red. Cuando
            se conecta a una zona Wi-Fi en un café, un hotel, una sala de estar
            de aeropuerto u otro lugar público, se conecta a la red inalámbrica
            de dicha empresa. Una red cableada usa cables para conectar
            dispositivos, como computadoras portátiles o de escritorio, a
            Internet u otras redes. Una red cableada tiene algunas desventajas
            respecto a las redes inalámbricas. La mayor desventaja es que los
            dispositivos deben estar conectados al router. Las redes cableadas
            más comunes usan cables con un extremo conectado al puerto Ethernet
            del router de red y el otro extremo conectado a una computadora u
            otro dispositivo.
          </p>
        </Fieldset>
      </div>
      <div className="card">
        <Fieldset legend="¿Qué beneficios brinda una red inalámbrica Wi-Fi?">
          <p className="m-0">
            <ul
              style={{ listStyle: "initial", marginLeft: "40px" }}
              className="m-0"
            >
              <li>
                Comodidad: acceda a los recursos de red desde cualquier
                ubicación del área de cobertura de la red inalámbrica o desde
                cualquier zona Wi-Fi.
              </li>
              <li>
                Movilidad: no está atado al escritorio, como sí sucede con una
                conexión cableada. Usted y sus empleados pueden conectarse en
                las reuniones de sala de conferencias, por ejemplo.
              </li>
              <li>
                Productividad: el acceso inalámbrico a Internet y a las
                aplicaciones y los recursos esenciales de la empresa ayuda al
                personal a cumplir su trabajo y fomenta la colaboración.
              </li>
              <li>
                Fácil configuración: no hace falta pasar cables, por lo que la
                instalación puede ser rápida y rentable.
              </li>
              <li>
                Capacidad de expansión: puede ampliar fácilmente las redes
                inalámbricas con los equipos existentes, mientras que una red
                cableada puede requerir cableado adicional.
              </li>
              <li>
                Seguridad: los avances en redes inalámbricas proporcionan
                sólidas protecciones de seguridad.
              </li>
              <li>
                Costo reducido: como las redes inalámbricas eliminan o reducen
                los gastos de cableado, pueden costar menos que las redes
                cableadas para su operación.
              </li>
            </ul>
          </p>
        </Fieldset>
      </div>
      <Image
        src="https://www.cisco.com/c/es_mx/solutions/small-business/resource-center/networking/wireless-network/jcr:content/Grid/article_a96b_copy/layout-article/widenarrow_7239/WN-Wide-1/spotlight_8c64.img.jpg/1586760347092.jpg"
        style={{ width: "100%", height: "auto" }}
        preview
      />
    </div>
  );
}

export default Tema3_2_1;
