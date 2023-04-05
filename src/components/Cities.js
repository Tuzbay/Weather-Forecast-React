import React from "react";

function Cities({ setSearch, name, setCity, popup }) {
  return (
    <li
      onClick={() => {
        setSearch(name);
        setCity(name);
        popup = false;
        setSearch("");
      }}
    >
      {name}
    </li>
  );
}

export default Cities;
