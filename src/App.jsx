import { useState } from "react";
import "./App.css";
import Ejercicio1 from "./ejercicios/Ejercicio1";
import Ejercicio2 from "./ejercicios/Ejercicio2";
import Ejercicio3 from "./ejercicios/Ejercicio3";
import Ejercicio4 from "./ejercicios/Ejercicio4";
import Ejercicio5 from "./ejercicios/Ejercicio5";
import Ejercicio6 from "./ejercicios/Ejercicio6";
import Ejercicio7 from "./ejercicios/Ejercicio7";
import Ejercicio8 from "./ejercicios/Ejercicio8";
import Ejercicio9 from "./ejercicios/Ejercicio9";
import Ejercicio10 from "./ejercicios/Ejercicio10";
import Ejercicio11 from "./ejercicios/Ejercicio11";
import Ejercicio12 from "./ejercicios/Ejercicio12";
import Ejercicio13 from "./ejercicios/Ejercicio13";
import Ejercicio14 from "./ejercicios/Ejercicio14";
import Ejercicio15 from "./ejercicios/Ejercicio15";
import Ejercicio16 from "./ejercicios/Ejercicio16";
import Ejercicio17 from "./ejercicios/Ejercicio17";
import Ejercicio18 from "./ejercicios/Ejercicio18";
import Ejercicio19 from "./ejercicios/Ejercicio19";
import Ejercicio20 from "./ejercicios/Ejercicio20";
import Ejercicio21 from "./ejercicios/Ejercicio21";
import Ejercicio22 from "./ejercicios/Ejercicio22";
import Ejercicio23 from "./ejercicios/Ejercicio23";
import Ejercicio24 from "./ejercicios/Ejercicio24";
import Ejercicio25 from "./ejercicios/Ejercicio25";
import Ejercicio26 from "./ejercicios/Ejercicio26";
import Ejercicio27 from "./ejercicios/Ejercicio27";
import Ejercicio28 from "./ejercicios/Ejercicio28";
import Ejercicio29 from "./ejercicios/Ejercicio29";
import Ejercicio30 from "./ejercicios/Ejercicio30";


function Placeholder({ nombre }) {
  return <p>Aquí se abre el proyecto de {nombre}.</p>;
}

const ejercicios = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  nombre: `Ejercicio ${i + 1}`,
  component: Placeholder,
}));

ejercicios[0].component = Ejercicio1;
ejercicios[1].component = Ejercicio2;
ejercicios[2].component = Ejercicio3;
ejercicios[3].component = Ejercicio4;
ejercicios[4].component = Ejercicio5;
ejercicios[5].component = Ejercicio6;
ejercicios[6].component = Ejercicio7;
ejercicios[7].component = Ejercicio8;
ejercicios[8].component = Ejercicio9;
ejercicios[9].component = Ejercicio10;
ejercicios[10].component = Ejercicio11;
ejercicios[11].component = Ejercicio12;
ejercicios[12].component = Ejercicio13;
ejercicios[13].component = Ejercicio14;
ejercicios[14].component = Ejercicio15;
ejercicios[15].component = Ejercicio16;
ejercicios[16].component = Ejercicio17;
ejercicios[17].component = Ejercicio18;
ejercicios[18].component = Ejercicio19;
ejercicios[19].component = Ejercicio20;
ejercicios[20].component = Ejercicio21;
ejercicios[21].component = Ejercicio22;
ejercicios[22].component = Ejercicio23;
ejercicios[23].component = Ejercicio24;
ejercicios[24].component = Ejercicio25;
ejercicios[25].component = Ejercicio26;
ejercicios[26].component = Ejercicio27;
ejercicios[27].component = Ejercicio28;
ejercicios[28].component = Ejercicio29;
ejercicios[29].component = Ejercicio30;

function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </svg>
  );
}

export default function App() {
  const [texto, setTexto] = useState("");     
  const [busqueda, setBusqueda] = useState(""); 
  const [abierto, setAbierto] = useState(null); 

  const buscar = () => setBusqueda(texto.trim().toLowerCase());

  const filtrados = ejercicios.filter((e) =>
    e.nombre.toLowerCase().includes(busqueda)
  );

    if (abierto) {
    const Proyecto = abierto.component;
    return (
      <div className="wrap entrar">
        <button className="back" onClick={() => setAbierto(null)}>
          Volver a los ejercicios
        </button>
        <h1>{abierto.nombre}</h1>
        <div className="project">
          <Proyecto nombre={abierto.nombre} />
        </div>
      </div>
    );
  }

  return (
    <div className="wrap">
      <h1>Ejercicios</h1>

      <div className="search" role="search">
        <input
          type="search"
          placeholder="Buscar ejercicio…"
          aria-label="Buscar ejercicio"
          value={texto}
          onChange={(e) => {
            setTexto(e.target.value);
            if (e.target.value === "") setBusqueda("");
          }}
          onKeyDown={(e) => e.key === "Enter" && buscar()}
        />
        <button aria-label="Buscar" onClick={buscar}>
          <SearchIcon />
        </button>
      </div>

      <div className="grid">
        {filtrados.map((e) => (
          <button key={e.id} className="card" onClick={() => setAbierto(e)}>
            {e.nombre}
          </button>
        ))}
      </div>

      {filtrados.length === 0 && (
        <p className="empty">No hay ejercicios con ese nombre.</p>
      )}
    </div>
  );
}