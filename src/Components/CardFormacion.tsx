import React from "react";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import "./CardFormacion.css";

export default function CardFormacion() {
  return (
    <div className="card-formacion">
      <div className="card-header">
        <img src="https://fakeimg.pl/120/" alt="" />
      </div>
      <div className="card-body">
        <p>Sales Development Representative-Outbound</p>
      </div>
      <div className="card-footer">
        <SystemUpdateAltIcon />
        <p>Descargar</p>
      </div>
    </div>
  );
}
