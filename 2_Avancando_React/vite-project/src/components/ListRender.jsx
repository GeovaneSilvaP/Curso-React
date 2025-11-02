import { useState } from "react";

function ListRender() {
  const [list] = useState(["Geovane", "Renata", "Iury"]);

  const [users, setUsers] = useState([
    {
      id: 1,
      nome: "Aurora",
      idade: 5,
    },
    {
      id: 2,
      nome: "Geovane",
      idade: 29,
    },
    {
      id: 3,
      nome: "Chyst",
      idade: 26,
    },
  ]);

  const deleteRomdom = () =>{

    const ramdomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => prevUsers.filter((user)=>{
        return ramdomNumber !== user.id;
    }))

  }

  return (
    <div>
      {/* render sem key */}
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      {/* render com key */}
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Nome: {user.nome} - Idade: {user.idade} anos
            </li>
          ))}
        </ul>
      </div>

          {/* Utilizando o previous state */}
      <div>
        <button onClick={()=> deleteRomdom()}>Delete Lista</button>
      </div>
    </div>
  );
}

export default ListRender;
