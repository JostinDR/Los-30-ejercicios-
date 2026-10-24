import { useState } from "react";
import "./Ejercicio21.css";

export default function Ejercicio21() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState(null);
  const [terminado, setTerminado] = useState(false);

  const calcular = () => {
    const n1 = parseFloat(a);
    const n2 = parseFloat(b);
    if (isNaN(n1) || isNaN(n2)) return;

    if (n1 === 0) {
      setTerminado(true);
      setResultado(null);
    } else {
      setResultado({
        n1,
        n2,
        suma: n1 + n2,
        diferencia: n1 - n2,
        producto: n1 * n2,
        division: n2 === 0 ? "No definida" : n1 / n2,
      });
    }
    setA("");
    setB("");
  };

  return (
    <div className="ej21">
      <h2>Suma, diferencia, producto y división</h2>

      {terminado ? (
        <p>Programa terminado.</p>
      ) : (
        <>
          <label>
            Primer número (0 para terminar)
            <input
              type="number"
              step="any"
              value={a}
              onChange={(e) => setA(e.target.value)}
              autoFocus
            />
          </label>
          <label>
            Segundo número
            <input
              type="number"
              step="any"
              value={b}
              onChange={(e) => setB(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calcular()}
            />
          </label>
          <button onClick={calcular}>Calcular</button>
        </>
      )}

      {resultado && (
        <div className="ej21-resultado">
          <p>Números: {resultado.n1} y {resultado.n2}</p>
          <p>Suma: {resultado.suma}</p>
          <p>Diferencia: {resultado.diferencia}</p>
          <p>Producto: {resultado.producto}</p>
          <p>División: {resultado.division}</p>
        </div>
      )}
    </div>
  );
}