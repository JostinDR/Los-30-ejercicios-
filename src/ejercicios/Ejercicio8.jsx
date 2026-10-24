import { useState } from "react";
import "./Ejercicio8.css";

export default function Ejercicio8() {
  const [horas, setHoras] = useState("");
  const [tarifa, setTarifa] = useState("");
  const [salario, setSalario] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    const h = parseFloat(horas);
    const t = parseFloat(tarifa);

    if (isNaN(h) || isNaN(t) || h < 0 || t < 0) {
      setError("Escribe horas y tarifa válidas (números mayores o iguales a 0).");
      setSalario(null);
      return;
    }

    setError("");
    setSalario(h * t);
  };

  const limpiar = () => {
    setHoras("");
    setTarifa("");
    setSalario(null);
    setError("");
  };

  return (
    <div className="ej8">
      <h2>Salario por horas trabajadas</h2>

      <label>
        Horas trabajadas
        <input
          type="number"
          min="0"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
          placeholder="Ej: 35"
        />
      </label>

      <label>
        Tarifa por hora
        <input
          type="number"
          min="0"
          value={tarifa}
          onChange={(e) => setTarifa(e.target.value)}
          placeholder="Ej: 12"
        />
      </label>

      <div className="ej8-botones">
        <button className="ej8-calcular" onClick={calcular}>Calcular</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p className="ej8-error">{error}</p>}

      {salario !== null && (
        <div className="ej8-resultado">
          <p>El salario de la persona es:</p>
          <p className="ej8-total">{salario.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}