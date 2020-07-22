import React from "react";
import Produto from "./Exercicioquatro/Produto";

const Exercicioquatro = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function useFetch(texto) {
    setLoading(true);
    const url = `https://ranekapi.origamid.dev/json/api/produto/${texto.target.innerText}`;
    const response = await fetch(url);
    const json = await response.json();
    setDados(json);
    setLoading(false);
  }

  return (
    <div>
      <div style={{ display: "inline-flex" }}>
        <button onClick={useFetch} style={{ margin: "5px" }}>
          Tablet
        </button>
        <button onClick={useFetch} style={{ margin: "5px" }}>
          Smartphone
        </button>
        <button onClick={useFetch} style={{ margin: "5px" }}>
          Notebook
        </button>
      </div>
      {loading && <p>Carregando</p>}
      {!loading && dados && <Produto dados={dados} />}
    </div>
  );
};

export default Exercicioquatro;
