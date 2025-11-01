import { useEffect, useState } from "react";

import InputForm from "../form/InputForm";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./ProjectForm.module.css";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({ 
      ...project,
      category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    },
   });
  }

  return (
    <div>
      <form onSubmit={submit} className={styles.form}>
        <InputForm
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
          handleOnChance={handleChange}
          value={project.name ? project.name : ''}
        />
        <InputForm
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
          handleOnChance={handleChange}
          value={project.budget ? project.budget : ''}
        />
        <div>
          <Select
            name="category_id"
            text="Selecione a categoria"
            options={categories}
            handleOnChance={handleCategory}
            value={project.category ? project.category.id : ''}
          />
        </div>
        <div>
          <SubmitButton text={btnText} />
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
