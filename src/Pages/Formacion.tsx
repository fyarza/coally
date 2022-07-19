import React from "react";
import "./Formacion.css";
import CardFormacion from "../Components/CardFormacion";
import Search from "../Components/Search";

type Props = {};

const Formacion = (props: Props) => {
  return (
    <div className="formacion" style={{ padding: "5rem", maxWidth: 1000 }}>
      <h1>Formación</h1>
      <div className="section">
        <div className="header">
          <h2>Plataforma Coally</h2>
          <div>
            <Search />
          </div>
        </div>
        <div className="one">
          <div>
            <img src="https://fakeimg.pl/450x250/" />
          </div>
          <div className="list-card">
            <CardFormacion />
            <CardFormacion />
            <CardFormacion />
          </div>
        </div>
        <div className="two">
          <div className="list-curso">
            <h2>Cursos</h2>
            <h2>Cursos</h2>
            <h2>Cursos</h2>
            <h2>Cursos</h2>
            <h2>Cursos</h2>
            <h2>Cursos</h2>
            <h2>Cursos</h2>
            <h2>Cursos</h2>
          </div>
        </div>

        <div className="three">
          <CardFormacion />
          <CardFormacion />
          <CardFormacion />
          <CardFormacion />
          <CardFormacion />
          <CardFormacion />
          <CardFormacion />
          <CardFormacion />
          <CardFormacion />
          <CardFormacion />
          <CardFormacion />
          <CardFormacion />
        </div>
      </div>
    </div>
  );
};

export default Formacion;
