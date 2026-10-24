import { useState } from "react";
import "./Ejercicio7.css";

const HORAS_NORMALES = 40;
const RECARGO = 1.5; // las horas extras se pagan al 150% (tarifa + 50%)

function calcularSalario(horas, tarifa) {
  if (horas > HORAS_NORMALES) {
    const extras = horas - HORAS_NORMALES;
    return HORAS_NORMALES * tarifa + extras * tarifa * RECARGO;
  }
  return horas * tarifa;
}

export default function Ejercicio1() {
  const [horas, setHoras] = useState("");
  const [tarifa, setTarifa] = useState("");
  const [trabajadores, setTrabajadores] = useState([]);
  const [error, setError] = useState("");

  const agregar = () => {
    const h = parseFloat(horas);
    const t = parseFloat(tarifa);

    if (isNaN(h) || isNaN(t) || h < 0 || t < 0) {
      setError("Escribe horas y tarifa válidas (números mayores o iguales a 0).");
      return;
    }

    setError("");

    const nuevo = {
      id: Date.now(),
      horas: h,
      tarifa: t,
      salario: calcularSalario(h, t),
    };

    setTrabajadores([...trabajadores, nuevo]);
    setHoras("");
    setTarifa("");
  };

  const eliminar = (id) => {
    setTrabajadores(trabajadores.filter((w) => w.id !== id));
  };

  const limpiarTodo = () => {
    setHoras("");
    setTarifa("");
    setTrabajadores([]);
    setError("");
  };

  // Suma de los salarios de todos los trabajadores
  let total = 0;
  for (const w of trabajadores) {
    total += w.salario;
  }

  return (
    <div className="ej1">
      <h2>Suma de salarios de los trabajadores</h2>

      <label>
        Horas trabajadas
        <input
          type="number"
          min="0"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
          placeholder="Ej: 45"
        />
      </label>

      <label>
        Tarifa por hora
        <input
          type="number"
          min="0"
          value={tarifa}
          onChange={(e) => setTarifa(e.target.value)}
          placeholder="Ej: 10"
        />
      </label>

      <div className="ej1-botones">
        <button className="ej1-calcular" onClick={agregar}>
          Agregar trabajador
        </button>
        <button onClick={limpiarTodo}>Limpiar todo</button>
      </div>

      {error && <p className="ej1-error">{error}</p>}

      {trabajadores.length > 0 && (
        <div className="ej1-resultado">
          <ul className="ej1-lista">
            {trabajadores.map((w, i) => (
              <li key={w.id}>
                <span>
                  Trabajador {i + 1}: {w.horas} h × {w.tarifa}
                </span>
                <strong>{w.salario.toFixed(2)}</strong>
                <button
                  className="ej1-quitar"
                  aria-label={`Quitar trabajador ${i + 1}`}
                  onClick={() => eliminar(w.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <p className="ej1-total">Total de salarios: {total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}