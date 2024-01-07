import React from 'react';
import logo from './logo.svg';
import './App.css';
//[ ] Por qué se pinta el botón en el centro?
//[X] Como hacer que reaccione react a lo que hacemos
//[X] Por qué no se actualiza el número de WTFs?
//[ ] Que es redux?
//[ ] Dispatch?
//[X] Cómo se saca la consola? (F12 en Chrome)
//[ ] Como depurar
//[ ] my-5 mx-3? Esto lo mismo es de un video de youtube random y ya
//[ ] En export default, que es el default
//[ ] React hooks
//[ ] Array destructuring para el estado
//[X] Como testear
//[X] Old value pasado en el set del estado
//[X] Por que react no es un framework? (allegedly)
//[X] Array spread operator
//[X] Como testear que no hay una cosa en la pantalla
//[ ] Como tirar todos los tests de una clase en Webstorm?
//[ ] Como hacer un array vacio

function App(){
    function wtf(){
        setWtfs(wtfs => wtfs + 1)
    }
    function toggle(){
        if (inPanic){
            setWtfs(0)
            setHistorial(historial  => [...historial, wtfs])
        }
        setPanic(current => !current)
    }

    const [wtfs, setWtfs] = React.useState(0);
    const [inPanic, setPanic] = React.useState(false);
    const [historial ,setHistorial] = React.useState(Array(0));

    const historialLabels = historial.map((wtf, index) => <li key={index}>Wtfs were... {wtf} at {new Date().toUTCString()}</li>)

    return (
        <div className="App">
            <header className="App-header">
                <button className="button" onClick={toggle}>
                    {inPanic ? "Calm Down" : "Start Panic!"}
                </button>
                <p>
                    {inPanic ? "WTFs por minuto " + wtfs : ""}
                </p>
                {inPanic ? <button className="button" onClick={wtf}>
                        WTF!
                    </button>
                    : null}
                <ul>
                    {historialLabels}
                </ul>

            </header>
        </div>
    );
}

export default App;
