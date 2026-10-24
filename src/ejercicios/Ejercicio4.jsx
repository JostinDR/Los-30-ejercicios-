import { useState } from "react";
import "./Ejercicio4.css";

export default function Ejercicio4() {
  const [segundos, setSegundos] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    const s = parseInt(segundos, 10);

    if (isNaN(s) || s < 0) {
      setError("Escribe un número entero de segundos (mayor o igual a 0).");
      setResultado(null);
      return;
    }

    setError("");

    const minutos = Math.floor(s / 60);
    const sobrantes = s % 60;
    const faltantes = sobrantes === 0 ? 0 : 60 - sobrantes;

    setResultado({ minutos, sobrantes, faltantes });
  };

  const limpiar = () => {
    setSegundos("");
    setResultado(null);
    setError("");
  };

  return (
    <div className="ej4">
      <h2>Segundos para completar minutos</h2>

      <label>
        Tiempo en segundos
        <input
          type="number"
          min="0"
          step="1"
          value={segundos}
          onChange={(e) => setSegundos(e.target.value)}
          placeholder="Ej: 130"
        />
      </label>

      <div className="ej4-botones">
        <button className="ej4-calcular" onClick={calcular}>Calcular</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      {error && <p className="ej4-error">{error}</p>}

      {resultado && (
        <div className="ej4-resultado">
          <p>Minutos completos: {resultado.minutos}</p>
          <p>Segundos sobrantes: {resultado.sobrantes}</p>
          <p className="ej4-total">
            Segundos que faltan para el siguiente minuto exacto: {resultado.faltantes}
          </p>
        </div>
      )}
    </div>
  );
}