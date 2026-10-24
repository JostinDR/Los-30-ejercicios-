import { useState } from "react";
import "./Ejercicio27.css";

const CAJA_INICIAL = 3.71;

export default function Ejercicio27() {
  const [egreso, setEgreso] = useState("");
  const [totalEgresos, setTotalEgresos] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const [error, setError] = useState("");

  const registrar = () => {
    const e = parseFloat(egreso);
    if (isNaN(e)) return;

    if (e === -1) {
      setTerminado(true);
      setError("");
    } else if (e <= 0) {
      setError("Escribe un egreso mayor que 0 (o -1 para terminar).");
    } else {
      setTotalEgresos(totalEgresos + e);
      setError("");
    }
    setEgreso("");
  };

  const limpiar = () => {
    setEgreso("");
    setTotalEgresos(0);
    setTerminado(false);
    setError("");
  };

  const enCaja = CAJA_INICIAL - totalEgresos;

  return (
    <div className="ej27">
      <h2>Caja de la compañía Barner</h2>

      {!terminado && (
        <label>
          Egreso (-1 para terminar)
          <input
            type="number"
            step="any"
            value={egreso}
            onChange={(e) => setEgreso(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && registrar()}
            autoFocus
          />
        </label>
      )}

      {error && <p className="ej27-error">{error}</p>}

      <div className="ej27-botones">
        {!terminado && <button onClick={registrar}>Registrar</button>}
        <button className="ej27-limpiar" onClick={limpiar}>Limpiar</button>
      </div>

      <div className="ej27-resultado">
        <p>Caja inicial: ${CAJA_INICIAL.toFixed(2)}</p>
        <p>Total de egresos: ${totalEgresos.toFixed(2)}</p>
        <p>
          Queda en caja: <strong>${enCaja.toFixed(2)}</strong>
        </p>
        {terminado && <p>Programa terminado.</p>}
      </div>
    </div>
  );
}