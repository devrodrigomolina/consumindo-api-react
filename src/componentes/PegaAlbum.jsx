import { useState, useEffect } from "react";
import { pegaListaDeProdutos } from "./serviços/ServiçoProdutoLoja";

const Carregando = () => <p>carregando...</p>;

const PegaComponente = () => {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const pegaDados = async () => {
    const [produtosServiço, erro] = await pegaListaDeProdutos();
    erro ? console.log("O Erro é:", erro) : setProdutos(produtosServiço);
    setCarregando(false);
  };

  useEffect(() => {
    pegaDados();
  }, []);
  console.log(produtos);

  return (
    <>
      {carregando ? (
        <Carregando />
      ) : (
        <>
          {produtos.map((produto) => (
            <div key={produto.id}>
              <p>{produto.descricaoDoProduto}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default PegaComponente;
