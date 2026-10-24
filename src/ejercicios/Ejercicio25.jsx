import { useState } from "react";
import "./Ejercicio25.css";

const CANTIDAD = 130;
const LIMITE = 130;
const DESCUENTO = 0.15;

function calcularPago(consumo) {
  return consumo > LIMITE ? consumo * (1 - DESCUENTO) : consumo;
}

export default function Ejercicio25() {
  const [consumo, setConsumo] = useState("");
  const [consumos, setConsumos] = useState([]);

  const completo = consumos.length === CANTIDAD;

  const agregar = () => {
    const c = parseFloat(consumo);
    if (isNaN(c) || c < 0) return;
    setConsumos([...consumos, c]);
    setConsumo("");
  };

  const llenarAleatorio = () => {
    const lista = [];
    for (let i = 0; i < CANTIDAD; i++) {
      lista.push(Math.floor(Math.random() * 241) + 10); // de 10 a 250
    }
    setConsumos(lista);
    setConsumo("");
  };

  const limpiar = () => {
    setConsumo("");
    setConsumos([]);
  };

  // Suma de todos los pagos
  let total = 0;
  for (const c of consumos) {
    total += calcularPago(c);
  }

  return (
    <div className="ej25">
      <h2>Pagos del restaurante</h2>

      {!completo && (
        <label>
          Consumo {consumos.length + 1} de {CANTIDAD}
          <input
            type="number"
            min="0"
            step="any"
            value={consumo}
            onChange={(e) => setConsumo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && agregar()}
            autoFocus
          />
        </label>
      )}

      <div className="ej25-botones">
        {!completo && <button onClick={agregar}>Agregar</button>}
        {!completo && (
          <button className="ej25-sec" onClick={llenarAleatorio}>
            Llenar con 130 aleatorios
          </button>
        )}
        <button className="ej25-sec" onClick={limpiar}>Limpiar</button>
      </div>

      <small className="ej25-contador">
        {consumos.length} de {CANTIDAD} consumos ingresados
      </small>

      {consumos.length > 0 && (
        <div className="ej25-resultado">
          <div className="ej25-scroll">
            <table className="ej25-tabla">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Consumo</th>
                  <th>Descuento</th>
                  <th>Pago</th>
                </tr>
              </thead>
              <tbody>
                {consumos.map((c, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{c.toFixed(2)}</td>
                    <td>{c > LIMITE ? "15%" : "—"}</td>
                    <td>{calcularPago(c).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="ej25-total">
            {completo ? "Total de todos los pagos" : "Total hasta ahora"}: $
            {total.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}