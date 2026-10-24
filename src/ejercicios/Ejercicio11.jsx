import { useState } from "react";
import "./Ejercicio11.css";

const IVA = 0.15;
const LIMITE_DESCUENTO = 50;
const DESCUENTO = 0.05;

export default function Ejercicio11() {
  const [precio, setPrecio] = useState("");
  const [unidades, setUnidades] = useState("");
  const [factura, setFactura] = useState(null);
  const [error, setError] = useState("");

  const emitir = () => {
    const p = parseFloat(precio);
    const u = parseInt(unidades, 10);

    if (isNaN(p) || p < 0 || isNaN(u) || u < 1) {
      setError("Escribe un precio válido y al menos 1 unidad (número entero).");
      setFactura(null);
      return;
    }

    setError("");

    const subtotal = p * u;
    const iva = subtotal * IVA;
    const bruto = subtotal + iva;
    const descuento = bruto > LIMITE_DESCUENTO ? bruto * DESCUENTO : 0;
    const total = bruto - descuento;

    setFactura({ p, u, subtotal, iva, bruto, descuento, total });
  };

  const limpiar = () => {
    setPrecio("");
    setUnidades("");
    setFactura(null);
    setError("");
  };

  return (
    <div className="ej11">
      <h2>Factura de compra</h2>

      <label>
        Precio de venta por unidad
        <input
          type="number"
          min="0"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Ej: 20"
        />
      </label>

      <label>
        Unidades
        <input
          type="number"
          min="1"
          step="1"
          value={unidades}
          onChange={(e) => setUnidades(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && emitir()}
          placeholder="Ej: 3"
        />
      </label>

      <div className="ej11-botones">
        <button className="ej11-calcular" onClick={emitir}>Emitir factura</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p className="ej11-error">{error}</p>}

      {factura && (
        <div className="ej11-resultado">
          <h3>FACTURA</h3>

          <table className="ej11-tabla">
            <tbody>
              <tr>
                <th>Precio unitario</th>
                <td>{factura.p.toFixed(2)}</td>
              </tr>
              <tr>
                <th>Unidades</th>
                <td>{factura.u}</td>
              </tr>
              <tr>
                <th>Subtotal (sin IVA)</th>
                <td>{factura.subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <th>IVA (15%)</th>
                <td>{factura.iva.toFixed(2)}</td>
              </tr>
              <tr>
                <th>Precio bruto</th>
                <td>{factura.bruto.toFixed(2)}</td>
              </tr>
              <tr>
                <th>Descuento (5%)</th>
                <td>- {factura.descuento.toFixed(2)}</td>
              </tr>
              <tr className="ej11-total">
                <th>TOTAL A PAGAR</th>
                <td>{factura.total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          {factura.descuento === 0 && (
            <small>No aplica descuento: el precio bruto no supera 50.00.</small>
          )}
        </div>
      )}
    </div>
  );
}