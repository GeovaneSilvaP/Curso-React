import React from "react";

const UserForm = ({ data, updateFieldHandeler }) => {
  return (
    <div className="form-control">
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        name="text"
        id="name"
        placeholder="Digite seu nome"
        required
        value={data.name || ""}
        onChange={(e) => updateFieldHandeler("name", e.target.value)}
      />
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandeler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
