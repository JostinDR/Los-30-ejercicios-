import { useState } from "react";
import "./Ejercicio23.css";

export default function Ejercicio23() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const c1 = parseFloat(a);
    const c2 = parseFloat(b);
    if (isNaN(c1) || isNaN(c2)) return;

    if (c1 <= 0 || c2 <= 0) {
      setResultado({ valido: false });
      return;
    }

    const hipotenusa = Math.sqrt(c1 * c1 + c2 * c2);
    setResultado({ valido: true, hipotenusa });
  };

  return (
    <div className="ej23">
      <h2>Hipotenusa de un triángulo rectángulo</h2>

      <label>
        Cateto 1
        <input
          type="number"
          step="any"
          value={a}
          onChange={(e) => setA(e.target.value)}
          autoFocus
        />
      </label>
      <label>
        Cateto 2
        <input
          type="number"
          step="any"
          value={b}
          onChange={(e) => setB(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calcular()}
        />
      </label>

      <button onClick={calcular}>Calcular</button>

      {resultado && (
        <div className="ej23-resultado">
          {resultado.valido ? (
            <p>Hipotenusa: {Number(resultado.hipotenusa.toFixed(4))}</p>
          ) : (
            <p>Los catetos deben ser mayores que 0.</p>
          )}
        </div>
      )}
    </div>
  );
}