import { useState } from "react";
import "./Ejercicio28.css";

const NOTA_MAXIMA = 20;
const NOTA_APROBATORIA = 11;

export default function Ejercicio28() {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);

    if (isNaN(n1) || isNaN(n2)) {
      setError("Escribe las dos notas.");
      setResultado(null);
      return;
    }

    if (n1 < 0 || n1 > NOTA_MAXIMA || n2 < 0 || n2 > NOTA_MAXIMA) {
      setError(`Las notas deben estar entre 0 y ${NOTA_MAXIMA}.`);
      setResultado(null);
      return;
    }

    setError("");
    const promedio = (n1 + n2) / 2;
    setResultado({ promedio, aprobado: promedio >= NOTA_APROBATORIA });
  };

  const limpiar = () => {
    setNota1("");
    setNota2("");
    setResultado(null);
    setError("");
  };

  return (
    <div className="ej28">
      <h2>Promedio de dos notas</h2>

      <label>
        Nota 1 (0 a {NOTA_MAXIMA})
        <input
          type="number"
          step="any"
          value={nota1}
          onChange={(e) => setNota1(e.target.value)}
          autoFocus
        />
      </label>

      <label>
        Nota 2 (0 a {NOTA_MAXIMA})
        <input
          type="number"
          step="any"
          value={nota2}
          onChange={(e) => setNota2(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calcular()}
        />
      </label>

      <div className="ej28-botones">
        <button onClick={calcular}>Calcular</button>
        <button className="ej28-limpiar" onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p className="ej28-error">{error}</p>}

      {resultado && (
        <div className="ej28-resultado">
          <p>
            Promedio: <strong>{Number(resultado.promedio.toFixed(2))}</strong>
          </p>
          <p className={resultado.aprobado ? "ej28-ok" : "ej28-mal"}>
            {resultado.aprobado
              ? "Comentario: el estudiante está APROBADO."
              : "Comentario: el estudiante está DESAPROBADO."}
          </p>
        </div>
      )}
    </div>
  );
}