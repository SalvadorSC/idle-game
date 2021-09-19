import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";

export const NewBooks = () => {
  const { potenciaClick } = useContext(CounterContext);
  const precio = 30;

  return (
    <div>
      <h4>New books:</h4>
      <div>{potenciaClick > precio * 20 && "Hola"}</div>
    </div>
  );
};
