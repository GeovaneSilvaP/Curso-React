import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";
import { useNavigate } from "react-router-dom";


function NewProject() {

  const navigate = useNavigate();

  function cratePost(projeto) {
    
    //initialize cost and services
    projeto.cost = 0;
    projeto.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(projeto)
    })
    .then((resposta)=>{
      resposta.json()
    })
    .then((data)=>{
      console.log(data);
      //redrect
      navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } })
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie um projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={cratePost} btnText="Criar Projeto"/>
    </div>
  );
}

export default NewProject;
