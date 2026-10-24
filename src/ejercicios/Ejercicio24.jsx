import { useState } from "react";
import "./Ejercicio24.css";

export default function Ejercicio24() {
  const [radio, setRadio] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const r = parseFloat(radio);
    if (isNaN(r)) return;

    if (r <= 0) {
      setResultado({ valido: false });
      return;
    }

    setResultado({
      valido: true,
      longitud: 2 * Math.PI * r,
      area: Math.PI * r ** 2,
      volumen: (4 / 3) * Math.PI * r ** 3,
    });
  };

  const limpiar = () => {
    setRadio("");
    setResultado(null);
  };

  return (
    <div className="ej24">
      <h2>Circunferencia, círculo y esfera</h2>

      <label>
        Radio
        <input
          type="number"
          step="any"
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calcular()}
          autoFocus
        />
      </label>

      <div className="ej24-botones">
        <button onClick={calcular}>Calcular</button>
        <button className="ej24-limpiar" onClick={limpiar}>Limpiar</button>
      </div>

      {resultado && (
        <div className="ej24-resultado">
          {resultado.valido ? (
            <>
              <p>Longitud de la circunferencia: {Number(resultado.longitud.toFixed(4))}</p>
              <p>Área del círculo: {Number(resultado.area.toFixed(4))}</p>
              <p>Volumen de la esfera: {Number(resultado.volumen.toFixed(4))}</p>
            </>
          ) : (
            <p>El radio debe ser mayor que 0.</p>
          )}
        </div>
      )}
    </div>
  );
}