import React, { useState } from "react";
import PropTypes from "prop-types";
import { Mensaje } from "../Mensaje/Mensaje";
import "./Form.css";

export const Form = (props) => {
  const [estadoEnvio, setEstadoEnvio] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [cargo, setCargo] = useState("");
  const [phone, setPhone] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (
      nombre === "" ||
      email === "" ||
      age === "" ||
      cargo === "" ||
      phone === ""
    ) {
      setEstadoEnvio("Completa todos los campos !");
      setTipoMensaje("alert alert-danger");
      return;
    } else {
      setEstadoEnvio("Colaborador Agregado !");
      setTipoMensaje("alert alert-success");
      setNombre("");
      setEmail("");
      setAge("");
      setCargo("");
      setPhone("");
      return;
    }

    setEstadoEnvio("");
    setNombre("");
    setEmail("");
    setAge("");
    setCargo("");
    setPhone("");
  };

  return (
    <>
      <form onSubmit={validarDatos}>
        <div>
          <h2>Lista de Colaboradores</h2>
        </div>

        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nombre del colaborador"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="Email del colaborador"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="age"></label>
          <input
            type="text"
            id="age"
            className="form-control"
            placeholder="Edad del colaborador"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div>
          <label htmlFor="cargo"></label>
          <input
            type="text"
            id="cargo"
            className="form-control"
            placeholder="Cargo del colaborador"
            onChange={(e) => setCargo(e.target.value)}
            value={cargo}
          />
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input
            type="text"
            id="phone"
            className="form-control"
            placeholder="Teléfono del colaborador"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
      </form>

      <Mensaje text={estadoEnvio} color={tipoMensaje} />
    </>
  );
};

Form.propTypes = {};
