import "./App.css";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:5174/products";

function App() {
  const { data: items, httpConfig, loading } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = { name, price };
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>HTTP em React</h1>
      {loading && <p>Carregando...</p>}

      {/* 1- Lista de produtos */}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              Produto: {product.name} - R$: {product.price}
            </li>
          ))}
      </ul>

      {/* 2- Formulário */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Preço:</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* <input type="submit" value="Enviar" />*/}
          {/*7- loading post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
