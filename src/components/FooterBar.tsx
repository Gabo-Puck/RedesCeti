import React, { useState } from "react";
import { Footer } from "flowbite-react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import AboutInfo from "./FooterInfo/AboutInfo";
import PolicityInfo from "./FooterInfo/PolicityInfo";
import LicensingInfo from "./FooterInfo/LicensingInfo";
import ContactInfo from "./FooterInfo/ContactInfo";

function FooterBar() {
  const [visibleAbout, setVisibleAbout] = useState<boolean>(false);
  const [visiblePrivacity, setVisiblePrivacity] = useState<boolean>(false);
  const [visibleLicensing, setVisibleLicensing] = useState<boolean>(false);
  const [visibleContact, setVisibleContact] = useState<boolean>(false);

  return (
    <div>
      <Dialog
        header="Acerca de:"
        visible={visibleAbout}
        maximizable
        style={{ width: "90vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => setVisibleAbout(false)}
        // footer={footerContent}
      >
        <AboutInfo />
      </Dialog>

      <Dialog
        header="Politicas de Privacidad:"
        visible={visiblePrivacity}
        maximizable
        style={{ width: "90vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => setVisiblePrivacity(false)}
        // footer={footerContent}
      >
        <PolicityInfo />
      </Dialog>

      <Dialog
        header="Licencias:"
        visible={visibleLicensing}
        maximizable
        style={{ width: "90vw" }}
        onHide={() => setVisibleLicensing(false)}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        // footer={footerContent}
      >
        <LicensingInfo />
      </Dialog>

      <Dialog
        header="Contacto:"
        visible={visibleContact}
        maximizable
        style={{ width: "90vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => setVisibleContact(false)}
        // footer={footerContent}
      >
        <ContactInfo />
      </Dialog>

      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.LinkGroup>
              <Button
                label="Acerca de"
                link
                onClick={() => setVisibleAbout(true)}
              />
              <Button
                label="Politicas de Privacidad"
                link
                onClick={() => setVisiblePrivacity(true)}
              />
              <Button
                label="Licencias"
                link
                onClick={() => setVisibleLicensing(true)}
              />
              <Button
                label="Contacto"
                link
                onClick={() => setVisibleContact(true)}
              />
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.LinkGroup>
            <Footer.Copyright
              by="Flowbite™"
              href="https://www.flowbite-react.com"
              year={2023}
            />
            <Footer.Copyright
              by="PrimeReact™"
              href="https://primereact.org"
              year={2023}
            />
            <Footer.Copyright
              by="Centro de Enseñanzas Tecnica Industrial™"
              href="https://www.colomos.ceti.mx"
              year={2023}
            />
          </Footer.LinkGroup>
        </div>
      </Footer>
    </div>
  );
}

export default FooterBar;
