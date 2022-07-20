import React from "react";
import "./Configuracion.css";
import AccordionComponent from "../Components/AccordionComponent";
import { Typography } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

type Props = {};

const Configuracion = (props: Props) => {
  return (
    <div className="configuracion" style={{ padding: "5rem", maxWidth: 1000 }}>
      <h1>Configuración</h1>
      <div className="section">
        <div className="header">
          <h2>De la Cuenta </h2>
        </div>
        <div className="one">
          <div className="list-card">
            <AccordionComponent title="Preferencia de la cuenta">
              <AccordionComponent title="Preferencia del sitio">
                <div>
                  <AccordionComponent title="Idioma">
                    <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam
                      mattis feugiat. Aliquam eget maximus est, id dignissim
                      quam.
                    </Typography>
                  </AccordionComponent>
                  <AccordionComponent title="Mostrar las fotos del perfil">
                    <>
                      <AccordionComponent
                        title="Nadie"
                        icon={
                          <RadioButtonCheckedIcon sx={{ color: "#c4c4c4" }} />
                        }
                      >
                        <Typography>
                          Nulla facilisi. Phasellus sollicitudin nulla et quam
                          mattis feugiat. Aliquam eget maximus est, id dignissim
                          quam.
                        </Typography>
                      </AccordionComponent>
                      <AccordionComponent
                        title="Todos en Coally"
                        icon={
                          <RadioButtonCheckedIcon sx={{ color: "#1e2051" }} />
                        }
                      >
                        <Typography>
                          Nulla facilisi. Phasellus sollicitudin nulla et quam
                          mattis feugiat. Aliquam eget maximus est, id dignissim
                          quam.
                        </Typography>
                      </AccordionComponent>
                    </>
                  </AccordionComponent>
                  <AccordionComponent title="Reproducir videos automaticamente">
                    <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam
                      mattis feugiat. Aliquam eget maximus est, id dignissim
                      quam.
                    </Typography>
                  </AccordionComponent>
                </div>
              </AccordionComponent>
            </AccordionComponent>
            <AccordionComponent title="Inicio de sesión y seguridad">
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionComponent>
            <AccordionComponent title="Visibilidad">
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionComponent>
            <AccordionComponent title="Comunicaciones">
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionComponent>
          </div>
        </div>
        <div className="header">
          <h2>Sobre Coally </h2>
        </div>
        <div className="one">
          <div className="list-card">
            <AccordionComponent title="Contátenos">
              <AccordionComponent title="Preferencia del sitio">
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionComponent>
            </AccordionComponent>
            <AccordionComponent title="Preguntas frecuentes">
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionComponent>
            <AccordionComponent title="Politica de privacidad">
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionComponent>
            <AccordionComponent title="Términos y condiciones">
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;
