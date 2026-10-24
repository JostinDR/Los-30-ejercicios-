import { useState } from "react";
import "./Ejercicio20.css";

export default function Ejercicio20() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState(null);
  const [terminado, setTerminado] = useState(false);

  const calcular = () => {
    const n = parseFloat(numero);
    if (isNaN(n)) return;

    if (n === 0) {
      setTerminado(true);
      setResultado(null);
    } else {
      setResultado({ n, cubo: n ** 3, raiz: Math.sqrt(n) });
    }
    setNumero("");
  };

  return (
    <div className="ej20">
      <h2>Cubo y raíz cuadrada</h2>

      {terminado ? (
        <p>Programa terminado.</p>
      ) : (
        <>
          <label>
            Número (0 para terminar)
            <input
              type="number"
              step="any"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calcular()}
              autoFocus
            />
          </label>
          <button onClick={calcular}>Calcular</button>
        </>
      )}

      {resultado && (
        <div className="ej20-resultado">
          <p>Número: {resultado.n}</p>
          <p>Cubo: {resultado.cubo}</p>
          <p>Raíz cuadrada: {isNaN(resultado.raiz) ? "No existe (negativo)" : resultado.raiz}</p>
        </div>
      )}
    </div>
  );
}