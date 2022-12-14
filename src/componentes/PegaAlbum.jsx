import { useState, useEffect } from "react";
import { pegaListaDeProdutos } from "./serviços/ServiçoProdutoLoja";

const Carregando = () => <p>carregando...</p>;
const Erro = ({ msg }) => <p>{msg}</p>;
const Sucesso = ({ produtos }) => (
  <>
    {produtos.map((produto) => (
      <div key={produto.id}>
        <p>{produto.descricaoDoProduto}</p>
      </div>
    ))}
  </>
);

const PegaComponente = () => {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erroMsg, setErroMsg] = useState(false);

  const pegaDados = async () => {
    const [produtosServiço, erro] = await pegaListaDeProdutos();
    erro ? setErroMsg(`O Erro é: ${erro}`) : setProdutos(produtosServiço);
    setCarregando(false);
  };

  useEffect(() => {
    pegaDados();
  }, []);

  return (
    <>
      {carregando ? (
        <Carregando />
      ) : erroMsg ? (
        <Erro msg={erroMsg} />
      ) : (
        <Sucesso produtos={produtos} />
      )}
    </>
  );
};

export default PegaComponente;
