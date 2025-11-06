import { useState } from "react";

import "./ImcCal.css";

import Button from "./Button";

const ImcCalc = ({calcImc}) => {
  const [height, setHeight] = useState("");
  const [weigth, setWeigth] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setWeigth("");
    setHeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeigthChange = (e) => {
    const updateValue = validDigits(e.target.value);

    setHeight(updateValue);
  };

  const handlWeigthChange = (e) => {
    const updateValue = validDigits(e.target.value);
    setWeigth(updateValue);
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-input">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
              onChange={(e) => handleHeigthChange(e)}
              value={height}
            />
          </div>
          <div className="form-input">
            <div className="form-control">
              <label htmlFor="weight">Peso:</label>
              <input
                type="text"
                name="weight"
                id="weight"
                placeholder="Exemplo 70.5"
                onChange={(e) => handlWeigthChange(e)}
                value={weigth}
              />
            </div>
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weigth)}/>
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
