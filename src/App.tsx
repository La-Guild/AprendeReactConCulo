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

function App(){
    function wtf(){
        setWtfs(wtfs => wtfs + 1)
    }
    function toggle(){
        setPanic(current => !current)
    }

    const [wtfs, setWtfs] = React.useState(0);
    const [inPanic, setPanic] = React.useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    WTFs por minuto {wtfs}
                </p>
                <button className="boton" onClick={toggle}>
                    {inPanic ? "Calm Down" : "Start Panic!"}
                </button>
                {inPanic ? <button className="boton" onClick={wtf}>
                WTF!
            </button>
                : null}

            </header>
        </div>
    );
}

export default App;
