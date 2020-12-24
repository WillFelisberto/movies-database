import React from "react";
import { Link } from "react-router-dom";
import { ContainerHeader } from "./styled";
//TODO: Deixar cabeçalho ajeitado
export default function Header() {
  return (
    <ContainerHeader>
      <Link to={"/"}>
        <h1>Movies DataBase</h1>
      </Link>
    </ContainerHeader>
  );
}
