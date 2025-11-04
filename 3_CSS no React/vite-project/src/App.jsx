import './App.css'
//2- CSS de componentes
import MyComponents from "./components/MyComponents";

import Title from "./components/Title";

function App() {
  
  const n = 2;

  const x = "Geovane";

  //5- classe dinâmicas
  const redTitle = true;

  return (
   <div>
    {/*1-Css global */}
    <h1>Css no React</h1>
    {/*2- CSS de componentes */}
    <MyComponents />
    <p>Pegou o Css do componente</p>
    {/*3- Estilos inline */}
    <p style={{color: "blue", padding: "25px", borderTop: "1px solid #000"}}>Este elemento tem estilos inline</p>
    {/*4- CSS inline dinâmico */}
    <h2 style={n > 10 ? {color: "purple"} : {color: "magenta"}}>Css dinâmico</h2>
    <h2 style={x === "Geovane" ? {color: "blue"} : {color: "red"}}>Css dinâmico</h2>
    {/*5- classe dinâmicas */}
    <h1 className={redTitle ? "red-title" : "title"}>Este titulo vai ter uma classe</h1>
    {/*6- CSS Modules */}
    <Title/>
   </div>
  )
}

export default App
