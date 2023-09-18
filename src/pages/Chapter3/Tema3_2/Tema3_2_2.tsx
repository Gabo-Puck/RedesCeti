import { Image } from "primereact/image";
import React from "react";
import Subtitle from "../../../components/Lesson/Subtitle";
import { Fieldset } from "primereact/fieldset";

function Tema3_2_2() {
  return (
    <div>
      <p>
        En este sistema se utiliza el espacio aéreo como medio físico de
        transmisión. La información se transmite de forma digital a través de
        las ondas de radio de muy corta longitud (unos pocos centímetros).
        Pueden direccionarse múltiples canales o múltiples estaciones dentro de
        un enlace dado, o pueden establecerse enlaces punto a punto.
      </p>
      <p>
        La transmisión es en línea recta (lo que esta a la vista) y por lo tanto
        se ve afectada por accidentes geográficos , edificios, bosques, mal
        tiempo, etc. El alcance promedio es de 40 km. en la tierra. Una de las
        principales ventajas importantes es la capacidad de poder transportar
        miles de canales de voz a grandes distancias a través de repetidoras, a
        la vez que permite la transmisión de datos en su forma natural.
      </p>
      <Image
        src="https://leandrojhumbrial.files.wordpress.com/2014/11/14cab-6.png"
        style={{ width: "100%", height: "auto" }}
        preview
      />
      <div className="card">
        <Fieldset legend="Caracteristicas">
          <p className="m-0">
            <ul
              style={{ listStyle: "initial", marginLeft: "40px" }}
              className="m-0"
            >
              <li>Ancho de banda: entre 300 a 3.000 MHz.</li>
              <li>
                Algunos canales de banda superior, entre 3'5 GHz y 26 GHz.
              </li>
              <li>
                Es usado como enlace entre una empresa y un centro que funcione
                como centro de conmutación del operador, o como un enlace entre
                redes LAN.
              </li>
              <li>
                Para la comunicación de microondas terrestres se deben usar
                antenas parabólicas.
              </li>
              <li>
                Estas deben estar alineadas o tener visión directa entre ellas.
              </li>
              <li>Entre mayor sea la altura mayor el alcance.</li>
              <li>Perdidas de datos, interferencias.</li>
              <li>Sensible a las condiciones atmosféricas.</li>
            </ul>
          </p>
        </Fieldset>
      </div>
    </div>
  );
}

export default Tema3_2_2;
