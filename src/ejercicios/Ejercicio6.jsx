import { useState } from "react";
import "./Ejercicio6.css";

export default function Ejercicio6() {
  const [n, setN] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    const num = parseInt(n, 10);

    if (isNaN(num) || num < 1) {
      setError("Escribe un número entero mayor o igual a 1.");
      setResultado(null);
      return;
    }

    setError("");

    // Algoritmo repetitivo: se suma 1 + 2 + 3 + ... + N
    let suma = 0;
    for (let i = 1; i <= num; i++) {
      suma += i;
    }

    setResultado({ num, suma });
  };

  const limpiar = () => {
    setN("");
    setResultado(null);
    setError("");
  };

  return (
    <div className="ej6">
      <h2>Suma de los N primeros números naturales</h2>

      <label>
        Valor de N
        <input
          type="number"
          min="1"
          step="1"
          value={n}
          onChange={(e) => setN(e.target.value)}
          placeholder="Ej: 10"
        />
      </label>

      <div className="ej6-botones">
        <button className="ej6-calcular" onClick={calcular}>Calcular</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p className="ej6-error">{error}</p>}

      {resultado && (
        <div className="ej6-resultado">
          <p>La suma de 1 hasta {resultado.num} es:</p>
          <p className="ej6-total">{resultado.suma}</p>
        </div>
      )}
    </div>
  );
}