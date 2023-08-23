import React from "react";
import NavBar from "../../components/NavBar";
import FooterBar from "../../components/FooterBar";
import { Card } from "primereact/card";
import ComunicacionComputadora from "../../assets/images/DiagramaComunicacionComputadora.png";

function ElementosDeComunicacionPage() {
  return (
    <div>
      <NavBar />
      <h1 style={{ fontWeight: "bold", textAlign: "center", fontSize: "20px" }}>
        Elementos de comunicacion y comunicacion de mensajes.
      </h1>
      <Card title="Aspectos Basicos de la comunicación.">
        <div
          className="col-12 md:col-6 overflow-hidden"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={ComunicacionComputadora}
            alt="hero-1"
            className="md:ml-auto block md:h-full"
          />
        </div>
      </Card>
      <FooterBar />
    </div>
  );
}

export default ElementosDeComunicacionPage;
