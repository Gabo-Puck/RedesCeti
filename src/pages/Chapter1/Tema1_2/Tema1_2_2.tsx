import { Image } from "primereact/image";
import { Panel } from "primereact/panel";
import React from "react";

function Tema1_2_2() {
  return (
    <div>
      <Panel header="Medidos de Red" toggleable>
        <p>
          Hay varios tipos de medios de red que se utilizan para conectar
          dispositivos en una red. Algunos de los medios de red más comunes
          incluyen el cable de cobre, el cable de fibra óptica y la conexión
          inalámbrica
        </p>
      </Panel>
      <Panel header="Cable de Cobre" toggleable>
        <p>
          El cableado de cobre es el tipo más común de cableado utilizado en las
          redes hoy en día. De hecho, el cableado de cobre no es solo un tipo de
          cable. Hay tres tipos diferentes de cableado de cobre que se utilizan
          en situaciones específicas.
        </p>
        <p>
          Las redes usan medios de cobre porque son económicos, fáciles de
          instalar y tienen baja resistencia a la corriente eléctrica. Sin
          embargo, los medios de cobre están limitados por la distancia y la
          interferencia de la señal.
        </p>
        <p>
          Los datos se transmiten en cables de cobre como pulsos eléctricos. Un
          detector en la interfaz de red de un dispositivo de destino debe
          recibir una señal que se pueda decodificar con éxito para que coincida
          con la señal enviada. Sin embargo, cuanto más avanza la señal, más se
          deteriora. Esto se conoce como atenuación de señal. Por esta razón,
          todos los medios de cobre deben seguir estrictas limitaciones de
          distancia según lo especificado por los estándares de guía.
        </p>
        <p>
          Los valores de tiempo y voltaje de los pulsos eléctricos también son
          susceptibles a la interferencia de dos fuentes:
        </p>
        <ul style={{ listStyle: "initial", marginLeft: "40px" }}>
          <li>
            <p style={{ fontWeight: "bold" }}>
              Interferencia electromagnética (EMI) o interferencia de
              radiofrecuencia (RFI):
            </p>
            Las posibles fuentes de EMI y RFI incluyen las ondas de radio y
            dispositivos electromagnéticos como las luces fluorescentes o los
            motores eléctricos.
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>Crosstalk:</p>
            Se trata de una perturbación causada por los campos eléctricos o
            magnéticos de una señal de un hilo a la señal de un hilo adyacente.
          </li>
        </ul>
        <p>
          Dentro de los medios de cobre existen tres tipos principales de medios
          de cobre que se utilizan en las redes:
        </p>
        <ul style={{ listStyle: "initial", marginLeft: "40px" }}>
          <li>Par trenzado no blindado (UTP)</li>
          <li>Par trenzado blindado (STP)</li>
          <li>Coaxial</li>
        </ul>

        <Panel header="Cable de par trenzado no blindado (UTP)" toggleable>
          <p>
            El cableado UTP, se utiliza para interconectar hosts de red con
            dispositivos intermediarios de red, como switches y routers.
          </p>
          <p>
            En las redes LAN, el cable UTP consta de cuatro pares de hilos
            codificados por colores que están trenzados entre sí y recubiertos
            con un revestimiento de plástico flexible que los protege contra
            daños físicos menores. El trenzado de los hilos ayuda a proteger
            contra las interferencias de señales de otros hilos.
          </p>
          <Image
            src="https://ccnadesdecero.es/wp-content/uploads/2017/11/Ejemplo-cable-UTP.png"
            style={{ width: "100%", height: "auto" }}
            preview
          />
          <p style={{ fontWeight: "bold" }}>Tipos de Cables UTP:</p>
          <ul style={{ listStyle: "initial", marginLeft: "40px" }}>
            <li>
              <p style={{ fontWeight: "bold" }}>
                Cable directo de Ethernet (Straight-through):
              </p>
              Por lo general, se utiliza para interconectar un host con un
              switch y un switch con un router.
            </li>
            <li>
              <p style={{ fontWeight: "bold" }}>
                Cable cruzado Ethernet (Crossover):
              </p>
              Cable utilizado para interconectar dispositivos similares. Por
              ejemplo, switch a un switch, un host a un host o un router a un
              router.
            </li>
            <li>
              <p style={{ fontWeight: "bold" }}>Cable de consola (Rollover):</p>
              Cable exclusivo de Cisco utilizado para conectar una estación de
              trabajo a un puerto de consola de un router o de un switch.
            </li>
          </ul>
          <Image
            src="https://ccnadesdecero.es/wp-content/uploads/2017/11/Est%C3%A1ndares-T568A-y-T568B.png"
            style={{ width: "100%", height: "auto" }}
            preview
          />
        </Panel>
        <Panel header="Par trenzado blindado (STP))" toggleable>
          <p>
            El par trenzado blindado (STP) proporciona una mejor protección
            contra ruido que el cableado UTP. Sin embargo, en comparación con el
            cable UTP, el cable STP es mucho más costoso y difícil de instalar.
            Al igual que el cable UTP, el STP utiliza un conector RJ-45.
          </p>
          <p>
            El cable STP combina las técnicas de blindaje para contrarrestar la
            EMI y la RFI, y el trenzado de hilos para contrarrestar el
            crosstalk. Para obtener los máximos beneficios del blindaje, los
            cables STP se terminan con conectores de datos STP blindados
            especiales. Si el cable no se conecta a tierra correctamente, el
            blindaje puede actuar como antena y captar señales no deseadas.
          </p>
          <Image
            src="https://ccnadesdecero.es/wp-content/uploads/2017/11/Cable-par-trenzado-blindado-STP.png"
            style={{ width: "100%", height: "auto" }}
            preview
          />
          <p>
            Los números en la figura identifican algunas características clave
            del cable de par trenzado blindado:
          </p>
          <ul style={{ listStyle: "numbers", marginLeft: "40px" }}>
            <li>Envoltura externa</li>
            <li>Escudo trenzado o de aluminio</li>
            <li>Escudos de aluminio</li>
            <li>Pares trenzados</li>
          </ul>
        </Panel>
        <Panel header="Coaxial" toggleable>
          <p>
            El cable coaxial, coaxcable o coax obtiene su nombre del hecho de
            que hay dos conductores que comparten el mismo eje (dos conductores
            concéntricos).
          </p>
          <Image
            src="https://ccnadesdecero.es/wp-content/uploads/2017/11/Cable-coaxial-1.png"
            style={{ width: "100%", height: "auto" }}
            preview
          />
          <p>
            Si bien el cable UTP esencialmente reemplazó al cable coaxial en las
            instalaciones de Ethernet modernas, el diseño del cable coaxial se
            adaptó para las instalaciones inalámbricas y las instalaciones de
            Internet por cable.
          </p>
        </Panel>
      </Panel>
      <Panel header="Cable de Fibra Óptica" toggleable>
        <p>
          En la actualidad, el cableado de fibra óptica se utiliza en cuatro
          tipos de industrias:
        </p>
        <ul style={{ listStyle: "initial", marginLeft: "40px" }}>
          <li>
            <p style={{ fontWeight: "bold" }}>Redes empresariales: </p>
            La fibra óptica se utiliza para aplicaciones de cableado troncal y
            para la interconexión de dispositivos de infraestructura.
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>Fibre-to-the-Home (FTTH):</p>
            La fibra hasta el hogar se utiliza para proporcionar servicios de
            banda ancha siempre activos a hogares y pequeñas empresas.
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>Redes de largo alcance: </p>
            Los proveedores de servicios las utilizan para conectar países y
            ciudades.
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>Redes por cable submarinas: </p>
            Se utilizan para proporcionar soluciones confiables de alta
            velocidad y alta capacidad que puedan subsistir en entornos
            submarinos adversos por distancias transoceánicas.
          </li>
        </ul>
        <p>Entre las propiedades del cableado de fibra óptica se destaca:</p>
        <ul style={{ listStyle: "initial", marginLeft: "40px" }}>
          <li>
            Transmite datos a través de mayores distancias y a anchos de banda
            mayores que cualquier otro medio de red
          </li>
          <li>
            Transmite señales con menos atenuación y es totalmente inmune EMI y
            RFI.
          </li>
          <li>
            Hilos de fibra de vidrio flexibles pero finos extremadamente delgado
            y transparente de vidrio muy puro, no mucho más grueso que un
            cabello humano.
          </li>
          <li>
            Los bits se codifican en la fibra como impulsos de luz. El cable de
            fibra óptica actúa como una guía de ondas, o una “tubería de luz”,
            para transmitir la luz entre los dos extremos con una pérdida mínima
            de la señal.
          </li>
        </ul>
        <Panel header="Tipos de Fibra Óptica" toggleable>
          <ul style={{ listStyle: "initial", marginLeft: "40px" }}>
            <li>
              <p style={{ fontWeight: "bold" }}>Fibra óptica monomodo (SMF)</p>
              <p>
                SMF consta de un núcleo muy pequeño y utiliza tecnología láser
                cara para enviar un solo rayo de luz, como se muestra en la
                imagen. SMF es popular en situaciones de larga distancia que
                abarcan cientos de kilómetros, como las requeridas en
                aplicaciones de telefonía de larga distancia y televisión por
                cable.
              </p>
              <Image
                src="https://ccnadesdecero.es/wp-content/uploads/2017/11/Fibra-%C3%B3ptica-monomodo-o-SMF.png"
                style={{ width: "100%", height: "auto" }}
                preview
              />
            </li>
            <li>
              <p style={{ fontWeight: "bold" }}>Fibra óptica multimodo (MMF)</p>
              <p>
                MMF consiste en un núcleo más grande y utiliza emisores LED para
                enviar pulsos de luz. Específicamente, la luz de un LED ingresa
                a la fibra multimodo en diferentes ángulos, como se muestra en
                la imagen. Popular en LAN porque pueden ser alimentados por LED
                de bajo costo. Proporciona ancho de banda de hasta 10 Gb/s en
                longitudes de enlace de hasta 550 metros.
              </p>
              <Image
                src="https://ccnadesdecero.es/wp-content/uploads/2017/11/Fibra-%C3%B3ptica-multimodo-o-MMF.png"
                style={{ width: "100%", height: "auto" }}
                preview
              />
            </li>
          </ul>
        </Panel>
      </Panel>
      <Panel header="Medios Inalámbricos" toggleable>
        <p>
          Estas comunicaciones de datos se realizan mediante frecuencias de
          radio y de microondas. La tecnología inalámbrica es importante en las
          siguientes áreas:
        </p>
        <ul style={{ listStyle: "initial", marginLeft: "40px" }}>
          <li>
            <p style={{ fontWeight: "bold" }}>Área de cobertura:</p>
            <p>
              Existen determinados materiales de construcción utilizados en
              edificios y estructuras, además del terreno local, que limitan la
              cobertura efectiva.
            </p>
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>Interferencia:</p>
            <p>
              Puede verse afectada por dispositivos comunes como teléfonos
              inalámbricos domésticos, algunos tipos de luces fluorescentes,
              hornos de microondas y otras comunicaciones inalámbricas.
            </p>
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>Seguridad:</p>
            <p>
              Dispositivos y usuarios sin autorización para acceder a la red
              pueden obtener acceso a la transmisión.
            </p>
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>Medio compartido:</p>
            <p>
              WLAN opera en half-duplex, lo que significa que solo un
              dispositivo puede enviar o recibir a la vez. El medio inalámbrico
              se comparte entre todos los usuarios inalámbricos. Cuantos más
              usuarios necesiten acceso a la WLAN de forma simultánea, cada uno
              obtendrá menos ancho de banda
            </p>
          </li>
        </ul>
        <Panel header="Tipos de medios Inalámbricos" toggleable>
          <p>
            Los estándares de la industria IEEE y de telecomunicaciones para
            comunicaciones de datos inalámbricas cubren tanto el enlace de datos
            como las capas físicas. En cada uno de estos estándares, las
            especificaciones de la capa física se aplican a áreas que incluyen
            lo siguiente:
          </p>
          <ul style={{ listStyle: "initial", marginLeft: "40px" }}>
            <li>Codificación de datos a señales de radio.</li>
            <li>Frecuencia y potencia de transmisión.</li>
            <li>Recepción de señal y requisitos de decodificación.</li>
            <li>Diseño y construcción de antenas.</li>
          </ul>
          <p style={{ fontWeight: "bold" }}>Estandares inálambricos:</p>
          <ul style={{ listStyle: "initial", marginLeft: "40px" }}>
            <li>
              <p style={{ fontWeight: "bold" }}>
                Wi-Fi (Estándar IEEE 802.11):
              </p>
              Tecnologías de red inalámbrica (WLAN) utiliza un protocolo por
              contención denominado acceso múltiple por detección de portadora
              con prevención de colisiones (CSMA/CA)
            </li>
            <li>
              <p style={{ fontWeight: "bold" }}>
                Bluetooth (Estándar IEEE 802.15):
              </p>
              Estándar de red de área personal inalámbrica (WPAN) utiliza un
              proceso de emparejamiento de dispositivos entre una distancia de
              1-100 metros.
            </li>
            <li>
              <p style={{ fontWeight: "bold" }}>
                Wi-Max (Estándar IEEE 802.16):
              </p>
              Conocida como Interoperabilidad mundial para el acceso por
              microondas (WiMax). Utiliza una topología punto a multipunto para
              proporcionar acceso de banda ancha inalámbrico.
            </li>
            <li>
              <p style={{ fontWeight: "bold" }}>Zigbee (IEEE 802.15.4):</p>
              Zigbee es una especificación utilizada para comunicaciones de baja
              velocidad de datos y baja potencia. Está destinado a aplicaciones
              que requieren un rango corto, velocidades de datos bajas y una
              batería de larga duración. Zigbee se usa típicamente para entornos
              industriales y de Internet de las cosas (IoT) como switches de luz
              inalámbricos y recolección de datos de dispositivos médicos.
            </li>
          </ul>
        </Panel>
      </Panel>
    </div>
  );
}

export default Tema1_2_2;
