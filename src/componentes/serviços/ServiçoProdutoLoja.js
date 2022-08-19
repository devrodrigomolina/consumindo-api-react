export const pegaListaDeProdutos = async () => {
  const res = await fetch("https://ranekapi.origamid.dev/json/api/produto/");
  const dados = await res.json();
  const dadosTratados = dados.map((dado) => ({
    id: dado.id,
    descricaoDoProduto: dado.descricao,
  }));
  return dadosTratados;
};
