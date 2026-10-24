import { useState } from "react";
import "./Ejercicio18.css";

// Redondea a 4 decimales y evita mostrar "-0"
function fmt(n) {
  const r = Number(n.toFixed(4));
  return String(r === 0 ? 0 : r);
}

export default function Ejercicio18() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    const na = parseFloat(a);
    const nb = parseFloat(b);
    const nc = parseFloat(c);

    if (isNaN(na) || isNaN(nb) || isNaN(nc)) {
      setError("Escribe los tres coeficientes (a, b y c).");
      setResultado(null);
      return;
    }

    if (na === 0) {
      setError("El coeficiente a no puede ser 0 (no sería una ecuación cuadrática).");
      setResultado(null);
      return;
    }

    setError("");

    const D = nb * nb - 4 * na * nc;
    let tipo;
    let soluciones;

    if (D > 0) {
      const raiz = Math.sqrt(D);
      const x1 = (-nb + raiz) / (2 * na);
      const x2 = (-nb - raiz) / (2 * na);
      tipo = "Dos soluciones reales distintas";
      soluciones = [fmt(x1), fmt(x2)];
    } else if (D === 0) {
      const x = -nb / (2 * na);
      tipo = "Una solución real doble";
      soluciones = [fmt(x)];
    } else {
      const real = -nb / (2 * na);
      const imag = Math.sqrt(-D) / (2 * Math.abs(na));
      const re = fmt(real);
      const im = fmt(imag);
      tipo = "Dos soluciones imaginarias";
      if (Number(re) === 0) {
        soluciones = [`${im}i`, `-${im}i`];
      } else {
        soluciones = [`${re} + ${im}i`, `${re} - ${im}i`];
      }
    }

    setResultado({ na, nb, nc, D, tipo, soluciones });
  };

  const limpiar = () => {
    setA("");
    setB("");
    setC("");
    setResultado(null);
    setError("");
  };

  return (
    <div className="ej18">
      <h2>Ecuación cuadrática</h2>
      <p className="ej18-formula">ax² + bx + c = 0</p>

      <div className="ej18-coef">
        <label>
          a
          <input
            type="number"
            step="any"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="1"
          />
        </label>
        <label>
          b
          <input
            type="number"
            step="any"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="-3"
          />
        </label>
        <label>
          c
          <input
            type="number"
            step="any"
            value={c}
            onChange={(e) => setC(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calcular()}
            placeholder="2"
          />
        </label>
      </div>

      <div className="ej18-botones">
        <button className="ej18-calcular" onClick={calcular}>Resolver</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p className="ej18-error">{error}</p>}

      {resultado && (
        <div className="ej18-resultado">
          <p className="ej18-tipo">{resultado.tipo}</p>

          <table className="ej18-tabla">
            <tbody>
              <tr>
                <th>Ecuación</th>
                <td>
                  {resultado.na}x² + ({resultado.nb})x + ({resultado.nc}) = 0
                </td>
              </tr>
              <tr>
                <th>Discriminante (D)</th>
                <td>{fmt(resultado.D)}</td>
              </tr>
              {resultado.soluciones.length === 1 ? (
                <tr className="ej18-total">
                  <th>x</th>
                  <td>{resultado.soluciones[0]}</td>
                </tr>
              ) : (
                <>
                  <tr className="ej18-total">
                    <th>x₁</th>
                    <td>{resultado.soluciones[0]}</td>
                  </tr>
                  <tr className="ej18-total">
                    <th>x₂</th>
                    <td>{resultado.soluciones[1]}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}