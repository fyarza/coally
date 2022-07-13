/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import "./Oportunidades.css";
import { Typography } from "@mui/material";

type Props = {};

const Oportunidades = (props: Props) => {
  const [tab, setTab] = useState<number>(0);

  return (
    <div style={{ padding: "5rem 23rem" }}>
      <div className="section-one">
        <div className="input-contenedor" style={{ flex: 3 }}>
          <SearchIcon color="primary" />
          <input
            type="text"
            placeholder="Buscar oportunidades"
            className="input"
          />
        </div>
        <div className="input-contenedor" style={{ flex: 2 }}>
          <ExploreOutlinedIcon color="primary" />
          <input type="text" placeholder="Lugar" className="input" />
        </div>
        <div className="input-contenedor" style={{ flex: 1 }}>
          <ListOutlinedIcon color="primary" />
          <input type="text" placeholder="Filtros" className="input" />
        </div>
      </div>
      <div className="section-two">
        <p>Resultados</p>
        <p>000</p>
      </div>

      <div className="section-three">
        <div className="cards">
          <div className="card">
            <div className="card-header" />
            <div className="card-body">
              <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
                Ejemplo con dos{"\n"}
                lineas de texto
              </Typography>
              <Typography
                variant="subtitle1"
                color="GrayText"
                sx={{ marginBottom: "1rem" }}
              >
                Habilidades: Ingenierías {"\n"}
                innovación e intraemprendimiento
              </Typography>
              <a href="/">Ver más</a>
            </div>
            <div className="card-footer">
              <button>Aplicar</button>
            </div>
          </div>
          <div className="card">
            <div className="card-header" />
            <div className="card-body">
              <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
                Ejemplo con dos{"\n"}
                lineas de texto
              </Typography>
              <Typography
                variant="subtitle1"
                color="GrayText"
                sx={{ marginBottom: "1rem" }}
              >
                Habilidades: Ingenierías {"\n"}
                innovación e intraemprendimiento
              </Typography>
              <a href="/">Ver más</a>
            </div>
            <div className="card-footer">
              <button>Aplicar</button>
            </div>
          </div>
        </div>
        <div className="card2">
          <div>
            <div className="card-item-left">
              <Typography variant="subtitle2" gutterBottom>
                Total
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: "bold" }} gutterBottom>
                20
              </Typography>
            </div>
            <div className="card-item-left">
              <Typography
                variant="subtitle2"
                sx={{ color: "#c4c4c4" }}
                gutterBottom
              >
                En espera
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#c4c4c4" }}
                gutterBottom
              >
                10
              </Typography>
            </div>
          </div>
          <div>
            <div className="card-item-rigth">
              <Typography
                variant="subtitle2"
                sx={{ color: "#c4c4c4" }}
                gutterBottom
              >
                Iniciados
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#c4c4c4" }}
                gutterBottom
              >
                8
              </Typography>
            </div>
            <div className="card-item-rigth">
              <Typography
                variant="subtitle2"
                sx={{ color: "#c4c4c4" }}
                gutterBottom
              >
                Finalizados
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#c4c4c4" }}
                gutterBottom
              >
                2
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="section-four">
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Oportunidades en marcha
        </Typography>
        <div className="tab-header">
          <a onClick={() => setTab(0)}>
            <div className={`tab ${tab === 0 ? "tab-active" : ""}`}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#52575c" }}
              >
                Iniciados
              </Typography>
            </div>
          </a>
          <a onClick={() => setTab(1)}>
            <div className={`tab ${tab === 1 ? "tab-active" : ""}`}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#52575c" }}
              >
                En Espera
              </Typography>
            </div>
          </a>
          <a onClick={() => setTab(2)}>
            <div className={`tab ${tab === 2 ? "tab-active" : ""}`}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#52575c" }}
              >
                Finalizados
              </Typography>
            </div>
          </a>
        </div>
        {tab === 0 && (
          <div className="tab-body">
            <div className="card-body">
              <div className="card-item-one" />
              <div className="card-item-two">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Nombre oportunidad
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#000" }}>
                  Progreso: 20%
                </Typography>
              </div>
              <div className="card-item-three">
                <a href="#">Continuar</a>
              </div>
            </div>
            <div className="card-body">
              <div className="card-item-one" />
              <div className="card-item-two">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Nombre oportunidad
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#000" }}>
                  Progreso: 20%
                </Typography>
              </div>
              <div className="card-item-three">
                <a href="#">Continuar</a>
              </div>
            </div>
            <div className="card-body">
              <div className="card-item-one" />
              <div className="card-item-two">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Nombre oportunidad
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#000" }}>
                  Progreso: 20%
                </Typography>
              </div>
              <div className="card-item-three">
                <a href="#">Continuar</a>
              </div>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div className="tab-body">
            <div className="card-body">
              <div className="card-item-one" />
              <div className="card-item-two">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Nombre oportunidad
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#000" }}>
                  Progreso: 20%
                </Typography>
              </div>
              <div className="card-item-three">
                <a href="#">Iniciar</a>
              </div>
            </div>
            <div className="card-body">
              <div className="card-item-one" />
              <div className="card-item-two">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Nombre oportunidad
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#000" }}>
                  Progreso: 20%
                </Typography>
              </div>
              <div className="card-item-three">
                <a href="#">Iniciar</a>
              </div>
            </div>
            <div className="card-body">
              <div className="card-item-one" />
              <div className="card-item-two">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Nombre oportunidad
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#000" }}>
                  Progreso: 20%
                </Typography>
              </div>
              <div className="card-item-three">
                <a href="#">Iniciar</a>
              </div>
            </div>
          </div>
        )}
        {tab === 2 && (
          <div className="tab-body">
            <div className="card-body">
              <div className="card-item-one" />
              <div className="card-item-two">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Nombre oportunidad
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#000" }}>
                  Progreso: 20%
                </Typography>
              </div>
              <div className="card-item-three">
                <a href="#" style={{ color: "#3c3e6b" }}>
                  <CheckBoxIcon />
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="card-item-one" />
              <div className="card-item-two">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Nombre oportunidad
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#000" }}>
                  Progreso: 20%
                </Typography>
              </div>
              <div className="card-item-three">
                <a href="#" style={{ color: "#3c3e6b" }}>
                  <CheckBoxIcon />
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="card-item-one" />
              <div className="card-item-two">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Nombre oportunidad
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#000" }}>
                  Progreso: 20%
                </Typography>
              </div>
              <div className="card-item-three">
                <a href="#" style={{ color: "#3c3e6b" }}>
                  <CheckBoxIcon />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Oportunidades;
