import { useState } from "react";
import "./Ejercicio14.css";

const CANTIDAD = 100;

export default function Ejercicio14() {
  const [numero, setNumero] = useState("");
  const [numeros, setNumeros] = useState([]);
  const [error, setError] = useState("");

  const completo = numeros.length === CANTIDAD;

  const agregar = () => {
    const n = Number(numero);

    if (numero.trim() === "" || isNaN(n)) {
      setError("Escribe un número válido.");
      return;
    }

    setError("");
    setNumeros([...numeros, n]);
    setNumero("");
  };

  const llenarAleatorio = () => {
    const lista = [];
    for (let i = 0; i < CANTIDAD; i++) {
      lista.push(Math.floor(Math.random() * 100) + 1); // de 1 a 100
    }
    setNumeros(lista);
    setNumero("");
    setError("");
  };

  const reiniciar = () => {
    setNumero("");
    setNumeros([]);
    setError("");
  };

  // Algoritmo repetitivo: se suman todos los números
  let suma = 0;
  for (const n of numeros) {
    suma += n;
  }
  const media = completo ? suma / CANTIDAD : 0;

  return (
    <div className="ej14">
      <h2>Media de 100 números</h2>

      {!completo && (
        <>
          <label>
            Número {numeros.length + 1} de {CANTIDAD}
            <input
              type="number"
              step="any"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && agregar()}
              placeholder="Ej: 15"
              autoFocus
            />
          </label>

          <div className="ej14-botones">
            <button className="ej14-calcular" onClick={agregar}>Agregar</button>
            <button onClick={llenarAleatorio}>Llenar con 100 aleatorios</button>
          </div>
        </>
      )}

      {error && <p className="ej14-error">{error}</p>}

      <div className="ej14-progreso">
        <div
          className="ej14-barra"
          style={{ width: `${(numeros.length / CANTIDAD) * 100}%` }}
        />
      </div>
      <small className="ej14-contador">
        {numeros.length} de {CANTIDAD} números ingresados
      </small>

      {numeros.length > 0 && (
        <div className="ej14-chips">
          {numeros.map((n, i) => (
            <span key={i} className="ej14-chip">{n}</span>
          ))}
        </div>
      )}

      {completo && (
        <div className="ej14-resultado">
          <h3>RESULTADO</h3>
          <table className="ej14-tabla">
            <tbody>
              <tr><th>Cantidad de números</th><td>{CANTIDAD}</td></tr>
              <tr><th>Suma total</th><td>{suma.toFixed(2)}</td></tr>
              <tr className="ej14-total">
                <th>Media</th>
                <td>{media.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <button className="ej14-otra" onClick={reiniciar}>
            Empezar de nuevo
          </button>
        </div>
      )}

      {!completo && numeros.length > 0 && (
        <button className="ej14-otra" onClick={reiniciar}>Limpiar todo</button>
      )}
    </div>
  );
}