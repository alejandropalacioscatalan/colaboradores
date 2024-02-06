import "./Table.css";
import React from "react";
import PropTypes from "prop-types";
import { Mensaje } from "../Mensaje/Mensaje";

export const Table = ({ data }) => {
  return (
    <>
      <div className="table-responsive-sm">
        <table className="table table-striped table-primary">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Edad</th>
              <th scope="col">Cargo</th>
              <th scope="col">Telefono</th>
            </tr>
          </thead>
          <tbody style={{ position: "relative" }}>
            {data.length ? (
              data.map((user, index) => (
                <tr scope="row" key={index}>
                  <td>{user.nombre}</td>
                  <td>{user.correo}</td>
                  <td>{user.edad}</td>
                  <td>{user.cargo}</td>
                  <td>{user.telefono}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>
                  <Mensaje
                    text="No se han encontrado registros de colaboradores"
                    color="alert alert-danger"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
};
