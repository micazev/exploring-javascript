import React from "react";

// As propriedades tem que ter o mesmo nome que as que estão nos dados que vem
export const Produtodois = ({ nome, propriedades }) => {
  return (
    <div>
      <p>{nome}</p>
      {propriedades.map((p) => (
        <li>{p}</li>
      ))}
    </div>
  );
};

export default Produtodois;
