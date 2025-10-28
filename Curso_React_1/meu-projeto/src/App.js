import logo from './logo.svg';
import './App.css';
import { HelloWord } from "./components/HelloWord";

function App() {
  const nome = "Geovane";
  const novoNome = nome.toUpperCase();

  function soma(a, b) {
    return a + b;
  }
  const url = "https://placehold.co/150x150"

  return (
    <div className="App">
      <h1>Olá React</h1>
      <h2>Alterando JSX</h2>
      <p>Olá, {novoNome}</p>
      <p>soma: {soma(5, 5)}</p>
      <img src={url} alt= "Minha Imagem"/>
      <HelloWord/>
    </div>
  );
}

export default App;
