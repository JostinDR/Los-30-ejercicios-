import { useState } from "react";
import "./Ejercicio16.css";

// Quita la tilde y pasa a minúscula: "É" -> "e"
function limpiar(c) {
  return c.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function esVocal(c) {
  return "aeiou".includes(limpiar(c));
}

export default function Ejercicio16() {
  const [leidos, setLeidos] = useState([]);

  const leer = (e) => {
    const texto = e.target.value;

    // Se lee carácter por carácter y se guarda en la lista
    const nuevos = [...leidos];
    for (const c of texto) {
      if (c.trim() === "") continue; // se ignoran los espacios
      nuevos.push(c);
    }

    setLeidos(nuevos);
  };

  const reiniciar = () => setLeidos([]);

  // Algoritmo repetitivo: se busca la primera vocal en el orden en que se leyó
  let indicePrimera = -1;
  for (let i = 0; i < leidos.length; i++) {
    if (esVocal(leidos[i])) {
      indicePrimera = i;
      break;
    }
  }

  const vocal = indicePrimera >= 0 ? leidos[indicePrimera] : null;

  return (
    <div className="ej16">
      <h2>Primera vocal leída del teclado</h2>

      <label>
        Escribe un carácter a la vez
        <input
          type="text"
          value=""
          onChange={leer}
          placeholder="Escribe aquí…"
          autoComplete="off"
          autoFocus
        />
      </label>

      {leidos.length > 0 && (
        <div className="ej16-leidos">
          <small>Caracteres leídos:</small>
          <div className="ej16-chips">
            {leidos.map((c, i) => (
              <span
                key={i}
                className={
                  i === indicePrimera
                    ? "ej16-chip ej16-primera"
                    : esVocal(c)
                    ? "ej16-chip ej16-vocal"
                    : "ej16-chip"
                }
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      )}

      {vocal !== null && (
        <div className="ej16-resultado">
          <p>La primera vocal leída es:</p>
          <p className="ej16-total">{vocal}</p>
          <small>Fue el carácter número {indicePrimera + 1}.</small>
        </div>
      )}

      {vocal === null && leidos.length > 0 && (
        <small className="ej16-aviso">
          Todavía no se ha leído ninguna vocal. Sigue escribiendo.
        </small>
      )}

      <button className="ej16-reiniciar" onClick={reiniciar}>
        Empezar de nuevo
      </button>
    </div>
  );
}