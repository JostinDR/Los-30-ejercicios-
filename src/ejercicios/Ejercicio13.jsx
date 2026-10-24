import { useState } from "react";
import "./Ejercicio13.css";

const MAXIMO = 170;

export default function Ejercicio13() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    const texto = numero.trim();
    const n = Number(texto);

    if (texto === "" || !Number.isInteger(n) || n < 0 || n > MAXIMO) {
      setError(`Escribe un número entero entre 0 y ${MAXIMO}.`);
      setResultado(null);
      return;
    }

    setError("");

    // Algoritmo repetitivo: se multiplica 1 × 2 × 3 × ... × N
    let factorial = 1n;
    for (let i = 2; i <= n; i++) {
      factorial *= BigInt(i);
    }

    // Procedimiento: 5! = 5 × 4 × 3 × 2 × 1 (solo si es corto)
    let pasos = "";
    if (n >= 2 && n <= 10) {
      const factores = [];
      for (let i = n; i >= 1; i--) {
        factores.push(i);
      }
      pasos = factores.join(" × ");
    }

    setResultado({ n, factorial: factorial.toString(), pasos });
  };

  const limpiar = () => {
    setNumero("");
    setResultado(null);
    setError("");
  };

  return (
    <div className="ej13">
      <h2>Factorial de un número</h2>

      <label>
        Número (0 a {MAXIMO})
        <input
          type="number"
          min="0"
          step="1"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calcular()}
          placeholder="Ej: 5"
        />
      </label>

      <div className="ej13-botones">
        <button className="ej13-calcular" onClick={calcular}>Calcular</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p className="ej13-error">{error}</p>}

      {resultado && (
        <div className="ej13-resultado">
          <p>El factorial de {resultado.n} es:</p>
          {resultado.pasos && (
            <p className="ej13-pasos">
              {resultado.n}! = {resultado.pasos}
            </p>
          )}
          <p className="ej13-total">{resultado.factorial}</p>
        </div>
      )}
    </div>
  );
}