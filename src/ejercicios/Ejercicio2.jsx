import { useState } from "react";
import "./Ejercicio2.css";

export default function Ejercicio2() {
  const [sueldo, setSueldo] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    const s = parseFloat(sueldo);

    if (isNaN(s) || s < 0) {
      setError("Escribe un sueldo válido (número mayor o igual a 0).");
      setResultado(null);
      return;
    }

    setError("");

    let descuento;

    if (s <= 1000) {
      descuento = s * 0.10;
    } else if (s <= 2000) {
      descuento = 1000 * 0.10 + (s - 1000) * 0.05;
    } else {
      descuento = 1000 * 0.10 + 1000 * 0.05 + (s - 2000) * 0.03;
    }

    setResultado({ descuento, neto: s - descuento });
  };

  const limpiar = () => {
    setSueldo("");
    setResultado(null);
    setError("");
  };

  return (
    <div className="ej2">
      <h2>Descuento y sueldo neto</h2>

      <label>
        Sueldo
        <input
          type="number"
          min="0"
          value={sueldo}
          onChange={(e) => setSueldo(e.target.value)}
          placeholder="Ej: 1500"
        />
      </label>

      <div className="ej2-botones">
        <button className="ej2-calcular" onClick={calcular}>Calcular</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p className="ej2-error">{error}</p>}

      {resultado && (
        <div className="ej2-resultado">
          <p>Descuento: {resultado.descuento.toFixed(2)}</p>
          <p className="ej2-total">Sueldo neto: {resultado.neto.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}