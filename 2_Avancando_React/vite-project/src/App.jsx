import "./App.css";

//2- img em assets
import rockperson from "./assets/background.jpg";

//3 - Conhecendo o useState
import Data from "./components/Data";

//4 - Renderização de lista
import ListerRender from "./components/ListRender";

function App() {
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
    </div>
  );
}

export default App;
