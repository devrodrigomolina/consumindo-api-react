import { useState, useEffect } from "react";
import { pegaListaDeProdutos } from "./serviços/ServiçoProdutoLoja";

const PegaComponente = () => {
  const [produtos, setProdutos] = useState([]);

  const pegaDados = async () => {
    const [produtosServiço, erro] = await pegaListaDeProdutos();
    erro ? console.log("O Erro é:", erro) : setProdutos(produtosServiço);
  };

  useEffect(() => {
    pegaDados();
  }, []);
  console.log(produtos);

  return (
    <>
      <h1>Pega Componente</h1>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.descricaoDoProduto}</p>
        </div>
      ))}
    </>
  );
};

export default PegaComponente;
