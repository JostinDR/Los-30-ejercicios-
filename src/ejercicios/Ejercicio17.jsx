import { useState } from "react";
import "./Ejercicio17.css";

export default function Ejercicio17() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const determinar = () => {
    const texto = numero.trim();
    const n = Number(texto);

    if (texto === "" || isNaN(n)) {
      setError("Escribe un número válido.");
      setResultado(null);
      return;
    }

    setError("");

    // Un número tiene parte fraccionaria si NO es entero
    const tieneFraccion = !Number.isInteger(n);

    // Se separa la parte entera y la fraccionaria a partir del texto
    let entera = String(Math.trunc(n));
    let fraccion = "0";
    const comoTexto = String(Math.abs(n));

    if (tieneFraccion && !comoTexto.includes("e")) {
      fraccion = comoTexto.split(".")[1];
    } else if (tieneFraccion) {
      fraccion = "—"; // números muy pequeños en notación científica
    }

    setResultado({ n, tieneFraccion, entera, fraccion });
  };

  const limpiar = () => {
    setNumero("");
    setResultado(null);
    setError("");
  };

  return (
    <div className="ej17">
      <h2>¿Tiene parte fraccionaria?</h2>

      <label>
        Número
        <input
          type="number"
          step="any"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && determinar()}
          placeholder="Ej: 12.75"
        />
      </label>

      <div className="ej17-botones">
        <button className="ej17-calcular" onClick={determinar}>Determinar</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p className="ej17-error">{error}</p>}

      {resultado && (
        <div className="ej17-resultado">
          <p className="ej17-total">
            {resultado.tieneFraccion
              ? "SÍ tiene parte fraccionaria"
              : "No tiene parte fraccionaria"}
          </p>

          <table className="ej17-tabla">
            <tbody>
              <tr><th>Número</th><td>{resultado.n}</td></tr>
              <tr><th>Parte entera</th><td>{resultado.entera}</td></tr>
              <tr><th>Parte fraccionaria</th><td>{resultado.fraccion}</td></tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}