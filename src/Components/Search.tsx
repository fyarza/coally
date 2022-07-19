import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";

type Props = {};

export default function Search({}: Props) {
  return (
    <div className="search">
      <SearchIcon sx={{ color: "#e6e6e6" }} />
      <input type="text" placeholder="Buscar..." />
    </div>
  );
}
