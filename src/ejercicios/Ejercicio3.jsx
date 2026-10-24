import { useState } from "react";
import "./Ejercicio3.css";

export default function Ejercicio3() {
  const [monto, setMonto] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    const m = parseFloat(monto);

    if (isNaN(m) || m < 0) {
      setError("Escribe un monto válido (número mayor o igual a 0).");
      setResultado(null);
      return;
    }

    setError("");

    const porcentaje = m > 100 ? 10 : 2;
    const descuento = m * (porcentaje / 100);

    setResultado({ porcentaje, descuento, total: m - descuento });
  };

  const limpiar = () => {
    setMonto("");
    setResultado(null);
    setError("");
  };

  return (
    <div className="ej3">
      <h2>Descuento según el monto</h2>

      <label>
        Monto
        <input
          type="number"
          min="0"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          placeholder="Ej: 150"
        />
      </label>

      <div className="ej3-botones">
        <button className="ej3-calcular" onClick={calcular}>Calcular</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p className="ej3-error">{error}</p>}

      {resultado && (
        <div className="ej3-resultado">
          <p>Porcentaje de descuento: {resultado.porcentaje}%</p>
          <p>Descuento: {resultado.descuento.toFixed(2)}</p>
          <p className="ej3-total">Total a pagar: {resultado.total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}