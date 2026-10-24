import { useState } from "react";
import "./Ejercicio30.css";

const CLAVES = ["TIENES", "QUE SER", "INVITADO", "PARA", "INGRESAR"];

export default function Ejercicio30() {
  const [valores, setValores] = useState(["", "", "", "", ""]);
  const [mensaje, setMensaje] = useState(null);

  const cambiar = (i, texto) => {
    const nuevos = [...valores];
    nuevos[i] = texto;
    setValores(nuevos);
  };

  const ingresar = () => {
    // Si al menos una clave es incorrecta, no se permite el ingreso
    let todasCorrectas = true;
    for (let i = 0; i < CLAVES.length; i++) {
      if (valores[i].trim().toUpperCase() !== CLAVES[i]) {
        todasCorrectas = false;
      }
    }

    setMensaje(
      todasCorrectas ? "BIENVENIDO A LA FIESTA" : "TE EQUIVOCASTE DE FIESTA"
    );
  };

  const limpiar = () => {
    setValores(["", "", "", "", ""]);
    setMensaje(null);
  };

  return (
    <div className="ej30">
      <h2>Fiesta de Braulio</h2>

      {valores.map((v, i) => (
        <label key={i}>
          Clave {i + 1}
          <input
            type="text"
            value={v}
            onChange={(e) => cambiar(i, e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ingresar()}
            autoComplete="off"
            autoFocus={i === 0}
          />
        </label>
      ))}

      <div className="ej30-botones">
        <button onClick={ingresar}>Ingresar</button>
        <button className="ej30-limpiar" onClick={limpiar}>Limpiar</button>
      </div>

      {mensaje && (
        <div
          className={
            mensaje === "BIENVENIDO A LA FIESTA"
              ? "ej30-resultado ej30-ok"
              : "ej30-resultado ej30-mal"
          }
        >
          {mensaje}
        </div>
      )}
    </div>
  );
}