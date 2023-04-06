import React from "react";

function Cities({ setSearch, name, setCity }) {
  localStorage.setItem("sehir", name);
  return (
    <li
      className="options"
      onClick={() => {
        setSearch(name);
        setCity(name);
        setSearch("");
      }}
    >
      {name}
    </li>
  );
}

export default Cities;
