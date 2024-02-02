import React, {useEffect} from 'react';
import './App.css';
import {HistoryElement} from "./HistoryElement";
import {Title} from "./Title";
import {Wtfs} from "./Wtfs";
//[X] Por qué se pinta el botón en el centro?
//[X] Como hacer que reaccione react a lo que hacemos
//[X] Por qué no se actualiza el número de WTFs?
//[ ] Que es redux?
//[ ] Dispatch?
//[X] Cómo se saca la consola? (F12 en Chrome)
//[ ] Como depurar
//[ ] my-5 mx-3? Esto lo mismo es de un video de youtube random y ya
//[X] En export default, que es el default
    // No sabemos si en JS o TS o React
//[X] React hooks.... Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
//[ ] Array destructuring para el estado
//[X] Como testear
//[X] Old value pasado en el set del estado
//[X] Por que react no es un framework? (allegedly)
//[X] Array spread operator
//[X] Como testear que no hay una cosa en la pantalla
//[ ] Como tirar todos los tests de una clase en Webstorm?
//[X] Como hacer un array vacio
//[X] Timers?
//[X] use effect???
//[ ] Deps useeffect?
//[ ] No sabemos cómo modularizar por compoenntes cuando necesitan estado compartido

function App(){
    function wtf(){
        setWtfs(wtfs => wtfs + 1)
    }
    function toggle(){
        if (inPanic){
            setWtfs(0)

            setHistorial(historial  => [...historial, new HistoryElement(start, new Date(), wtfs)])
        }
        else
        {
            setStart(start => new Date());
        }
        setPanic(current => !current)
    }


    const [start, setStart] = React.useState(new Date())
    const [wtfs, setWtfs] = React.useState(0)
    const [inPanic, setPanic] = React.useState(false)
    const [historial ,setHistorial] = React.useState(Array(0))
    const [elapsed ,setElapsed] = React.useState(0)

    const historialLabels = historial.map((wtf, index) => <li key={index}>{wtf.toString()}</li>)

    // create an interval and do cleanup
    useEffect(() => {
        const delta = 17

        if (inPanic) {
            const interval = setInterval(() => {
                setElapsed(elapsed => elapsed + delta)
            }
            , delta);
            return () => clearInterval(interval);
        }
        else
        {
            setElapsed(0)
        }
    }, [inPanic]);

    return (
        <div className="App">
            <Title/>
            <Wtfs onClick={toggle} inPanic={inPanic} wtfs={wtfs} elapsed={elapsed} onClick1={wtf}
                  elements={historialLabels}/>
        </div>
    );
}

export function WtfPerMinute(wtfs: number, elapsed: number) {
    return elapsed <= 60000 ? wtfs : wtfs / (elapsed / 60000)
}
export default App;
