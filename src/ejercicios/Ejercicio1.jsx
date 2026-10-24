import { useState } from "react";
import "./Ejercicio1.css";

const HORAS_NORMALES = 40;
const RECARGO = 1.5; 

export  default function Ejercicio1() {
    const [horas, setHoras] = useState("");
    const [tarifa, setTarifa] = useState("");
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState("");

    const calcular = () => {
        const h = parseFloat(horas);
        const t = parseFloat(tarifa);

        if (isNaN(h) || isNaN(t) || h < 0 || t < 0) {
            setError("Escribe horas y tarifa válidas (números mayores o iguales a 0).");
            setResultado(null);
            return;
        }

        setError("");

        let horasNormales = h;
        let horasExtras = 0;
        let salario;

        if (h > HORAS_NORMALES) {
            horasNormales = HORAS_NORMALES;
            horasExtras = h - HORAS_NORMALES;
            salario = horasNormales * t + horasExtras * t * RECARGO;
        } else {
            salario = h * t;
        }

        setResultado({ horasNormales, horasExtras, salario });
    };

    const limpiar = () => {
        setHoras("");
        setTarifa("");
        setResultado(null);
        setError("");
    };

    return (
        <div className="ej1">
            <h2>Cálculo de salario</h2>

            <label>
                Horas trabajadas 
                <input
                type="number"
                min="0"
                value={horas}
                onChange={(e) => setHoras(e.target.value)}
                placeholder="Ej: 45"
                />
                </label>

                <label>
                    Tarifa por hora 
                    <input
                    type="number"
                    min="0"
                    value={tarifa}
                    onChange={(e) => setTarifa(e.target.value)}
                    placeholder="Ej: 10"
                    />
                    </label>

                    <div className="ej1-botones">
                        <button className="ej1-calcular" onClick={calcular}>Calcular</button>
                        <button onClick={limpiar}>Limpiar</button>
                        </div>

                        {error && <p clasName="ej1-error">{error}</p>}

                        {resultado && (
                            <div clasName="ej1-resultado">
                                <p>Horas normales: {resultado.horasNormales}</p>
                                <p>Horas extras: {resultado.horasExtras}</p>
                                <p className="ej1-total">Salario: {resultado.salario.toFixed(2)}</p>
                            </div>
                        )}
                        </div>
    );
}