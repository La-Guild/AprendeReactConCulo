import React from "react";
import {WtfPerMinute} from "./App";

export class Wtfs extends React.Component<{
    onClick: () => void,
    inPanic: boolean,
    wtfs: number,
    elapsed: number,
    onClick1: () => void,
    elements: React.JSX.Element[]
}> {
    render() {
        return <header className="App-header">
            <button className="button" onClick={this.props.onClick}>
                {this.props.inPanic ? "Calm Down" : "Start Panic!"}
            </button>
            <p>
                {this.props.inPanic ? "WTFs totales " + this.props.wtfs : ""}
            </p>
            <p>
                {this.props.inPanic ? "WTFs por minuto " + WtfPerMinute(this.props.wtfs, this.props.elapsed) : ""}
            </p>
            {this.props.inPanic ? <button className="button" onClick={this.props.onClick1}>
                    WTF!
                </button>
                : null}
            <ul>
                {this.props.elements}
                {this.props.inPanic ? "Time in panic: " + this.props.elapsed / 1000 : ""}
            </ul>
        </header>;
    }
}