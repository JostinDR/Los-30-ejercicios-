import { useState } from "react";
import "./Ejercicio29.css";

const CANTIDAD = 400;
const DEPORTES = ["Ajedrez", "Fútbol", "Vóley", "Básquet"];

const conteoInicial = () => ({ Ajedrez: 0, Fútbol: 0, Vóley: 0, Básquet: 0 });

export default function Ejercicio29() {
  const [conteo, setConteo] = useState(conteoInicial());

  let total = 0;
  for (const d of DEPORTES) {
    total += conteo[d];
  }

  const completo = total === CANTIDAD;

  const registrar = (deporte) => {
    if (completo) return;
    setConteo({ ...conteo, [deporte]: conteo[deporte] + 1 });
  };

  const llenarAleatorio = () => {
    const nuevo = conteoInicial();
    for (let i = 0; i < CANTIDAD; i++) {
      const d = DEPORTES[Math.floor(Math.random() * DEPORTES.length)];
      nuevo[d]++;
    }
    setConteo(nuevo);
  };

  const limpiar = () => setConteo(conteoInicial());

  return (
    <div className="ej29">
      <h2>Clasificación por deporte</h2>

      {completo ? (
        <p className="ej29-fin">Se clasificaron las {CANTIDAD} personas.</p>
      ) : (
        <>
          <p className="ej29-persona">
            Persona {total + 1} de {CANTIDAD}: ¿qué deporte practica?
          </p>
          <div className="ej29-deportes">
            {DEPORTES.map((d) => (
              <button key={d} onClick={() => registrar(d)}>{d}</button>
            ))}
          </div>
        </>
      )}

      <div className="ej29-botones">
        {!completo && (
          <button className="ej29-sec" onClick={llenarAleatorio}>
            Llenar con 400 aleatorias
          </button>
        )}
        <button className="ej29-sec" onClick={limpiar}>Limpiar</button>
      </div>

      <div className="ej29-resultado">
        <table className="ej29-tabla">
          <tbody>
            {DEPORTES.map((d) => (
              <tr key={d}>
                <th>{d}</th>
                <td>{conteo[d]}</td>
              </tr>
            ))}
            <tr className="ej29-total">
              <th>Total clasificadas</th>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}