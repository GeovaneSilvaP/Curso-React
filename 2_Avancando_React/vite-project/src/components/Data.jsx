//3 - Conhecendo o useState
import { useState } from "react";

function Data() {
  let somaData = 10;

  const [anotherNumber, setAnotherNumber] = useState(15);

  //meu teste
  let seuNome = "Geovane";

  const [seuNomeNovo, setSeuNomeNovo] = useState("Wylle");

  //meu teste 2
  const [aprendendoReact, setAprendendoReact] = useState("Aprendendo React");

  return (
    <div>
      <p>Soma Data: {somaData}</p>
      <button onClick={() => (somaData = 15)}>Mudar variavel</button>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
      </div>

      <div>
        <p>Seu nome: {seuNome}</p>
        <button onClick={() => (seuNome = "Aurora")}>Mudar nome</button>
        <p>Seu novo nome: {seuNomeNovo}</p>
        <button onClick={() => setSeuNomeNovo("Aurora")}>Mudar nome para novo</button>
      </div>

      <div>
        <h3>Testando {aprendendoReact}</h3>
        <p>{setTimeout(()=>{
            {setAprendendoReact("JavaScript")}
        },2000)}</p>
      </div>
    </div>
  );
}

export default Data;
