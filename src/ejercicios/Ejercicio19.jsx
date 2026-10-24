import { useState } from "react";
import "./Ejercicio19.css";

const MAX_PROCESOS = 10;

// Redondea a 4 decimales y evita mostrar "-0"
function fmt(n) {
  const r = Number(n.toFixed(4));
  return String(r === 0 ? 0 : r);
}

export default function Ejercicio19() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [contador, setContador] = useState(0); // procesos realizados
  const [historial, setHistorial] = useState([]);
  const [error, setError] = useState("");

  const terminado = contador >= MAX_PROCESOS;

  const calcular = () => {
    const n1 = parseFloat(a);
    const n2 = parseFloat(b);

    if (isNaN(n1) || isNaN(n2)) {
      setError("Escribe los dos números.");
      return;
    }

    setError("");

    const proceso = {
      id: contador + 1,
      n1,
      n2,
      suma: fmt(n1 + n2),
      resta: fmt(n1 - n2),
      multiplicacion: fmt(n1 * n2),
      division: n2 === 0 ? "No definida" : fmt(n1 / n2),
    };

    setHistorial([...historial, proceso]);
    setContador(contador + 1); // se cuenta el proceso
    setA("");
    setB("");
  };

  const reiniciar = () => {
    setA("");
    setB("");
    setContador(0);
    setHistorial([]);
    setError("");
  };

  const ultimo = historial[historial.length - 1];

  return (
    <div className="ej19">
      <h2>Operaciones con 2 números</h2>

      <p className="ej19-contador">
        Proceso {terminado ? MAX_PROCESOS : contador + 1} de {MAX_PROCESOS}
        {" · "}realizados: <strong>{contador}</strong>
      </p>

      {!terminado && (
        <>
          <div className="ej19-coef">
            <label>
              Número 1
              <input
                type="number"
                step="any"
                value={a}
                onChange={(e) => setA(e.target.value)}
                placeholder="Ej: 8"
                autoFocus
              />
            </label>
            <label>
              Número 2
              <input
                type="number"
                step="any"
                value={b}
                onChange={(e) => setB(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && calcular()}
                placeholder="Ej: 2"
              />
            </label>
          </div>

          <div className="ej19-botones">
            <button className="ej19-calcular" onClick={calcular}>Calcular</button>
            <button onClick={reiniciar}>Reiniciar</button>
          </div>
        </>
      )}

      {error && <p className="ej19-error">{error}</p>}

      {ultimo && (
        <div className="ej19-resultado">
          <h3>Resultado del proceso {ultimo.id}</h3>
          <table className="ej19-tabla">
            <tbody>
              <tr><th>{ultimo.n1} + {ultimo.n2}</th><td>{ultimo.suma}</td></tr>
              <tr><th>{ultimo.n1} − {ultimo.n2}</th><td>{ultimo.resta}</td></tr>
              <tr><th>{ultimo.n1} × {ultimo.n2}</th><td>{ultimo.multiplicacion}</td></tr>
              <tr><th>{ultimo.n1} ÷ {ultimo.n2}</th><td>{ultimo.division}</td></tr>
            </tbody>
          </table>
        </div>
      )}

      {historial.length > 0 && (
        <div className="ej19-historial">
          <h3>Historial</h3>
          <div className="ej19-scroll">
            <table className="ej19-hist">
              <thead>
                <tr>
                  <th>#</th>
                  <th>N1</th>
                  <th>N2</th>
                  <th>Suma</th>
                  <th>Resta</th>
                  <th>Mult.</th>
                  <th>Div.</th>
                </tr>
              </thead>
              <tbody>
                {historial.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.n1}</td>
                    <td>{p.n2}</td>
                    <td>{p.suma}</td>
                    <td>{p.resta}</td>
                    <td>{p.multiplicacion}</td>
                    <td>{p.division}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {terminado && (
        <div className="ej19-fin">
          <p>Se realizaron los {MAX_PROCESOS} procesos. El programa terminó.</p>
          <button className="ej19-calcular" onClick={reiniciar}>
            Empezar de nuevo
          </button>
        </div>
      )}
    </div>
  );
}