import React from 'react';
import logo from './logo.svg';
import './App.css';

//[ ] Por qué se pinta el botón en el centro?
//[ ] Como hacer que reaccione react a lo que hacemos
//[ ] Por qué no se actualiza el número de WTFs?
//[ ] Que es redux?
//[ ] Dispatch?
//[ ] Cómo se saca la consola?
//[ ] Como depurar
//[ ]my-5 mx-3? Esto lo mismo es de un video de youtube random y ya


class WTF {
    wtf: number;
  constructor() {
    this.wtf = 0;
  }
  get() {
    return this.wtf;
  }
  increment() {
    this.wtf = this.wtf + 1;
  }


}

class Apsds extends React.Component {
    wtf: WTF;
    constructor(props: any) {
        super(props);
        this.wtf = new WTF();
    }

}

function App(){
    const [wtfs, setWtfs] = React.useState(0);
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo"/>
            <p>
              WTFs por minuto {wtfs}
            </p>
            <button className="boton" onClick={() => { setWtfs(wtfs + 1)}}>
              WTF!
            </button>
          </header>
        </div>
    );
}

export default App;
