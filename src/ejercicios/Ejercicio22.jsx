import { useState } from "react";
import "./Ejercicio22.css";

export default function Ejercicio22() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const l1 = parseFloat(a);
    const l2 = parseFloat(b);
    const l3 = parseFloat(c);
    if (isNaN(l1) || isNaN(l2) || isNaN(l3)) return;

    const valido =
      l1 > 0 && l2 > 0 && l3 > 0 &&
      l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2;

    if (!valido) {
      setResultado({ valido: false });
      return;
    }

    const s = (l1 + l2 + l3) / 2;
    const area = Math.sqrt(s * (s - l1) * (s - l2) * (s - l3));
    setResultado({ valido: true, area });
  };

  return (
    <div className="ej22">
      <h2>Área de un triángulo</h2>

      <label>
        Lado 1
        <input
          type="number"
          step="any"
          value={a}
          onChange={(e) => setA(e.target.value)}
          autoFocus
        />
      </label>
      <label>
        Lado 2
        <input
          type="number"
          step="any"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </label>
      <label>
        Lado 3
        <input
          type="number"
          step="any"
          value={c}
          onChange={(e) => setC(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calcular()}
        />
      </label>

      <button onClick={calcular}>Calcular</button>

      {resultado && (
        <div className="ej22-resultado">
          {resultado.valido ? (
            <p>Área: {Number(resultado.area.toFixed(4))}</p>
          ) : (
            <p>Esos lados no forman un triángulo.</p>
          )}
        </div>
      )}
    </div>
  );
}