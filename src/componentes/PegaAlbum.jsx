import { useEffect } from "react";

const PegaComponente = () => {
  const pegaDados = async () => {
    console.log("pega dados");
    const res = await fetch("https://ranekapi.origamid.dev/json/api/produto/");
    const dados = await res.json();
    console.log(dados);
  };

  useEffect(() => {
    pegaDados();
  }, []);

  return <h1>Pega Componente</h1>;
};

export default PegaComponente;
