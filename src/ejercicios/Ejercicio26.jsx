import { useState } from "react";
import "./Ejercicio26.css";

const INICIO = 8;

export default function Ejercicio26() {
  const [n, setN] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const num = Number(n);
    if (n.trim() === "" || isNaN(num)) return;

    if (!Number.isInteger(num) || num < INICIO) {
      setResultado({ valido: false });
      return;
    }

    let suma = 0;
    for (let i = INICIO; i <= num; i++) {
      suma += i;
    }

    setResultado({ valido: true, num, suma });
  };

  const limpiar = () => {
    setN("");
    setResultado(null);
  };

  return (
    <div className="ej26">
      <h2>Suma desde el número 8 hasta N</h2>
      <p className="ej26-formula">S = 8 + 9 + 10 + 11 + ... + N</p>

      <label>
        Valor de N
        <input
          type="number"
          step="1"
          value={n}
          onChange={(e) => setN(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calcular()}
          autoFocus
        />
      </label>

      <div className="ej26-botones">
        <button onClick={calcular}>Calcular</button>
        <button className="ej26-limpiar" onClick={limpiar}>Limpiar</button>
      </div>

      {resultado && (
        <div className="ej26-resultado">
          {resultado.valido ? (
            <p>La suma de 8 hasta {resultado.num} es: <strong>{resultado.suma}</strong></p>
          ) : (
            <p>N debe ser un número entero mayor o igual a 8.</p>
          )}
        </div>
      )}
    </div>
  );
}