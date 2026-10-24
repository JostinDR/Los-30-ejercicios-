import { useState } from "react";
import "./Ejercicio15.css";

const INICIO = 20;
const FIN = 400;

export default function Ejercicio15() {
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    // Algoritmo repetitivo: se recorren los pares de 20 a 400 de 2 en 2
    let suma = 0;
    let producto = 1n;
    let cantidad = 0;

    for (let i = INICIO; i <= FIN; i += 2) {
      suma += i;
      producto *= BigInt(i);
      cantidad++;
    }

    const texto = producto.toString();
    const cientifica = `${texto[0]}.${texto.slice(1, 4)} × 10^${texto.length - 1}`;

    setResultado({ cantidad, suma, texto, cientifica, digitos: texto.length });
  };

  const limpiar = () => setResultado(null);

  return (
    <div className="ej15">
      <h2>Suma y producto de los pares entre {INICIO} y {FIN}</h2>

      <div className="ej15-botones">
        <button className="ej15-calcular" onClick={calcular}>Calcular</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      {resultado && (
        <div className="ej15-resultado">
          <table className="ej15-tabla">
            <tbody>
              <tr><th>Cantidad de pares</th><td>{resultado.cantidad}</td></tr>
              <tr className="ej15-total">
                <th>Suma</th>
                <td>{resultado.suma}</td>
              </tr>
              <tr className="ej15-total">
                <th>Producto (científica)</th>
                <td>{resultado.cientifica}</td>
              </tr>
            </tbody>
          </table>

          <p className="ej15-etiqueta">
            Producto completo ({resultado.digitos} dígitos):
          </p>
          <p className="ej15-producto">{resultado.texto}</p>
        </div>
      )}
    </div>
  );
}