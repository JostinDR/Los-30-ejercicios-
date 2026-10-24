import { useState } from "react";
import "./Ejercicio12.css";

const CANTIDAD = 50;

export default function Ejercicio12() {
  const [numero, setNumero] = useState("");
  const [numeros, setNumeros] = useState([]);
  const [error, setError] = useState("");

  const completo = numeros.length === CANTIDAD;

  const agregar = () => {
    const n = Number(numero);

    if (numero.trim() === "" || !Number.isInteger(n)) {
      setError("Escribe un número entero.");
      return;
    }

    setError("");
    setNumeros([...numeros, n]);
    setNumero("");
  };

  const llenarAleatorio = () => {
    const lista = [];
    for (let i = 0; i < CANTIDAD; i++) {
      lista.push(Math.floor(Math.random() * 101) - 50); // de -50 a 50
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

  // Algoritmo repetitivo: se recorren los números y se cuenta cada tipo
  let pares = 0;
  let impares = 0;
  let positivos = 0;
  let negativos = 0;
  let ceros = 0;

  for (const n of numeros) {
    if (n % 2 === 0) {
      pares++;
    } else {
      impares++;
    }

    if (n > 0) {
      positivos++;
    } else if (n < 0) {
      negativos++;
    } else {
      ceros++;
    }
  }

  return (
    <div className="ej12">
      <h2>Pares, impares, positivos y negativos</h2>

      {!completo && (
        <>
          <label>
            Número {numeros.length + 1} de {CANTIDAD}
            <input
              type="number"
              step="1"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && agregar()}
              placeholder="Ej: 8"
              autoFocus
            />
          </label>

          <div className="ej12-botones">
            <button className="ej12-calcular" onClick={agregar}>Agregar</button>
            <button onClick={llenarAleatorio}>Llenar con 50 aleatorios</button>
          </div>
        </>
      )}

      {error && <p className="ej12-error">{error}</p>}

      <div className="ej12-progreso">
        <div
          className="ej12-barra"
          style={{ width: `${(numeros.length / CANTIDAD) * 100}%` }}
        />
      </div>
      <small className="ej12-contador">
        {numeros.length} de {CANTIDAD} números ingresados
      </small>

      {numeros.length > 0 && (
        <div className="ej12-chips">
          {numeros.map((n, i) => (
            <span key={i} className="ej12-chip">{n}</span>
          ))}
        </div>
      )}

      {completo && (
        <div className="ej12-resultado">
          <h3>RESULTADO</h3>
          <table className="ej12-tabla">
            <tbody>
              <tr><th>Pares</th><td>{pares}</td></tr>
              <tr><th>Impares</th><td>{impares}</td></tr>
              <tr><th>Positivos</th><td>{positivos}</td></tr>
              <tr><th>Negativos</th><td>{negativos}</td></tr>
              <tr><th>Ceros</th><td>{ceros}</td></tr>
            </tbody>
          </table>
          <button className="ej12-otra" onClick={reiniciar}>
            Empezar de nuevo
          </button>
        </div>
      )}

      {!completo && numeros.length > 0 && (
        <button className="ej12-otra" onClick={reiniciar}>Limpiar todo</button>
      )}
    </div>
  );
}