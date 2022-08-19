import { useEffect } from "react";

const PegaComponente = () => {
  const pegaDados = async () => {
    console.log("pega dados");
  };

  useEffect(() => {
    pegaDados();
  }, []);

  return <h1>Pega Componente</h1>;
};

export default PegaComponente;
