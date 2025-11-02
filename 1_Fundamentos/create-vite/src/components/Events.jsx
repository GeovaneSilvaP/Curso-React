function Events() {
  const handleClick = (e) => {
    console.log(e);
    console.log("Executou");
  };

  const rederSomethig = (x) => {
    if (x) {
      return <h1>Rederizando almguma coisa</h1>;
    } else {
      return <h1>Rederizando outra coisa!!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => console.log("Testando um evento")}>
          Clique aqui
        </button>
      </div>

      {/* Evento com funções */}
      <div>
        <button onClick={handleClick}>Clique aqui</button>
      </div>

      {/* Função de renderização */}
      <div>
        {rederSomethig(true)}
        {rederSomethig(false)}
      </div>
    </div>
  );
}

export default Events;
