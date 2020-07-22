import React from "react";

// O nome das propriedades é indiferente
const Produto = ({ produto, dados }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px 20px",
      }}
    >
      <p>{produto}</p>
      <ul>
        {dados.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
