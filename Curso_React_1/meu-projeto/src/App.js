import logo from "./logo.svg";
import "./App.css";
import { HelloWord } from "./components/HelloWord";
import { SyMyName } from "./components/SyMyName";
import { Pessoa } from "./components/Pessoa";
import { Frase } from "./components/Frase";

function App() {
  const nome = "Aurora";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <HelloWord />
      <SyMyName nome="Geovane" />
      <SyMyName nome="Iury" />
      <SyMyName nome={nome} />
      <Pessoa
        nome="Geovane"
        idade="23"
        profissao="Programador"
        foto="https://placehold.co/150x150"
      />
    </div>
  );
}

export default App;
