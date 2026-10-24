import { useState } from "react";
import "./Ejercicio10.css";

export default function Ejercicio10() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    const n = parseInt(numero, 10);

    if (isNaN(n) || !Number.isInteger(Number(numero))) {
      setError("Escribe un número entero.");
      setResultado(null);
      return;
    }

    setError("");

    // Algoritmo repetitivo: se separa el último dígito hasta llegar a 0
    let resto = Math.abs(n);
    let suma = 0;
    const digitos = [];

    if (resto === 0) {
      digitos.push(0);
    }

    while (resto > 0) {
      const digito = resto % 10;
      digitos.unshift(digito);
      suma += digito;
      resto = Math.floor(resto / 10);
    }

    setResultado({ original: Math.abs(n), digitos, suma });
  };

  const limpiar = () => {
    setNumero("");
    setResultado(null);
    setError("");
  };

  return (
    <div className="ej10">
      <h2>Suma de los dígitos de un número</h2>

      <label>
        Número
        <input
          type="number"
          step="1"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calcular()}
          placeholder="Ej: 345"
        />
      </label>

      <div className="ej10-botones">
        <button className="ej10-calcular" onClick={calcular}>Calcular</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p className="ej10-error">{error}</p>}

      {resultado && (
        <div className="ej10-resultado">
          <p>Dígitos de {resultado.original}: {resultado.digitos.join(" + ")}</p>
          <p>La suma de sus dígitos es:</p>
          <p className="ej10-total">{resultado.suma}</p>
        </div>
      )}
    </div>
  );
}