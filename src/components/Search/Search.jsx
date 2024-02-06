import React from "react";
import PropTypes from "prop-types";

export const Search = ({ data, setFilter }) => {
  const handleFilterData = (dataFiltered) => {
    setFilter(dataFiltered);
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const valueToLowerCase = value.toLowerCase();

    const dataFiltered = data.filter((user) => {
      return (
        user.nombre.toLowerCase().includes(valueToLowerCase) ||
        user.correo.toLowerCase().includes(valueToLowerCase) ||
        user.telefono.toLowerCase().includes(valueToLowerCase) ||
        user.edad.toLowerCase().includes(valueToLowerCase) ||
        user.cargo.toLowerCase().includes(valueToLowerCase)
      );
    });

    handleFilterData(dataFiltered);
  };

  return (
    <>
      <div>
        <input
          type="text"
          className="form-control p-3 mb-2"
          placeholder="Ingresar búsqueda"
          onChange={(event) => handleOnChange(event)}
        />
      </div>
    </>
  );
};

Search.propTypes = {
  data: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
};
