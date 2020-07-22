import React from "react";
import Header from "./Exerciciotres/Header";
import Home from "./Exerciciotres/Home";
import Produtos from "./Exerciciotres/Produtos";

export const Exerciciotres = () => {
  const { pathname } = window.location;
  let Pagina;
  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <div>
      <Header />
      <Pagina />
    </div>
  );
};
