import { Fieldset } from "primereact/fieldset";
import { Image } from "primereact/image";
import React from "react";

function Tema3_2_4() {
  return (
    <div>
      <p>
        Las señales de rayo láser son un tipo de medio de transmisión no guiado
        que se utiliza para transmitir información a través de un haz de luz
        láser. Los datos son codificados y modulados con el haz de luz, y el
        receptor recibe el haz con un detector óptico, restaura la señal,
        decodifica los datos y entrega la información.
      </p>
      <p>
        La señalización óptica con láseres es inherentemente unidireccional, lo
        que significa que cada edificio necesita su propia unidad inalámbrica
        óptica, cada una de las cuales consta de un transceptor óptico con un
        transmisor (láser) y un receptor (fotodetector) para proporcionar una
        comunicación bidireccional o full-duplex
      </p>
      <p>
        La tecnología láser se postula como una posible alternativa a las redes
        inalámbricas tradicionales. La comunicación cuántica también es una
        opción en desarrollo
      </p>
      <Image
        src="https://www.nobbot.com/wp-content/uploads/2017/01/Primera-descarga-de-imagenes-en-el-espacio-con-conexion-laser-de-gigabit.jpg"
        style={{ width: "100%", height: "auto" }}
        preview
      />
    </div>
  );
}

export default Tema3_2_4;
