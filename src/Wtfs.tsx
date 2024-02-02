import React, {useEffect} from "react";
import {HistoryElement} from "./HistoryElement";

export class Wtfs extends React.Component {
    render() {

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

        function WtfPerMinute(wtfs: number, elapsed: number) {
            return elapsed <= 60000 ? wtfs : wtfs / (elapsed / 60000)
        }

        const [start, setStart] = React.useState(new Date())
        const [wtfs, setWtfs] = React.useState(0)
        const [inPanic, setPanic] = React.useState(false)
        const [historial ,setHistorial] = React.useState(Array(0))
        const [elapsed ,setElapsed] = React.useState(0)
        const historialLabels = historial.map((wtf, index) => <li key={index}>{wtf.toString()}</li>)

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

        return <header className="App-header">
            <button className="button" onClick={toggle}>
                {inPanic ? "Calm Down" : "Start Panic!"}
            </button>
            <p>
                {inPanic ? "WTFs totales " + wtfs : ""}
            </p>
            <p>
                {inPanic ? "WTFs por minuto " + WtfPerMinute(wtfs, elapsed) : ""}
            </p>
            {inPanic ? <button className="button" onClick={wtf}>
                    WTF!
                </button>
                : null}
            <ul>
                {historialLabels}
                {inPanic ? "Time in panic: " + elapsed / 1000 : ""}
            </ul>
        </header>;
    }


}