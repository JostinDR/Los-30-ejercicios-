import { useState } from "react";
import "./Ejercicio9.css";

const NOTA_MAXIMA = 20;
const NOTA_APROBATORIA = 11; // aprueba con esta nota o más

export default function Ejercicio9() {
  const [nota, setNota] = useState("");
  const [notas, setNotas] = useState([]);
  const [error, setError] = useState("");

  const agregar = () => {
    const n = parseFloat(nota);

    if (isNaN(n) || n < 0 || n > NOTA_MAXIMA) {
      setError(`Escribe una nota válida entre 0 y ${NOTA_MAXIMA}.`);
      return;
    }

    setError("");
    setNotas([...notas, { id: Date.now(), valor: n }]);
    setNota("");
  };

  const quitar = (id) => {
    setNotas(notas.filter((n) => n.id !== id));
  };

  const limpiarTodo = () => {
    setNota("");
    setNotas([]);
    setError("");
  };

  // Recorremos las notas una sola vez para obtener todo lo que se pide
  let aprobados = 0;
  let desaprobados = 0;
  let sumaTotal = 0;
  let sumaAprobadas = 0;
  let sumaDesaprobadas = 0;

  for (const n of notas) {
    sumaTotal += n.valor;
    if (n.valor >= NOTA_APROBATORIA) {
      aprobados++;
      sumaAprobadas += n.valor;
    } else {
      desaprobados++;
      sumaDesaprobadas += n.valor;
    }
  }

  const formato = (suma, cantidad) =>
    cantidad > 0 ? (suma / cantidad).toFixed(2) : "—";

  return (
    <div className="ej9">
      <h2>Notas de un estudiante</h2>

      <label>
        Nota (0 a {NOTA_MAXIMA})
        <input
          type="number"
          min="0"
          max={NOTA_MAXIMA}
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregar()}
          placeholder="Ej: 14"
        />
      </label>

      <div className="ej9-botones">
        <button className="ej9-calcular" onClick={agregar}>Agregar nota</button>
        <button onClick={limpiarTodo}>Limpiar todo</button>
      </div>

      {error && <p className="ej9-error">{error}</p>}

      {notas.length > 0 && (
        <div className="ej9-resultado">
          <ul className="ej9-lista">
            {notas.map((n, i) => (
              <li key={n.id}>
                <span>Nota {i + 1}: {n.valor}</span>
                <em className={n.valor >= NOTA_APROBATORIA ? "ej9-ok" : "ej9-mal"}>
                  {n.valor >= NOTA_APROBATORIA ? "Aprobada" : "Desaprobada"}
                </em>
                <button
                  className="ej9-quitar"
                  aria-label={`Quitar nota ${i + 1}`}
                  onClick={() => quitar(n.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <p>a) Desaprobadas: <strong>{desaprobados}</strong></p>
          <p>b) Aprobadas: <strong>{aprobados}</strong></p>
          <p>c) Promedio de todas las notas:{" "}
            <strong className="ej9-total">{formato(sumaTotal, notas.length)}</strong>
          </p>
          <p>d) Promedio de notas aprobadas:{" "}
            <strong>{formato(sumaAprobadas, aprobados)}</strong>
          </p>
          <p>d) Promedio de notas desaprobadas:{" "}
            <strong>{formato(sumaDesaprobadas, desaprobados)}</strong>
          </p>
        </div>
      )}
    </div>
  );
}