import { useState } from "react";
import "./Ejercicio5.css";

const MIN_POR_HORA = 60;
const MIN_POR_DIA = 24 * 60; // 1440

export default function Ejercicio5() {
  const [minutos, setMinutos] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    const m = parseInt(minutos, 10);

    if (isNaN(m) || m < 0) {
      setError("Escribe un número entero de minutos (mayor o igual a 0).");
      setResultado(null);
      return;
    }

    setError("");

    const dias = Math.floor(m / MIN_POR_DIA);
    const horas = Math.floor((m % MIN_POR_DIA) / MIN_POR_HORA);
    const min = m % MIN_POR_HORA;

    setResultado({ dias, horas, min });
  };

  const limpiar = () => {
    setMinutos("");
    setResultado(null);
    setError("");
  };

  return (
    <div className="ej5">
      <h2>Minutos a días, horas y minutos</h2>

      <label>
        Tiempo en minutos
        <input
          type="number"
          min="0"
          step="1"
          value={minutos}
          onChange={(e) => setMinutos(e.target.value)}
          placeholder="Ej: 3000"
        />
      </label>

      <div className="ej5-botones">
        <button className="ej5-calcular" onClick={calcular}>Calcular</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p className="ej5-error">{error}</p>}

      {resultado && (
        <div className="ej5-resultado">
          <p>Días: {resultado.dias}</p>
          <p>Horas: {resultado.horas}</p>
          <p className="ej5-total">Minutos: {resultado.min}</p>
        </div>
      )}
    </div>
  );
}