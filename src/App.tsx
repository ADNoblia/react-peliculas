import { useState } from "react";
import MostrarTexto from "./MostrarTexto";
import Cabezera from "./Cabezera";

export default function App() {

  const [texto, setTexto] = useState('');
  
  const alerta = () => alert('CLICK');

  const mensajeKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => setTexto(e.currentTarget.value);

  return (
    <>
      <Cabezera />
      <button onClick={alerta}>Insertar</button>
      <div>
        <br />
        <input onKeyUp={(e) => mensajeKeyUp(e)} />
      </div>
      <MostrarTexto texto={texto} />
    </>
  );
}
