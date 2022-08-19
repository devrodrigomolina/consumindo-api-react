import { useState, useEffect } from "react";

const PegaComponente = () => {
  const [produtos, setProdutos] = useState([]);

  const pegaDados = async () => {
    console.log("pega dados");
    const res = await fetch("https://ranekapi.origamid.dev/json/api/produto/");
    const dados = await res.json();
    setProdutos(dados);
    console.log(dados);
  };

  useEffect(() => {
    pegaDados();
  }, []);
  console.log(produtos === null);

  return (
    <>
      <h1>Pega Componente</h1>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.descricao}</p>
        </div>
      ))}
    </>
  );
};

export default PegaComponente;
