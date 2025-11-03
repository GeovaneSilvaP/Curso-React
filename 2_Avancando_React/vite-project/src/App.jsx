import "./App.css";

//2- img em assets
import rockperson from "./assets/background.jpg";

//3 - Conhecendo o useState
import Data from "./components/Data";

//4 - Renderização de lista
import ListerRender from "./components/ListRender";

//7- Renderização condicional
import ConditionalRender from "./components/ConditionalRender";

//8 - Utilizando props
import { Props, PropsComPros, Carro } from "./components/Props";

//12- Fragment
import Fragment from "./components/Fragment";

//13 - Utilizando o children
import Container from "./components/Container";

//14 - Função através de prop
import ExecutionFunciton from "./components/ExecutionFunction";

//15 - Recurso de state lift
import { useState } from "react";

import Message from "./components/Message";

import ChangeMessage from "./components/ChangeMessage";

//11 - Renderização de componentes com map
const cars = [
  { id: 1, marca: "Ferrari", cor: "Amarelo", km: 0 },
  { id: 2, marca: "Kia", cor: "Branco", km: 20000 },
  { id: 3, marca: "Renault", cor: "Azul", km: 37000 },
];

function App() {
  //15 - Recurso de state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  function showMe() {
    console.log("Evento do compomente pai");
  }

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando no React JS</h1>

      {/* 1- img em public */}
      <img width={400} src="/img.jpg" alt="alguma img" />

      {/* 2- img em assets */}
      <img width={400} src={rockperson} alt="alguma img" />

      {/* 3 - Conhecendo o useState */}
      <Data />
      {/* 4 - Renderização de lista */}
      <ListerRender />
      {/*7- Renderização condicional */}
      <ConditionalRender />
      {/*8 - Utilizando props */}
      <PropsComPros basico={"React"} avancado={"avançado"} />
      {/*9 - Desestruturando props */}
      <Props nome={"Aurora"} cidade={"Natal"} />
      <Carro marca={"BMW"} km={999} cor={"Preto"} />
      {/*10- Reaproveitamento de componentes */}
      <Carro marca={"Fiat"} km={2399} cor={"Vermelho"} />
      <Carro marca={"Gol"} km={27383} cor={"Azul"} />
      {/*11 - Renderização de componentes com map */}
      {cars.map((car) => (
        <Carro key={car.id} marca={car.marca} km={car.km} cor={car.cor} />
      ))}
      {/*12- Fragment */}
      <Fragment />
      {/*13 - Utilizando o children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <h2>Teste</h2>
        <p>Meu container</p>
      </Container>
      {/*14 - Função através de prop */}
      <ExecutionFunciton myFunciton={showMe} />
      {/*15-Recurso de state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
